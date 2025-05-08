import { Participant } from "@/app/models/quiz";
import { ListContainer } from "@/components/components/ListContainer";
import { CircleCheckIcon, CircleXIcon } from "lucide-react";

type UserListProps = {
  participantsStats: Participant[];
};

export function UserList({ participantsStats }: UserListProps) {
  return (
    <ListContainer
      disablePadding
      data={participantsStats ?? []}
      renderItem={(participant) => {
        return (
          <div
            className={"flex items-center px-4 py-2 w-full justify-between  "}
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
                <p className={"text-md  text-gray-400/90 text-shadow-zinc-500"}>
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
  );
}
