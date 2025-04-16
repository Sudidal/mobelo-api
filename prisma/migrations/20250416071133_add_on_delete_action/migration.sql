-- DropForeignKey
ALTER TABLE "Mobile" DROP CONSTRAINT "Mobile_companyId_fkey";

-- DropForeignKey
ALTER TABLE "MobileDetailedSpecs" DROP CONSTRAINT "MobileDetailedSpecs_mobileId_fkey";

-- DropForeignKey
ALTER TABLE "MobileMainSpecs" DROP CONSTRAINT "MobileMainSpecs_mobileId_fkey";

-- AddForeignKey
ALTER TABLE "Mobile" ADD CONSTRAINT "Mobile_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MobileMainSpecs" ADD CONSTRAINT "MobileMainSpecs_mobileId_fkey" FOREIGN KEY ("mobileId") REFERENCES "Mobile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MobileDetailedSpecs" ADD CONSTRAINT "MobileDetailedSpecs_mobileId_fkey" FOREIGN KEY ("mobileId") REFERENCES "Mobile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
