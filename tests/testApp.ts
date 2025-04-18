import "../envCheck.ts";

import express from "express";

import errorHandler from "../middleware/errorHandler.ts";
import { indexRouter } from "../routers/index.ts";

const testingApp = express();
const PORT = Number(process.env.PORT ?? 3000);
const HOST = process.env.HOST ?? "localhost";

testingApp.use("/", indexRouter);
testingApp.use(errorHandler);

export default testingApp