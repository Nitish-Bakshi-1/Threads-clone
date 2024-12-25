import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes.js";
import auth from "./middlewares/auth.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

connectDB();
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

app.get("/demo", auth, function (req, res) {
  res.status(200).json({
    msg: "demo route is working",
  });
});
app.listen(process.env.PORT, function () {
  console.log("returned");
});
