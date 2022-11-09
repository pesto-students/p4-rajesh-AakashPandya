import express, { Request, Response } from "express";

import User from "./models/user";
import mongoose from "mongoose";

const app = express();
// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbURI =
  "mongodb+srv://aakashp:dell5558@cluster0.2d7f7mz.mongodb.net/?retryWrites=true&w=majority";

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
  .catch(() => console.log("something went wrong while connecting db"));

app.post("/sign-up", (request: Request, response: Response) => {
  const { firstName, lastName, email, password } = request.body;
  const user = new User({ firstName, lastName, email, password });
  user
    .save()
    .then((result) => {
      response.send(result);
    })
    .catch(() => console.log("something went wrong"));
});

app.post("/sign-in", (request: Request, response: Response) => {
  const { email, password } = request.body;
  User.exists({ email, password })
    .then((result) => {
      response.send(!!result);
    })
    .catch(() => console.log("something went wrong"));
});

const PORT = 4000;
