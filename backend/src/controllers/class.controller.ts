import { Request, Response, NextFunction } from "express";
import { successResponse } from "../utils/response";

export const createClass = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // scheduling logic later
    res.status(201).json(
      successResponse(
        "Class created",
        "Class scheduled successfully",
        req.body
      )
    );
  } catch (error) {
    next(error);
  }
};

export const getClasses = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(
      successResponse(
        "Classes fetched",
        "Class list loaded",
        [],
        {
          total: 0,
          page: 1,
          limit: 10,
          totalPages: 0,
        }
      )
    );
  } catch (error) {
    next(error);
  }
};
