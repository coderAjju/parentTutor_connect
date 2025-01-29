import express from "express";
import isAuthenticated from "../middlewares/protectRoute.js";
import { tutorSearch } from "../controllers/profileController.js";

const router = express.Router();

router.get("/search/tutors", isAuthenticated, tutorSearch);

export default router;
