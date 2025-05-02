"use client";

import { Participant, Quiz } from "@/app/models/quiz";
import { useEffect, useRef } from "react";
import { joinHandler } from "./services";
import { ListContainer } from "@/components/components/ListContainer";
import { useGetParticipantsStats } from "./hooks/useGetParticipantsStats";
import { ReadyButton } from "./components";
import toast from "react-hot-toast";
import { deleteParticipant } from "./services";
import { QuestionKeyContainer } from "@/app/quiz/[slug]/QuestionKeysContainer";
import { QuestionContainer } from "@/app/quiz/[slug]/QuestionContainer";
import { saveQuizResults } from "@/app/quiz/[slug]/actions";
import clsx from "clsx";
import { Timer } from "@/app/quiz/[slug]/components/Timer";
import { FinishQuizButton } from "@/app/quiz/[slug]/components";

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
  const { participantsStats, setParticipantsStats, isAllReady } =
    useGetParticipantsStats({
      initialParticipants: participantsStatus,
      roomCode,
    });

  const participantId = useRef<string | null>(null);

  const isFinished = participantsStats.find(
    (p) => p.userId === userId
  )?.finished;

  const participant_id = participantsStats.find((p) => p.userId === userId)?.id;
  console.log("my participantId: ", participant_id);

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
          toast.error("Giriş yapılamadı lütfen sayfayı yenileyiniz.");
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
      if (id) {
        const isHost = hostUserId === userId;
        deleteParticipant(id, isHost, roomCode);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-full md:max-w-5xl flex-col items-center">
      {!isAllReady && (
        <>
          <h1 className="text-2xl text-amber-500 text-center">
            Oda {roomCode}
          </h1>
          <div>
            <ListContainer
              data={participantsStats ?? []}
              renderItem={(participant) => {
                const className =
                  participant.userId === userId
                    ? " bg-amber-400/50 rounded-2xl border-2 border-black"
                    : "";
                return (
                  <div
                    className={clsx(
                      "flex items-center px-4 py-2 w-full justify-between ",
                      className
                    )}
                  >
                    <p className="text-xl font-bold">{participant.userName}</p>
                    <div>
                      <ReadyButton
                        setParticipantsStats={setParticipantsStats}
                        userId={userId}
                        isReady={participant.ready}
                        participant_id={participant.id ?? ""}
                        participantUserId={participant.userId}
                        roomId={roomId}
                      />
                    </div>
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
              <div className=" flex w-1/3 justify-center ">
                <Timer duration={60 * 2 * 10} />
              </div>
              <div className="w-1/3">
                <FinishQuizButton />
              </div>
            </div>
            <div className=""></div>
            <div>
              <QuestionKeyContainer />
            </div>
            <QuestionContainer
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
                  participant.userId === userId
                    ? " bg-amber-400/50 rounded-2xl border-2 border-black"
                    : "";
                return (
                  <div
                    className={clsx(
                      "flex items-center px-4 py-2 w-full justify-between ",
                      className
                    )}
                  >
                    <p className="text-xl font-bold">{participant.userName}</p>
                    <p className="text-xl font-bold">{participant.score}</p>
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
