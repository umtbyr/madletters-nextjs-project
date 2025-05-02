export async function createRoom({
  userId,
  quizId,
  userName,
}: {
  userId: string | null;
  quizId: string | null;
  userName: string;
}) {
  if (!quizId) {
    throw new Error("please select a quiz");
  }

  const response = await fetch("/api/room/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ hostUserId: userId, quizId, userName }),
  });

  if (!response.ok) {
    throw new Error("Oda kurulamadı.");
  }

  const roomInfo = await response.json();
  return roomInfo;
}
