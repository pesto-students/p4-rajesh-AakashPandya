import authRoutes from "./routes/authRoutes";
import config from "./config";
import errorHandler from "./middleware/errorMiddleware";
import express from "express";
import financeRoutes from "./routes/financeRoutes";
import mongoose from "mongoose";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(config.mongoose.url)
  .then((result) => {
    try {
      app.listen(config.port, () => {
        console.log(`server is running on http://localhost:${config.port}`);
      });
    } catch (ex) {
      console.log(ex);
    }
  })
  .catch((ex) => console.log("something went wrong while connecting db", ex));

app.use(morgan("dev"));
app.use("/auth", authRoutes);
app.use("/finance", financeRoutes);

app.use(errorHandler);
