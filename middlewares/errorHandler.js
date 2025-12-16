export default function errorHandler(err, req, res, next) {
  let statusCode = 500;
  let message = "Internal Server Error";

  // Log the actual error to console for debugging
  console.error("Error:", err.message);
  console.error("Stack:", err.stack);

  // Validation error (400)
  if (err.statusCode === 400 || err.name === "ValidationError") {
    statusCode = 400;
    message = err.message || "Bad Request";
  }
  // Not found error (404)
  else if (err.statusCode === 404) {
    statusCode = 404;
    message = err.message || "Not Found";
  } else if (err.statusCode) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({
    error: {
      message,
      statusCode,
    },
  });
}
