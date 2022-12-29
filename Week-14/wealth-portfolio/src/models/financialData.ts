import { Schema, model } from "mongoose";

const financialDataSchema = new Schema(
  {
    detailType: {
      type: String,
      enum: ["Assets", "Equity", "Income", "Alternatives"],
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    status: {
      type: String,
      enum: ["active", "deleted"],
      required: true,
    },
  },
  { timestamps: true }
);

const FinancialData = model("FinancialData", financialDataSchema);

export default FinancialData;
