import { styleText } from "node:util";

import "./envCheck.ts";
import express from "express";
import errorHandler from "./middleware/errorHandler.js";
import { baseRouter } from "./routers/baseRouter.js";

const app = express();
const PORT = Number(process.env.PORT ?? 3000);
const HOST = process.env.HOST ?? "localhost";

app.use("/", baseRouter);
app.use(errorHandler);

app.listen(PORT, HOST, () => {
  console.log(
    "Server running on: " + styleText(["green"], `http://${HOST}:${PORT}`)
  );
});
