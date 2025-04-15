/*
  Warnings:

  - You are about to drop the column `detailedSpecsId` on the `Mobile` table. All the data in the column will be lost.
  - You are about to drop the column `mainSpecsId` on the `Mobile` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Mobile_detailedSpecsId_key";

-- DropIndex
DROP INDEX "Mobile_mainSpecsId_key";

-- AlterTable
ALTER TABLE "Mobile" DROP COLUMN "detailedSpecsId",
DROP COLUMN "mainSpecsId";
