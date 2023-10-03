import { Router } from "express";
const router = Router();

import { signup, login, logout } from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";

router.post("/signup", validateRegisterInput, signup);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);

export default router;
