/*
  Warnings:

  - You are about to drop the column `mobileMainSpecsId` on the `Mobile` table. All the data in the column will be lost.
  - You are about to alter the column `bodyHeight` on the `MobileDetailedSpecs` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `bodyWidth` on the `MobileDetailedSpecs` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `weight` on the `MobileDetailedSpecs` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - The `rearCams` column on the `MobileDetailedSpecs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `charge` column on the `MobileDetailedSpecs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sensors` column on the `MobileDetailedSpecs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `versions` column on the `MobileDetailedSpecs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `colors` column on the `MobileDetailedSpecs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[mainSpecsId]` on the table `Mobile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mainSpecsId` to the `Mobile` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Mobile_mobileMainSpecsId_key";

-- AlterTable
ALTER TABLE "Mobile" DROP COLUMN "mobileMainSpecsId",
ADD COLUMN     "mainSpecsId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "MobileDetailedSpecs" ALTER COLUMN "bodyHeight" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "bodyWidth" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "weight" SET DATA TYPE DECIMAL(65,30),
DROP COLUMN "rearCams",
ADD COLUMN     "rearCams" TEXT[],
DROP COLUMN "charge",
ADD COLUMN     "charge" TEXT[],
DROP COLUMN "sensors",
ADD COLUMN     "sensors" TEXT[],
DROP COLUMN "versions",
ADD COLUMN     "versions" TEXT[],
DROP COLUMN "colors",
ADD COLUMN     "colors" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "Mobile_mainSpecsId_key" ON "Mobile"("mainSpecsId");
