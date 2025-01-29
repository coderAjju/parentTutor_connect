import express from "express";
import {
  createAppointment,
  getAppointmentsByParent,
  getAppointmentsByTutor,
  updateAppointmentStatus,
} from "../controllers/appointment.controller.js";
import isAuthenticated from "../middlewares/protectRoute.js";
const router = express.Router();

router.post("/create", isAuthenticated, createAppointment);
router.get("/tutor/:tutorId", isAuthenticated, getAppointmentsByTutor);
router.get("/parent/:parentId", isAuthenticated, getAppointmentsByParent);
router.patch(
  "/:appointmentId/status",
  isAuthenticated,
  updateAppointmentStatus
);

export default router;
