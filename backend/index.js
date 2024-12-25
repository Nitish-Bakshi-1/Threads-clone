import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

connectDB();
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

app.listen(process.env.PORT, function () {
  console.log("returned");
});
