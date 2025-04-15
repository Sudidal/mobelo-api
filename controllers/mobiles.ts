import type { Request, Response, NextFunction } from "express";

import database from "../database/database";

class MobilesController {
  constructor() {}

  static async get(req: Request, res: Response, next: NextFunction) {
    const data = await database.mobiles.getAll();
    res.json(data);
  }
}

export default MobilesController;
