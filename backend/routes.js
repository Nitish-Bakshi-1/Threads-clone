import express from "express";
import {
  followUser,
  login,
  searchUser,
  signIn,
  updateProfile,
  userDetails,
} from "./controllers/user-controller.js";
import auth from "./middlewares/auth.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/login", login);
router.get("/user/:id", userDetails);
router.put("/user/follow/:id", auth, followUser);
router.put("/update", auth, updateProfile);
router.get("/users/search/:query", auth, searchUser);

export default router;
