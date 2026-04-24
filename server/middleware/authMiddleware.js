/**
 * Authentication Middleware
 */

export const protect = async (req, res, next) => {
  try {
    // TODO: Implement JWT verification
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Authentication failed",
      error: error.message,
    });
  }
};