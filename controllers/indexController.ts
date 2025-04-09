import type { Request, Response } from "express";

class BaseController {
  constructor() {}

  get(req: Request, res: Response) {
    res.json({ message: "You are in the index route" });
  }
}

const baseController = new BaseController();
export default baseController;
