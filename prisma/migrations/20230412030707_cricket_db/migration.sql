-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "stats_balling" INTEGER[] DEFAULT ARRAY[0, 0, 0, 0]::INTEGER[],
ADD COLUMN     "stats_batting" INTEGER[] DEFAULT ARRAY[0, 0, 0, 0]::INTEGER[];
