import type { Request, Response } from "express";

import express from "express";
import baseController from "../controllers/indexController.js";

const router = express.Router();

router.use("/base", baseController.get);
router.use("/{*splat}", (req: Request, res: Response) => {
  res.sendStatus(404);
});

export { router as baseRouter };
