import rateLimit from "express-rate-limit";

// Create a rate limiter for specific routes
export const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 1, // Limit each IP to 1 request per second
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});
