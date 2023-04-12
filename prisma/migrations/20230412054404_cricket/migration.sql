/*
  Warnings:

  - You are about to drop the column `members` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "teamId" INTEGER;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "members";

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
