/*
  Warnings:

  - You are about to drop the `GroupChallangeRoom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GroupParticipant" DROP CONSTRAINT "GroupParticipant_groupChallangeId_fkey";

-- DropTable
DROP TABLE "GroupChallangeRoom";

-- CreateTable
CREATE TABLE "GroupChallengeRoom" (
    "id" TEXT NOT NULL,
    "roomCode" TEXT NOT NULL,
    "hostUserId" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'waiting',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupChallengeRoom_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GroupChallengeRoom_roomCode_key" ON "GroupChallengeRoom"("roomCode");

-- AddForeignKey
ALTER TABLE "GroupParticipant" ADD CONSTRAINT "GroupParticipant_groupChallangeId_fkey" FOREIGN KEY ("groupChallangeId") REFERENCES "GroupChallengeRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
