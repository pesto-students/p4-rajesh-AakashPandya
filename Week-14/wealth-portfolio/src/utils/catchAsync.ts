import { Request, Response } from "express";

const catchAsync = (fn: any) => (req: Request, res: Response, next: any) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    next(err);
  });
};

export default catchAsync;
