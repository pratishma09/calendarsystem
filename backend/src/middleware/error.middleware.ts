import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/response";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500).json(
    errorResponse(
      err.title || "Server Error",
      err.message || "Something went wrong",
      err.errors
    )
  );
};
