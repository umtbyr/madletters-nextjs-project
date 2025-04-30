/*
  Warnings:

  - You are about to drop the column `roomId` on the `GroupChallangeRoom` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[RoomCode]` on the table `GroupChallangeRoom` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `RoomCode` to the `GroupChallangeRoom` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "GroupChallangeRoom_roomId_key";

-- AlterTable
ALTER TABLE "GroupChallangeRoom" DROP COLUMN "roomId",
ADD COLUMN     "RoomCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "GroupChallangeRoom_RoomCode_key" ON "GroupChallangeRoom"("RoomCode");
