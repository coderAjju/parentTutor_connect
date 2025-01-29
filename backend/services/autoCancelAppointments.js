import cron from "node-cron";
import Appointment from "../models/appointment.model.js";

// Cron job to auto-cancel expired appointments
const autoCancelAppointments = () => {
  cron.schedule("0 0 * * *", async () => {
    try {
      const currentDate = new Date();

      const updatedAppointments = await Appointment.updateMany(
        {
          status: "pending",
          appointmentDate: { $lt: currentDate },
        },
        { status: "canceled" }
      );

      console.log(
        `${updatedAppointments.modifiedCount} appointments have been automatically canceled.`
      );
    } catch (error) {
      console.error("Error in auto-canceling appointments:", error.message);
    }
  });
};

export default autoCancelAppointments;
