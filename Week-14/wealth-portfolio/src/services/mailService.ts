import config from "../config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport(config.email.smtp);

export const sendEmail = async (to: string, subject: string, text: string) => {
  const msg = { from: config.email.from, to, subject, text };
  return await transporter.sendMail(msg);
};
