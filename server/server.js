import { app } from "./app.js";
import mongoose from "mongoose";

const server = app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

// Gracefully handle server shutdown
const gracefulShutdown = async (signal) => {
  console.log(`${signal} received. Closing server...`);
  server.close(async () => {
    console.log("Server closed.");
    try {
      await mongoose.connection.close();
      console.log("Database connection closed.");
      process.exit(0);
    } catch (err) {
      console.error("Error while closing database connection:", err);
      process.exit(1);
    }
  });
};

// Listen for termination signals
//SIGINT: Triggered when you terminate the server using Ctrl+C.
//SIGTERM: Triggered when the server is terminated by a process manager(e.g., Docker, PM2, etc.).
process.on("SIGINT", () => gracefulShutdown("SIGINT")); // Triggered by Ctrl+C
process.on("SIGTERM", () => gracefulShutdown("SIGTERM")); // Triggered by process managers like Docker
