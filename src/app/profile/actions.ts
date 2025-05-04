"use server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
export async function changeUserName(formData: FormData) {
  console.log(formData.get("change_user_name"));
  const newUserName = formData.get("change_user_name")?.toString();
  const userId = formData.get("user_id")?.toString();

  if (!userId) {
    throw new Error("user_id not found");
  }

  if (!newUserName || newUserName.trim() === "") {
    throw new Error("Username cannot be empty");
  }

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        userName: newUserName,
      },
    });
  } catch (error) {
    console.error("Failed to update username:", error);
    throw new Error("An error occurred while updating username");
  }

  redirect("/profile");
}
