import type { Request, Response } from "express";

function errorHandler(err: Error, req: Request, res: Response) {
  console.error(err.stack);
  res.sendStatus(500);
}

export default errorHandler;
