import express from "express";
import isAuthenticated from "../middlewares/protectRoute.js";
import {
  parentDetailInfo,
  parentProfile,
  tutorDetailInfo,
  tutorProfile,
  tutorSearch,
  updateParentProfile,
  updateTutorProfile,
  uploadImage,
} from "../controllers/profileController.js";
import upload from "../config/multer.config.js";
import validateParentIncomingData from "../validations/validateParentIncomingData.js";

const router = express.Router();

// route for getting tutor and parent data
router.get("/parent-details/:id", isAuthenticated, parentDetailInfo);
router.get("/tutor-details/:id", isAuthenticated, tutorDetailInfo);

// route to get profile for tutor and parent
router.get("/tutorProfile", isAuthenticated, tutorProfile);
router.get("/parentProfile", isAuthenticated, parentProfile);

// route to update profile data of tutor and parent
router.put("/update/parentProfile", isAuthenticated, updateParentProfile);
router.put("/update/tutorProfile", isAuthenticated, updateTutorProfile);

// route to upload image
router.put(
  "/upload-image",
  isAuthenticated,
  upload.single("profilePic"),
  uploadImage
);

export default router;
