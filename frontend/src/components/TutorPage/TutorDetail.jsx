import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import DatePickerComponent from "../DatePicker";
const TutorDetail = () => {
  const [openSection, setOpenSection] = useState(null);
  const tutor = {
    fullName: "Deepak Joshi",
    role: "tutor",
    qualifications: [
      "B.Tech in Electrical Engineering",
      "M.Tech in Power Systems",
    ],
    subjects: ["Electrical Engineering", "Power Systems", "Circuit Design"],
    experience: 10,
    hourlyRate: 60,
    availability: ["Monday 10am-1pm", "Wednesday 2pm-5pm", "Friday 4pm-7pm"],
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  };
  const feedbacks = [
    {
      rating: 5,
      comment:
        "Amazing tutor! Explains concepts very clearly and makes learning enjoyable. Highly recommend!",
    },
    {
      rating: 4,
      comment:
        "Great experience! Very knowledgeable, but sometimes a bit hard to keep up with the pace.",
    },
    {
      rating: 3,
      comment:
        "The lessons were decent, but I felt like there could have been more interactive activities.",
    },
    {
      rating: 5,
      comment:
        "Best tutor I’ve had! Took the time to address all my doubts and made complex topics easy to understand.",
    },
    {
      rating: 4,
      comment:
        "Good tutor overall. Could improve by providing more real-life examples during lessons.",
    },
  ];

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto my-10 mt-24 p-5 bg-gray-800 rounded-lg shadow-lg">
        {/* Tutor Profile Section */}
        <div className="flex items-center space-x-6">
          <img
            src={tutor.profilePicture}
            alt={tutor.fullName}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-semibold text-gray-200">
              {tutor.fullName}
            </h1>
            <p className="text-lg text-gray-400">{tutor.role}</p>
          </div>
        </div>

        {/* Qualifications and Experience (Accordion) */}
        <div className="mt-6">
          <div
            className="cursor-pointer"
            onClick={() => toggleSection("qualifications")}
          >
            <h2 className="text-2xl font-semibold text-gray-300">
              Qualifications
            </h2>
          </div>

          <ul className="mt-2 flex items-center text-gray-400">
            {tutor.qualifications.map((qualification, index) => (
              <>
                <li key={index} className="text-lg">
                  {qualification}
                </li>
                {tutor.qualifications.length !== index + 1 && (
                  <p>&nbsp; | &nbsp;</p>
                )}
              </>
            ))}
          </ul>

          <div
            className="cursor-pointer mt-6"
            onClick={() => toggleSection("experience")}
          >
            <h2 className="text-2xl font-semibold text-gray-300">Experience</h2>
          </div>
          <p className="text-lg text-gray-400">
            {tutor.experience} years of experience
          </p>
        </div>

        {/* Subjects Section (Accordion) */}
        <div className="mt-6">
          <div
            className="cursor-pointer"
            onClick={() => toggleSection("subjects")}
          >
            <h2 className="text-2xl font-semibold text-gray-300">
              Subjects Taught
            </h2>
          </div>

          <ul className="mt-2 flex text-gray-400">
            {tutor.subjects.map((subject, index) => (
              <>
                <li key={index} className="text-lg">
                  {subject}
                </li>
                {tutor.subjects.length !== index + 1 && <p>&nbsp; | &nbsp;</p>}
              </>
            ))}
          </ul>
        </div>

        {/* Availability Section (Accordion) */}
        <div className="mt-6">
          <div
            className="cursor-pointer"
            onClick={() => toggleSection("availability")}
          >
            <h2 className="text-2xl font-semibold text-gray-300">
              Availability
            </h2>
          </div>
          <ul className="mt-2 flex text-gray-400">
            {tutor.availability.map((slot, index) => (
              <>
                <li key={index} className="text-lg">
                  {slot}
                </li>
                {tutor.availability.length !== index + 1 && (
                  <p>&nbsp; | &nbsp;</p>
                )}
              </>
            ))}
          </ul>
        </div>

        {/* Hourly Rate */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-300">Hourly Rate</h2>
          <p className="text-lg text-gray-400">${tutor.hourlyRate} per hour</p>
        </div>

        {/* Actionable Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300">
            Contact Tutor
          </button>
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300"
          >
            Book a Session
          </button>
          <dialog id="my_modal_3" className="modal ">
            <div className="modal-box h-[65vh] mt-10 bg-gray-800 ">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div>
                <DatePickerComponent />
              </div>
            </div>
          </dialog>
        </div>

        {/* Rating Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-300">Ratings</h2>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">&#9733;</span>
            <span className="text-yellow-400">&#9733;</span>
            <span className="text-yellow-400">&#9733;</span>
            <span className="text-yellow-400">&#9733;</span>
            <span className="text-gray-400">&#9733;</span>
            <span className="ml-2 text-gray-400">(4.0 out of 5)</span>
          </div>
        </div>
      </div>
      {/* Feedback Component */}
      {/* <Feedback onSubmitFeedback={handleFeedbackSubmit} /> */}

      {/* Display Feedbacks */}
      <div className="my-10 ">
        <h2 className="text-2xl  w-[80vw] mx-auto  mb-10 font-semibold text-gray-300">
          Student Feedback
        </h2>
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={50}
          slidesPerView={2}
          scrollbar={{ draggable: true }}
          className="w-[80vw]"
        >
          {feedbacks.length > 0 ? (
            <div className="mt-4">
              {feedbacks.map((feedback, index) => (
                <SwiperSlide>
                  <div
                    key={index}
                    className="mb-4 p-4 w-lg h-36 bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-2xl ${
                            i < feedback.rating
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }`}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                    <p className="mt-2 text-gray-400">{feedback.comment}</p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No feedback yet</p>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default TutorDetail;
