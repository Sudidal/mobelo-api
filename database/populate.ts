import { faker } from "@faker-js/faker";
import prisma from "../prisma/client";
import { Prisma } from "@prisma/client";

populate(10);

async function populate(times: number) {
  const companyName = faker.vehicle.manufacturer();
  for (let i = 0; i < times; i++) {
    await prisma.mobile.create({
      data: {
        name: faker.company.buzzVerb() + " " + faker.number.int(20),
        launchDate: faker.date.anytime(),
        company: {
          connectOrCreate: {
            where: {
              name: companyName,
            },
            create: {
              name: companyName,
            },
          },
        },
        mainSpecs: {
          create: {
            romVersions: faker.helpers.multiple(
              () => faker.helpers.arrayElement([64, 128, 256, 512]),
              { count: { min: 1, max: 3 } }
            ),
            ram: faker.helpers.arrayElement([4, 8, 12, 16]),
            batterySize: faker.helpers.arrayElement([3400, 4200, 5600, 6800]),
            mainCamMP: faker.helpers.arrayElement([8, 16, 32, 56, 64, 108]),
            resolutionHeight: faker.number.int({ min: 2000, max: 3000 }),
            resolutionWidth: faker.number.int({ min: 1000, max: 2000 }),
            refreshRate: faker.helpers.arrayElement([60, 90, 120]),
            displayType: faker.helpers.arrayElement([
              "LCD",
              "Amoled",
              "Super amoled",
              "Retina",
            ]),
            cpu: faker.helpers.arrayElement([
              "Helio G" + faker.number.int({ min: 80, max: 99 }),
              "Snapdragon " + faker.number.int({ min: 600, max: 900 }),
            ]),
          },
        },
        detailedSpecs: {
          create: {
            frontCamMP: faker.helpers.arrayElement([4, 8, 12, 16, 32]),
            bodyHeight: faker.number.float({
              min: 150,
              max: 250,
              fractionDigits: 1,
            }),
            bodyWidth: faker.number.float({
              min: 70,
              max: 200,
              fractionDigits: 1,
            }),
            weight: faker.number.float({
              min: 70,
              max: 200,
              fractionDigits: 1,
            }),
            fiveG: true,
            stereoSpeaker: faker.helpers.arrayElement([true, false]),
            threeFiveMMJack: faker.helpers.arrayElement([true, false]),
            gpu: faker.word.adjective() + faker.number.int(999),
            os: faker.helpers.arrayElement([
              "Android " + faker.number.int({ min: 12, max: 15 }),
              "ios " + faker.number.int({ min: 13, max: 17 }),
            ]),
            colors: faker.helpers.multiple(() => faker.vehicle.color(), {
              count: { min: 1, max: 4 },
            }),
            opinion: faker.helpers.arrayElement([true, false])
              ? faker.lorem.paragraphs(4)
              : Prisma.skip,
            resistanceRating:
              "IP" +
              faker.number.int({ min: 0, max: 6 }) +
              faker.number.int({ min: 0, max: 9 }),
            sensors: faker.helpers.arrayElements([
              "Proximity",
              "Accelerometer",
              "Compass",
              "Gyro",
              "Fingerprint",
            ]),
            rearCams: faker.helpers.arrayElements([
              "Ultra Wide 10MP",
              "Macro 8MP",
              "Depth 8MP",
            ]),
            charge: [
              "45W wired",
              ...faker.helpers.arrayElements([
                "15w wireless",
                "4.5w reverse wireless",
              ]),
            ],
          },
        },
      },
    });
  }
}
