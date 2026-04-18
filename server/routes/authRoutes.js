import express from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/authController.js";

const router = express.Router();

// TODO: Import and add authentication middleware
// TODO: Add input validation middleware

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", getCurrentUser);

export default router;
