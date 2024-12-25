import express from "express";
import {
  followUser,
  login,
  signIn,
  userDetails,
} from "./controllers/user-controller.js";
import auth from "./middlewares/auth.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/login", login);
router.get("/user/:id", userDetails);
router.put("/user/follow/:id", auth, followUser);

export default router;
