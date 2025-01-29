// Custom error handling middleware
const errorHandler = (err, req, res, next) => {
  // Log the error for internal debugging (optional)
  console.error(err.message);

  // Set a default status code if it's not set by the controller
  const statusCode = err.statusCode || 500;

  // Respond with the error message
  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong!",
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack trace in production
  });
};

export default errorHandler;
