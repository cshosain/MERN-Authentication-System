import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connection } from "./db/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import { removeUnverifiedAccounts } from "./automation/removeUnverifiedAccounts.js";
import cookieParser from "cookie-parser";

export const app = express();
config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

removeUnverifiedAccounts();
connection();

app.use(errorMiddleware);
