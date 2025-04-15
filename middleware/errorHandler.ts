import type { Request, Response, NextFunction } from "express";

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Handled by middleware, ", err.stack);
  res.sendStatus(500);
}

export default errorHandler;
