-- CreateTable
CREATE TABLE "GroupChallangeRoom" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "hostUserId" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'waiting',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupChallangeRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupParticipant" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "groupChallangeId" TEXT NOT NULL,
    "ready" BOOLEAN NOT NULL,
    "finished" BOOLEAN NOT NULL,
    "score" INTEGER NOT NULL,
    "answers" JSONB NOT NULL,
    "startTime" TIMESTAMP(3),
    "endTime" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GroupChallangeRoom_roomId_key" ON "GroupChallangeRoom"("roomId");

-- AddForeignKey
ALTER TABLE "GroupParticipant" ADD CONSTRAINT "GroupParticipant_groupChallangeId_fkey" FOREIGN KEY ("groupChallangeId") REFERENCES "GroupChallangeRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
