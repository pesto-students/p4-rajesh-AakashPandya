import jwt from "jsonwebtoken";
import moment from "moment";

export const generateJWT = (userId: string) => {
  const payload = {
    sub: userId,
    iat: 123,
    exp: 41231,
  };

  return jwt.sign(payload, "d");
};
