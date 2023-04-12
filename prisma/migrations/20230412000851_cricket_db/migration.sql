/*
  Warnings:

  - You are about to drop the `_PlayerToTeam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PlayerToTeam" DROP CONSTRAINT "_PlayerToTeam_A_fkey";

-- DropForeignKey
ALTER TABLE "_PlayerToTeam" DROP CONSTRAINT "_PlayerToTeam_B_fkey";

-- DropTable
DROP TABLE "_PlayerToTeam";
