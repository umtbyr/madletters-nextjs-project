import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import Image from "next/image";
export default async function Page() {
  let userId = (await cookies()).get("userId")?.value;

  if (!userId) {
    console.log("kullanıcı bulunamadı");
  }

  const userInfo = await prisma.user.findUnique({
    where: { id: userId },
  });

  return (
    <div className="w-full max-w-full flex flex-col py-4 px-2 items-center gap-4">
      <Image
        src={"/UserIcon.svg"}
        alt="user-profile-svg"
        width={240}
        height={240}
      />
      <h3 className="font-bold text-2xl text-amber-500 ">
        {userInfo?.userName}
      </h3>
    </div>
  );
}
