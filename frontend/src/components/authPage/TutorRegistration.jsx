import { useState } from "react";

const TutorRegistration = () => {
  const [tutor, setTutor] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    qualifications: "",
    subjects: "",
    experience: "",
    hourlyRate: "",
    availability: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTutor((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tutor Data Submitted:", tutor);
    // Here, you can send the tutor data to the backend
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 mb-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Tutor Registration
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {[
          { name: "fullName", type: "text", placeholder: "Full Name" },
          { name: "email", type: "email", placeholder: "Email" },
          { name: "phoneNumber", type: "text", placeholder: "Phone Number" },
          { name: "password", type: "password", placeholder: "Password" },
          {
            name: "qualifications",
            type: "text",
            placeholder: "Qualifications",
          },
          {
            name: "subjects",
            type: "text",
            placeholder: "Subjects (comma-separated)",
          },
          {
            name: "experience",
            type: "text",
            placeholder: "Experience (in years)",
          },
          {
            name: "hourlyRate",
            type: "number",
            placeholder: "Hourly Rate ($)",
          },
          {
            name: "availability",
            type: "text",
            placeholder: "Availability (e.g., Mon-Fri, Weekends)",
          },
        ].map((field, index) => (
          <div key={index} className="col-span-2">
            <input
              type={field.type}
              name={field.name}
              value={tutor[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
        ))}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default TutorRegistration;
