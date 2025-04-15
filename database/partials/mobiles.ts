import prisma from "../../prisma/client";

class Mobiles {
  constructor() {}

  static async getAll() {
    const data = await prisma.mobile.findMany();
    return data;
  }
}

export default Mobiles;
