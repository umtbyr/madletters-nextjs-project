import { cookies } from "next/headers";
import { CreateRoom } from "./components";

export default async function Page() {
  const userId = (await cookies()).get("userId")?.value;
  console.log(userId);

  return (
    <main className="flex flex-col items-center w-full max-w-5xl p-4 mx-auto">
      <div>
        <h1>Arkadaşlarınla yarış</h1>
        <CreateRoom
          userId={userId ?? ""}
          quizId={"cma1vwis10000l104zl3491l7"}
        />
      </div>
    </main>
  );
}
