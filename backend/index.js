import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes.js";

dotenv.config();

const app = express();

connectDB();

app.use("/api", router);

app.listen(process.env.PORT, function () {
  console.log("returned");
});
