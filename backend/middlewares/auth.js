import User from "../models/user-model.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    console.log(1);
    const token = req.cookies.token;
    console.log(2);

    if (!token) {
      return res.status(400).json({
        msg: "no token in auth",
      });
    }
    console.log(3);

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(4);

    if (!decodedToken) {
      return res.status(400).json({
        message: "error while decoding token in auth! ",
      });
    }
    console.log(5);

    const user = await User.findById(decodedToken.token)
      .populate("followers")
      .populate("threads")
      .populate("reposts")
      .populate("replies");
    console.log(6);

    if (!user) {
      return res.status(400).json({
        msg: "no user found",
      });
    }
    console.log(7);

    req.user = user;
    next();
  } catch (err) {
    return res.status(400).json({
      msg: "error in auth",
      err: err.message,
    });
  }
};

export default auth;
