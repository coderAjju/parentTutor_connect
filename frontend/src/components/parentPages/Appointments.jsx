import React, { useState } from "react";

const Appointments = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "John Doe",
      date: "2025-02-01",
      time: "10:00 AM",
      tutorImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s", // Placeholder image URL for the tutor
      status: "pending",
    },
    {
      id: 1,
      name: "John Doe",
      date: "2025-02-01",
      time: "10:00 AM",
      tutorImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s", // Placeholder image URL for the tutor
      status: "pending",
    },
    {
      id: 1,
      name: "John Doe",
      date: "2025-02-01",
      time: "10:00 AM",
      tutorImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s", // Placeholder image URL for the tutor
      status: "pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "2025-02-02",
      time: "02:00 PM",
      tutorImage: "https://via.placeholder.com/50", // Placeholder image URL for the tutor
    },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill in all fields");
      return;
    }

    const newAppointment = {
      id: appointments.length + 1,
      name: formData.name,
      date: formData.date,
      time: formData.time,
      tutorImage: "https://via.placeholder.com/50", // Placeholder image URL for new tutor
    };

    setAppointments([...appointments, newAppointment]);

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className=" min-h-screen bg-gray-800 p-6">
      <div className="  rounded-lg p-6 w-full">
        <div className="">
          <h3 className="text-xl font-semibold mb-4">Previous Appointments</h3>
          {appointments.length > 0 ? (
            <div className="space-y-3 flex gap-3 lg:flex-row flex-col flex-wrap">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="max-w-sm w-68 h-80 shadow-lg rounded-lg overflow-hidden border border-gray-200"
                >
                  <img
                    src={appointment.tutorImage}
                    alt="Tutor"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">
                      {appointment.name}
                    </h2>
                    <p className="text-gray-500">
                      {appointment.date} - {appointment.time}
                    </p>
                    <div className="mt-4">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          appointment.status === "Pending"
                            ? "bg-yellow-300 text-yellow-800"
                            : "bg-green-300 text-green-800"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No previous appointments.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
