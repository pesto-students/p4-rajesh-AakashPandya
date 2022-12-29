import FinancialData from "../models/financialData";
import { sendEmail } from "./mailService";

export const getFundsByType = async (type: string) => {
  return FinancialData.find({ detailType: type });
};

export const getFilteredFundsByType = async (type: string, details: any) => {
  return FinancialData.find({
    detailType: type,
    date: {
      $gte: new Date(details.startDate),
      $lte: new Date(details.endDate),
    },
    user: details.user.sub,
  });
};

export const addFundsByType = async (fund: any) => {
  const response = await FinancialData.create({
    ...fund,
    user: fund.user.sub,
  });
  if (response._id) {
    const mailDelivery = await sendEmail(
      fund.user.mail,
      "NEW ENTRY",
      JSON.stringify(fund)
    );
    console.log("mailDelivery", mailDelivery);
  }
  return response;
};

export const updateFundsByType = async (fund: any) => {
  const tempFund = { ...fund };
  delete tempFund.id;
  return FinancialData.findByIdAndUpdate(fund.id, {
    ...tempFund,
    user: fund.user.sub,
  });
};

export const deleteFundsByType = async (id: any) => {
  await FinancialData.findByIdAndUpdate(id, { status: "deleted" });
  return FinancialData.findById(id);
};
