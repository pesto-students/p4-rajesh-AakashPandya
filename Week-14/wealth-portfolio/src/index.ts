import authRoutes from "./routes/authRoutes";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbURI =
  "mongodb+srv://aakashp:dell5558@cluster0.2d7f7mz.mongodb.net/?retryWrites=true&w=majority";

const PORT = 4000;

mongoose
  .connect(dbURI)
  .then((result) => {
    try {
      app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`);
      });
    } catch (ex) {
      console.log(ex);
    }
  })
  .catch((ex) => console.log("something went wrong while connecting db", ex));

app.use(morgan("dev"));
app.use("/auth", authRoutes);
