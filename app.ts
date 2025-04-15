import { styleText } from "node:util";

import "./envCheck.ts";

import express from "express";
import helmet from "helmet";
import cors from "cors";

import errorHandler from "./middleware/errorHandler.js";
import { indexRouter } from "./routers/index.js";

const app = express();
const PORT = Number(process.env.PORT ?? 3000);
const HOST = process.env.HOST ?? "localhost";

app.use(cors({ origin: true }));
app.use(helmet());

app.use("/", indexRouter);
app.use(errorHandler);

app.listen(PORT, HOST, () => {
  console.log(
    "Server running on: " + styleText(["green"], `http://${HOST}:${PORT}`)
  );
});
