import express from "express";
import { login, register, verifyOTP } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/otp-verification", verifyOTP);
router.post("/login", login);

export default router;
