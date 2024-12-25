import jwt from "jsonwebtoken";
import User from "../models/user-model.js";
import bcrypt from "bcrypt";
import Post from "../models/post-model.js";

export const signIn = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.json({
        msg: "username,password,email are required!",
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.json({
        msg: "user already exists try login",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) {
      return res.status(400).json({
        msg: "error in password hashing !",
      });
    }
    const user = new User({ username, password: hashedPassword, email });
    const result = await user.save();
    if (!result) {
      return res.status(400).json({
        msg: "error while saving user !",
      });
    }
    const accessToken = jwt.sign(
      { token: result._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    if (!accessToken) {
      return res
        .json({
          msg: "error in signing token",
        })
        .status(400);
    }
    res
      .cookie("token", accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(201)
      .json({
        msg: `good to have you ${user.username}`,
      });
    // res.status(200).json(req.body);
  } catch (err) {
    res.status(400).json({
      msg: "error in signin through try catch",
      err: err.message,
    });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .json({
          message:
            "incomplete credentials either email or password is missing!",
        })
        .status(400);
    }
    const userExists = await User.findOne({ email });
    if (!userExists) {
      res.json({ msg: "user doesn't exist, signin first" });
    }
    const passwordMatched = await bcrypt.compare(password, userExists.password);
    if (!passwordMatched) {
      res
        .json({
          msg: "incorrect credentials (chk password)",
        })
        .status(400);
    }
    const accessToken = jwt.sign(
      { token: userExists._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
    if (!accessToken) {
      return res.status(400).json({
        msg: "token not generated in login !",
      });
    }
    res.cookie("token", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.status(200).json({
      msg: "user logged in successfully !",
    });
  } catch (err) {
    res.json({
      msg: "login error via tc",
      err: err.message,
    });
  }
};
export const userDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ msg: "id is required!" });
    }
    const user = await User.findById(id)
      .select("-password")
      .populate("followers")
      .populate({
        path: "threads",
        populate: [{ path: "likes" }, { path: "comments" }, { path: "admin" }],
      })
      .populate({ path: "replies", populate: { path: "admin" } })
      .populate({
        path: "reposts",
        populate: [{ path: "likes" }, { path: "comments" }, { path: "admin" }],
      });
    res.send("");
  } catch (err) {
    res.status(400).send({
      msg: "error in fetching user details via tc",
    });
  }
};
