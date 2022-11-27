import { Request, Response } from "express";

import httpStatus from "http-status";

const errorHandler = (err: any, req: Request, res: Response, next: any) => {
  let { statusCode, message } = err;
  statusCode = httpStatus.INTERNAL_SERVER_ERROR;
  message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];

  const response = {
    code: statusCode,
    message,
  };

  res.status(statusCode).send(response);
};

export default errorHandler;
