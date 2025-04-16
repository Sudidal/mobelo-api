import type { Request, Response } from "express";

import express from "express";

import MobilesController from "../controllers/mobiles";

const router = express.Router();

router.get("/", MobilesController.get);
router.get("/:id", MobilesController.getSingle);

export { router as mobilesRouter };
