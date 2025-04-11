-- CreateTable
CREATE TABLE "Mobile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mobileMainSpecsId" INTEGER NOT NULL,
    "detailedSpecsId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "launchDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mobile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MobileMainSpecs" (
    "id" SERIAL NOT NULL,
    "mobileId" INTEGER NOT NULL,
    "rom" INTEGER NOT NULL,
    "ram" INTEGER NOT NULL,
    "batterySize" INTEGER NOT NULL,
    "mainCamMP" INTEGER NOT NULL,
    "resolutionHeight" INTEGER NOT NULL,
    "resolutionWidth" INTEGER NOT NULL,
    "refreshRate" INTEGER NOT NULL,
    "displayType" TEXT NOT NULL,
    "cpu" TEXT NOT NULL,

    CONSTRAINT "MobileMainSpecs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MobileDetailedSpecs" (
    "id" SERIAL NOT NULL,
    "mobileId" INTEGER NOT NULL,
    "frontCamMP" INTEGER NOT NULL,
    "bodyHeight" DOUBLE PRECISION NOT NULL,
    "bodyWidth" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "fiveG" BOOLEAN NOT NULL,
    "stereoSpeacker" BOOLEAN NOT NULL,
    "threeFiveMMJack" BOOLEAN NOT NULL,
    "gpu" TEXT NOT NULL,
    "rearCams" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "charge" TEXT NOT NULL,
    "sensors" TEXT NOT NULL,
    "versions" TEXT NOT NULL,
    "colors" TEXT NOT NULL,
    "resistanceRating" TEXT NOT NULL,
    "opinion" TEXT,

    CONSTRAINT "MobileDetailedSpecs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mobile_mobileMainSpecsId_key" ON "Mobile"("mobileMainSpecsId");

-- CreateIndex
CREATE UNIQUE INDEX "Mobile_detailedSpecsId_key" ON "Mobile"("detailedSpecsId");

-- CreateIndex
CREATE UNIQUE INDEX "MobileMainSpecs_mobileId_key" ON "MobileMainSpecs"("mobileId");

-- CreateIndex
CREATE UNIQUE INDEX "MobileDetailedSpecs_mobileId_key" ON "MobileDetailedSpecs"("mobileId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- AddForeignKey
ALTER TABLE "Mobile" ADD CONSTRAINT "Mobile_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MobileMainSpecs" ADD CONSTRAINT "MobileMainSpecs_mobileId_fkey" FOREIGN KEY ("mobileId") REFERENCES "Mobile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MobileDetailedSpecs" ADD CONSTRAINT "MobileDetailedSpecs_mobileId_fkey" FOREIGN KEY ("mobileId") REFERENCES "Mobile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
