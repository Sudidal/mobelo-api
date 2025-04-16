import prisma from "../../prisma/client";
import { Prisma } from "@prisma/client";

const defaultLimit = 15;

interface GetManyOptions extends GetMobileOptions {
  orderBy?: string;
  orderingMethod?: "acs" | "desc";
  limit?: number;
}
interface GetMobileOptions {
  includeMainSpecs?: boolean;
  includeDetailedSpecs?: boolean;
}

class Mobiles {
  constructor() {}

  static async getMany(options: GetManyOptions = {}) {
    let orderByClause = {};
    if (options.orderBy) {
      orderByClause = {
        [options.orderBy]: options.orderingMethod ?? "acs",
      };
    }

    const data = await prisma.mobile.findMany({
      take: options.limit ?? defaultLimit,
      orderBy: orderByClause,
      include: {
        mainSpecs: options.includeMainSpecs ?? false,
        detailedSpecs: options.includeDetailedSpecs ?? false,
      },
    });

    return data;
  }

  static async getSingle(mobileId: number, options: GetMobileOptions = {}) {
    const data = await prisma.mobile.findFirst({
      where: {
        id: mobileId,
      },
      include: {
        mainSpecs: options.includeMainSpecs ?? false,
        detailedSpecs: options.includeDetailedSpecs ?? false,
      },
    });

    return data;
  }
}

export default Mobiles;
