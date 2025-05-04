import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import Image from "next/image";
import { profileMenu } from "./constants";
import { ListItem } from "@/components/components/ListItem";
import { ListContainer } from "@/components/components/ListContainer";
import { PencilIcon } from "lucide-react";
import Form from "next/form";
import { changeUserName } from "./actions";
export default async function Page() {
  const userId = (await cookies()).get("userId")?.value;

  if (!userId) {
    console.log("kullanıcı bulunamadı");
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  return (
    <main className="flex flex-col w-full max-w-full p-5 items-center md:max-w-5xl mx-auto">
      <div className="p-2 w-20 h-20 border-4 border-amber-500 rounded-full shadow-2xl mt-4">
        <Image
          src={"/UserIcon.svg"}
          alt="user-profile-svg"
          width={80}
          height={80}
        />
      </div>
      <h3 className="font-bold text-xl pt-2">@{user?.userName}</h3>
      <p className="font-extrabold text-xl text-amber-500">
        {user?.userPoint === 0 ? `0 point` : `${user?.userPoint} points`}
      </p>
      <ListContainer
        data={profileMenu}
        renderItem={(menuItem) => {
          if (menuItem.label === "Change User Name") {
            return (
              <Form action={changeUserName}>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="change_user_name"
                    className="font-semibold text-lg"
                  >
                    Change User Name
                  </label>
                  <div className="flex justify-between items-center w-full">
                    <input
                      className="border-2 border-amber-500 max-w-fit rounded-xl p-2 text-center font-semibold"
                      id="change_user_name"
                      name="change_user_name"
                      type="text"
                    />
                    <input type="hidden" name="user_id" value={userId} />
                    <button type="submit" className="cursor-pointer">
                      <PencilIcon />
                    </button>
                  </div>
                </div>
              </Form>
            );
          }
          return <ListItem href={menuItem.href} label={menuItem.label} />;
        }}
      />
    </main>
  );
}
