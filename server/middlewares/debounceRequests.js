const requestMap = new Map();

export const debounceRequests = (req, res, next) => {
  const userKey = req.ip; // Use IP or user ID as the key
  const currentTime = Date.now();

  if (requestMap.has(userKey)) {
    const lastRequestTime = requestMap.get(userKey);

    // Reject if the last request was made within 2 second
    if (currentTime - lastRequestTime < 2000) {
      return res.status(429).json({
        success: false,
        message: "Too many similar requests. Please try again later.",
      });
    }
  }

  // Update the request time
  requestMap.set(userKey, currentTime);
  next();
};
