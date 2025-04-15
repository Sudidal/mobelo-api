/*
  Warnings:

  - You are about to drop the column `stereoSpeacker` on the `MobileDetailedSpecs` table. All the data in the column will be lost.
  - You are about to drop the column `versions` on the `MobileDetailedSpecs` table. All the data in the column will be lost.
  - You are about to drop the column `rom` on the `MobileMainSpecs` table. All the data in the column will be lost.
  - Added the required column `stereoSpeaker` to the `MobileDetailedSpecs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MobileDetailedSpecs" DROP COLUMN "stereoSpeacker",
DROP COLUMN "versions",
ADD COLUMN     "stereoSpeaker" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "MobileMainSpecs" DROP COLUMN "rom",
ADD COLUMN     "romVersions" INTEGER[];
