import { Request, Response } from "express";

import config from "../config";
import jwt from "jsonwebtoken";

const authMiddleware = async (
  request: Request,
  response: Response,
  next: any
) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader?.split(" ")[1];
  if (token == null) return response.sendStatus(401);

  jwt.verify(token, config.jwt.accessTokenSecret, (err: any, payload: any) => {
    if (err) return response.sendStatus(403);
    request.body.user = payload;
    next();
  });
};

export default authMiddleware;
