import mongoose from "mongoose";

// Define Parent Appointment Schema
const appointmentSchema = new mongoose.Schema({
  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tutor", // Reference to the Tutor model
    required: true,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Parent", // Reference to the Parent model
    required: true,
  },
  subject: {
    type: String, // Subject of the appointment
    required: true,
    trim: true,
  },
  appointmentDate: {
    type: Date, // Date and time of the appointment
    required: true,
  },
  status: {
    type: String, // Status of the appointment (e.g., pending, confirmed, canceled)
    enum: ["pending", "confirmed", "canceled"],
    default: "pending",
  },
  // message: {
  //   type: String, // Optional message from the parent
  //   trim: true,
  // },
  // feedback: {
  //   tutorRating: {
  //     type: Number, // Rating for the tutor (1 to 5)
  //     min: 1,
  //     max: 5,
  //   },
  //   comment: {
  //     type: String, // Parent's feedback comment
  //     trim: true,
  //   },
  // },
  createdAt: {
    type: Date,
    default: Date.now, // Auto-generated timestamp for appointment creation
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Auto-generated timestamp for updates
  },
});

// Create Appointment model
const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
