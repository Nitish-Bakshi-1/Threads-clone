import express from "express";
import {
  followUser,
  login,
  logout,
  myInfo,
  searchUser,
  signIn,
  updateProfile,
  userDetails,
} from "./controllers/user-controller.js";
import {
  addPost,
  allPost,
  deletePost,
  likePost,
  repost,
  singlePost,
} from "./controllers/post-controller.js";
import auth from "./middlewares/auth.js";
import { addComment, deleteComment } from "./controllers/comment-controller.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/login", login);

router.get("/user/:id", userDetails);
router.put("/user/follow/:id", auth, followUser);
router.put("/update", auth, updateProfile);
router.get("/users/search/:query", auth, searchUser);
router.post("/logout", auth, logout);
router.get("/me", auth, myInfo);

router.post("/post", auth, addPost);
router.get("/post", auth, allPost);
router.delete("/post/:id", auth, deletePost);
router.put("/post/like/:id", auth, likePost);
router.put("/repost/:id", auth, repost);
router.get("/post/:id", auth, singlePost);

router.post("/comment/:id", auth, addComment);
router.delete("/comment/:postId/:id", auth, deleteComment);

export default router;
