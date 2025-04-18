import type { Request, Response, NextFunction } from "express";

import database from "../database/database";

class MobilesController {
  constructor() {}

  static async get(req: Request, res: Response, next: NextFunction) {
    const data = await database.mobiles.getMany();
    res.json({ mobiles: data });
  }

  static async getSingle(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);

    const data = await database.mobiles.getSingle(id);
    res.json({ mobile: data });
  }
}

export default MobilesController;
