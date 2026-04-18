/**
 * Error Handler Middleware
 * Centralized error handling for all routes
 */

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || "Internal Server Error";

  console.error(`❌ Error [${statusCode}]: ${message}`);
  console.error(err.stack);

  // TODO: Handle different error types
  // TODO: Hide sensitive information in production

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
};

/**
 * 404 Not Found Handler
 */
export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: `Route not found: ${req.originalUrl}`,
  });
};
