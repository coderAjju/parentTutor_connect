// server.js

// Import necessary modules
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "./middlewares/errorhandler.js";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import profileRoutes from "./routes/profileRoutes.js";
import parentTutorInteractionRoutes from "./routes/parentAndTutorInteractionRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import autoCancelAppointments from "./services/autoCancelAppointments.js";

// Initialize dotenv to use environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // For parsing JSON requests
app.use(cors()); // For enabling CORS
app.use(cookieParser());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Welcome to Tutor-Parent Connect Platform API!");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/interaction", parentTutorInteractionRoutes);
app.use("/api/appointment", appointmentRoutes);
// Error handling middleware should be last
app.use(errorHandler); // Registering error handling middleware

// Initialize the cron job
autoCancelAppointments();

// Define port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
