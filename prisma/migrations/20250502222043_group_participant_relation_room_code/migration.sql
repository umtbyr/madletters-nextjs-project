-- DropForeignKey
ALTER TABLE "GroupParticipant" DROP CONSTRAINT "GroupParticipant_groupChallengeId_fkey";

-- AddForeignKey
ALTER TABLE "GroupParticipant" ADD CONSTRAINT "GroupParticipant_groupChallengeId_fkey" FOREIGN KEY ("groupChallengeId") REFERENCES "GroupChallengeRoom"("roomCode") ON DELETE RESTRICT ON UPDATE CASCADE;
