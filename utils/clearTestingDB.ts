import prisma from "../prisma/client";

async function clearTestingDB() {
  if (process.env.NODE_ENV !== "test") {
    throw "Trying to clear database outside testing environment";
  } else {
    console.log("clearing database inside testing environment")
    await prisma.$transaction([prisma.company.deleteMany()]);
  }
}

export {clearTestingDB}