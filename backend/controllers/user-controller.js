import User from "../models/user-model.js";

export const signIn = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json({
      msg: "error in signin",
      err: err.message,
    });
  }
};
