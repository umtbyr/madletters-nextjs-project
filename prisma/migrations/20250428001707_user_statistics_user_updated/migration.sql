/*
  Warnings:

  - Added the required column `userPoint` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizName` to the `UserQuizStatistics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userPoint" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserQuizStatistics" ADD COLUMN     "quizName" TEXT NOT NULL;
