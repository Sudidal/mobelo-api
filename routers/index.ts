import type { Request, Response } from "express";

import express from "express";

import { mobilesRouter } from "./mobiles";

const router = express.Router();

router.use("/mobiles", mobilesRouter);
router.use("/{*splat}", (req: Request, res: Response) => {
  res.sendStatus(404);
});

export { router as indexRouter };
