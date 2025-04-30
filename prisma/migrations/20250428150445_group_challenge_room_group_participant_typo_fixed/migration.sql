/*
  Warnings:

  - You are about to drop the column `groupChallangeId` on the `GroupParticipant` table. All the data in the column will be lost.
  - Added the required column `groupChallengeId` to the `GroupParticipant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GroupParticipant" DROP CONSTRAINT "GroupParticipant_groupChallangeId_fkey";

-- AlterTable
ALTER TABLE "GroupParticipant" DROP COLUMN "groupChallangeId",
ADD COLUMN     "groupChallengeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "GroupParticipant" ADD CONSTRAINT "GroupParticipant_groupChallengeId_fkey" FOREIGN KEY ("groupChallengeId") REFERENCES "GroupChallengeRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
