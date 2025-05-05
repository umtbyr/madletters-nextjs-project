"use client";

import { Participant, Quiz } from "@/app/models/quiz";
import { useEffect, useRef, useState } from "react";
import { joinHandler } from "./services";
import { ListContainer } from "@/components/components/ListContainer";
import { useGetParticipantsStats } from "./hooks/useGetParticipantsStats";
import { ReadyButton, ShareButton } from "./components";
import toast from "react-hot-toast";
import { deleteParticipant } from "./services";
import { QuestionKeyContainer } from "@/app/quiz/[slug]/QuestionKeysContainer";
import { QuestionContainer } from "@/app/quiz/[slug]/QuestionContainer";
import { saveQuizResults } from "@/app/quiz/[slug]/actions";
import clsx from "clsx";
import { Timer } from "@/app/quiz/[slug]/components/Timer";
import { FinishQuizButton } from "@/app/quiz/[slug]/components";
import { CircleCheckIcon, CircleXIcon } from "lucide-react";

type RoomContainerProps = {
  participantsStatus: Participant[];
  userId: string;
  roomId: string;
  roomCode: string;
  quiz: Quiz | null;
  hostUserId: string;
};

export function RoomContainer({
  participantsStatus,
  userId,
  quiz,
  roomId,
  hostUserId,
  roomCode,
}: RoomContainerProps) {
  const [isFinished, setIsFinished] = useState(
    participantsStatus.find((p) => p.userId === userId)?.finished ?? false
  );
  const { participantsStats, setParticipantsStats, isAllReady } =
    useGetParticipantsStats({
      initialParticipants: participantsStatus,
      roomCode,
      isFinished,
    });

  const myParticipant = participantsStats.find((p) => p.userId === userId);
  const participantId = useRef<string | null>(null);
  const participant_id = participantsStats.find((p) => p.userId === userId)?.id;
  console.log("my participantId: ", participant_id);

  const setIsFinishedHandler = () => {
    setIsFinished(true);
  };

  useEffect(() => {
    const joinUserHandler = async () => {
      const userName = localStorage.getItem("userName") ?? "";
      const isAlreadyInRoom = participantsStats?.find(
        (item) => item.userId === userId
      );

      if (!isAlreadyInRoom) {
        setParticipantsStats((prev) => [
          ...prev,
          { finished: false, ready: false, userId, userName: userName },
        ]);
        try {
          await joinHandler({
            userId: userId,
            roomCode: roomCode,
            userName: userName,
          });
        } catch (error) {
          console.log(error);
          setParticipantsStats((prev) =>
            prev.filter((p) => p.userId === userId)
          );
          toast.error("Couldn't join the room. Try refreshing the page.");
        }
        participantId.current =
          participantsStats.find((p) => p.userId === userId)?.id ?? "";
      }
    };
    joinUserHandler();
  }, []);

  useEffect(() => {
    return () => {
      const id = participant_id;
      if (id && !isAllReady) {
        const isHost = hostUserId === userId;
        deleteParticipant(id, isHost, roomCode);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-full md:max-w-5xl flex-col items-center">
      {!isAllReady && !isFinished && (
        <>
          <div className="flex justify-between gap-8 px-6 mt-6 mb-4">
            <ShareButton />
            <ReadyButton
              setParticipantsStats={setParticipantsStats}
              userId={userId}
              isReady={myParticipant?.ready ?? false}
              participant_id={myParticipant?.id ?? ""}
              participantUserId={myParticipant?.userId ?? ""}
              roomId={roomId}
            />
          </div>
          <div>
            <ListContainer
              disablePadding
              data={participantsStats ?? []}
              renderItem={(participant) => {
                return (
                  <div
                    className={
                      "flex items-center px-4 py-2 w-full justify-between  "
                    }
                  >
                    <div className="flex gap-2 items-center">
                      <div className="p-2 w-15 h-15 border-4 border-amber-500 rounded-full shadow-2xl">
                        <img
                          src={"/UserIcon.svg"}
                          alt="user-profile-svg"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="flex flex-col justify-center ">
                        <p className={"text-lg font-bold leading-none"}>
                          {participant.userName}
                        </p>
                        <p
                          className={
                            "text-md  text-gray-400/90 text-shadow-zinc-500"
                          }
                        >
                          score {participant.score ?? 0}
                        </p>
                      </div>
                    </div>
                    {
                      <div>
                        {participant.ready ? (
                          <CircleCheckIcon className="w-10 h-10 text-green-500" />
                        ) : (
                          <CircleXIcon className="w-10 h-10 text-red-600" />
                        )}
                      </div>
                    }
                  </div>
                );
              }}
            />
          </div>
        </>
      )}

      <div>
        {isAllReady && !isFinished && (
          <>
            <div className="flex w-full px-2 items-center">
              <div className="w-1/3"></div>
              <div className=" flex w-1/3 justify-center mt-2 ">
                <Timer duration={60 * 12} />
              </div>
              <div className="w-1/3 flex justify-end">
                <FinishQuizButton />
              </div>
            </div>
            <div className=" mx-2 my-8">
              <QuestionKeyContainer />
            </div>
            <QuestionContainer
              setIsFinishedHandler={setIsFinishedHandler}
              roomCode={roomCode}
              isOnline={true}
              participant_id={participant_id}
              quizName={quiz?.title ?? ""}
              userId={userId ?? ""}
              saveResults={saveQuizResults}
              questions={quiz?.questions ?? []}
              quizId={quiz?.questions[0].quizId ?? ""}
            />
          </>
        )}
        {isFinished && (
          <div>
            <ListContainer
              data={participantsStats
                .filter((p) => p.finished === true)
                .sort((a, b) => (b?.score ?? 0) - (a?.score ?? 0))}
              renderItem={(participant) => {
                const className =
                  participant.userId === userId ? " bg-amber-400/80  " : "";
                return (
                  <div
                    className={
                      "flex items-center px-4 py-2 w-full justify-between  "
                    }
                  >
                    <p
                      className={clsx(
                        "text-xl font-extrabold p-4 rounded-2xl shadow-xl",
                        className
                      )}
                    >
                      @{participant.userName}
                    </p>
                    <p className="text-2xl font-extrabold ">
                      {participant.score}
                    </p>
                  </div>
                );
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
