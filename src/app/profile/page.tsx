import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import Image from "next/image";
import { profileMenu } from "./constants";
import { ListItem } from "@/components/components/ListItem";
export default async function Page() {
  const userId = (await cookies()).get("userId")?.value;

  if (!userId) {
    console.log("kullanıcı bulunamadı");
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  return (
    <main className="flex flex-col w-full max-w-full p-5 items-center">
      <div className="p-2 w-20 h-20 border-4 border-amber-500 rounded-full shadow-2xl mt-12">
        <Image
          src={"/UserIcon.svg"}
          alt="user-profile-svg"
          width={80}
          height={80}
        />
      </div>
      <h3 className="font-bold text-l pt-2">@{user?.userName}</h3>
      <ul className=" w-full max-w-full p-4 mt-8 gap-2">
        {profileMenu.map((menuItem) => (
          <li
            key={menuItem.label}
            className="w-full max-w-full px-4 border-b-4 border-amber-500 py-1 mb-8"
          >
            <ListItem href={menuItem.href} label={menuItem.label} />
          </li>
        ))}
      </ul>
    </main>
  );
}
