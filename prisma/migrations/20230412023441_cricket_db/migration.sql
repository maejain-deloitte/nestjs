/*
  Warnings:

  - You are about to drop the column `players` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "players",
ADD COLUMN     "members" INTEGER[];
