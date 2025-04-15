import type { Request, Response } from "express";

import express from "express";

import MobilesController from "../controllers/mobiles";

const router = express.Router();

router.get("/get", MobilesController.get);

export { router as mobilesRouter };
