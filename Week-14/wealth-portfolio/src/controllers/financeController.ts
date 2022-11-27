import { Request, Response } from "express";
import {
  addFundsByType,
  deleteFundsByType,
  getFilteredFundsByType,
  getFundsByType,
  updateFundsByType,
} from "../services/fundService";

export const getFunds = async (req: Request, res: Response) => {
  const result = await getFundsByType(req.params.type);
  res.send(result);
};

export const filteredFunds = async (req: Request, res: Response) => {
  const result = await getFilteredFundsByType(req.params.type, req.body);
  res.send(result);
};

export const addFunds = async (req: Request, res: Response) => {
  const result = await addFundsByType({
    ...req.body,
    date: new Date(req.body.date),
    detailType: req.params.type,
  });
  res.send(result);
};

export const updateFunds = async (req: Request, res: Response) => {
  const result = await updateFundsByType({
    ...req.body,
    date: new Date(req.body.date),
  });
  res.send(result);
};

export const deleteFunds = async (req: Request, res: Response) => {
  const result = await deleteFundsByType(req.body.id);
  res.send(result);
};
