import Appointment from "../models/appointment.model.js";
import Tutor from "../models/tutor.model.js";
import Parent from "../models/parent.model.js";

// Create a new appointment
export const createAppointment = async (req, res) => {
  try {
    const { tutorId, parentId, subject, appointmentDate } = req.body;

    if (!tutorId || !parentId || !subject || !appointmentDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate tutor and parent existence
    const tutor = await Tutor.findById(tutorId);
    const parent = await Parent.findById(parentId);

    if (!tutor || !parent) {
      return res.status(404).json({ message: "Tutor or Parent not found" });
    }

    // Create a new appointment
    const newAppointment = new Appointment({
      tutorId,
      parentId,
      subject,
      appointmentDate,
    });

    await newAppointment.save();
    res
      .status(201)
      .json({ message: "Appointment created successfully", newAppointment });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create appointment", error: error.message });
  }
};

// Get all appointments on tutor end
export const getAppointmentsByTutor = async (req, res) => {
  try {
    const { tutorId } = req.params;
    if (!tutorId) {
      return res.status(400).json({ message: "Tutor ID is required" });
    }
    const appointments = await Appointment.find({ tutorId }).populate(
      "parentId",
      "fullName email profilePicture"
    );

    if (!appointments.length) {
      return res
        .status(404)
        .json({ message: "No appointments found for this tutor" });
    }

    res.status(200).json({ appointments });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch appointments", error: error.message });
  }
};

// Get all appointments on parent end
export const getAppointmentsByParent = async (req, res) => {
  try {
    const { parentId } = req.params;

    const appointments = await Appointment.find({ parentId }).populate(
      "tutorId",
      "fullName email profilePicture"
    );

    if (!appointments.length) {
      return res
        .status(404)
        .json({ message: "No appointments found for this parent" });
    }

    res.status(200).json({ appointments });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch appointments", error: error.message });
  }
};

// Update appointment status
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { status } = req.body;

    const validStatuses = ["pending", "confirmed", "canceled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { status },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res
      .status(200)
      .json({ message: "Appointment status updated", updatedAppointment });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update appointment status",
      error: error.message,
    });
  }
};

// // Add feedback to an appointment
// export const addFeedback = async (req, res) => {
//   try {
//     const { appointmentId } = req.params;
//     const { tutorRating, comment } = req.body;

//     const appointment = await Appointment.findById(appointmentId);
//     if (!appointment) {
//       return res.status(404).json({ message: "Appointment not found" });
//     }

//     appointment.feedback = { tutorRating, comment };
//     await appointment.save();

//     res
//       .status(200)
//       .json({ message: "Feedback added successfully", appointment });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to add feedback", error: error.message });
//   }
// };
