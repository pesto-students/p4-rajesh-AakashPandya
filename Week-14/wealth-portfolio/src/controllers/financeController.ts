import { Request, Response } from "express";
import {
  addFundsByType,
  deleteFundsByType,
  getFilteredFundsByType,
  getFundsByType,
  updateFundsByType,
} from "../services/fundService";

import catchAsync from "../utils/catchAsync";

export const getFunds = catchAsync(async (req: Request, res: Response) => {
  const result = await getFundsByType(req.params.type);
  res.send(result);
});

export const filteredFunds = catchAsync(async (req: Request, res: Response) => {
  const result = await getFilteredFundsByType(req.params.type, req.body);
  res.send(result);
});

export const addFunds = catchAsync(async (req: Request, res: Response) => {
  const result = await addFundsByType({
    ...req.body,
    date: new Date(req.body.date),
    detailType: req.params.type,
  });
  res.send(result);
});

export const updateFunds = catchAsync(async (req: Request, res: Response) => {
  const result = await updateFundsByType({
    ...req.body,
    date: new Date(req.body.date),
  });
  res.send(result);
});

export const deleteFunds = catchAsync(async (req: Request, res: Response) => {
  const result = await deleteFundsByType(req.body.id);
  res.send(result);
});
