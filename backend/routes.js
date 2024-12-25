import express from "express";
import { login, signIn, userDetails } from "./controllers/user-controller.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/login", login);
router.get("/user/:id", userDetails);

export default router;
