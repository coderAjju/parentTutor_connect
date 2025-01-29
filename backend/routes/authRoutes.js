import express from "express";
import {
  loginParent,
  loginTutor,
  registerParent,
  registerTutor,
} from "../controllers/authControllers.js";
import validateParentIncomingData from "../validations/validateParentIncomingData.js";
import validateTutorIncomingData from "../validations/validateTutorIncomingData.js";
import isAuthenticated from "../middlewares/protectRoute.js";
import TokenBlacklist from "../models/blacklistToken.model.js";
const router = express.Router();

//register routes for both
router.post("/registerParent", validateParentIncomingData, registerParent);
router.post("/registerTutor", validateTutorIncomingData, registerTutor);

// login routes for both
router.post("/parentLogin", loginParent);
router.post("/tutorLogin", loginTutor);

// logout routes for both
router.get("/logout", isAuthenticated, async (req, res, next) => {
  try {
    const token = req.cookies.authToken;
    await TokenBlacklist.create({ token });
    res.clearCookie("authToken");
    res.status(200).json({ message: "Logged out successfully!" });
  } catch (error) {
    next(error);
  }
});

export default router;
