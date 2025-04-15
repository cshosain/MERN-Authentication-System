import express from "express";
import {
  register,
  verifyOTP,
  login,
  logout,
  getUser,
  forgotPassword,
  resetPassword,
  checkEmail,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { limiter } from "../middlewares/rateLimiter.js";
import { debounceRequests } from "../middlewares/debounceRequests.js";

const router = express.Router();

// Apply the rate limiter to specific routes. It ensures one request per second is allowed for each user on the specified routes.
// The debounceRequests middleware is used Prevents duplicate or rapid consecutive requests (e.g., when a user clicks a button multiple times quickly).
router.post("/register", limiter, debounceRequests, register);
router.post("/register/check-email", limiter, checkEmail);
router.post("/otp-verification", limiter, debounceRequests, verifyOTP);
router.post("/login", limiter, debounceRequests, login);
router.get("/logout", limiter, isAuthenticated, logout);
router.get("/me", limiter, isAuthenticated, getUser);
router.post("/password/forgot", limiter, debounceRequests, forgotPassword);
router.put("/password/reset/:token", limiter, debounceRequests, resetPassword);

export default router;
