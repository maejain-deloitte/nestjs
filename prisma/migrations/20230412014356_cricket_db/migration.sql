-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "teamId" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
