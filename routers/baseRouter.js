import express from "express";
import baseController from "../controllers/indexController.js";

const router = express.Router();

router.use("/base", baseController.get);
router.use("/*", (req, res) => {
  res.sendStatus(404);
});

export { router as baseRouter };
