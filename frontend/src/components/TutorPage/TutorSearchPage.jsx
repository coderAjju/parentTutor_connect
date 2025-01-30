import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Sample Tutor Data
const tutors = [
  {
    fullName: "John Doe",
    role: "tutor",
    qualifications: ["B.Sc. in Mathematics", "M.Sc. in Physics"],
    subjects: ["Math", "Physics"],
    experience: 5, // 5 years of experience
    hourlyRate: 30, // $30 per hour
    availability: ["Monday 9am-12pm", "Wednesday 1pm-4pm", "Friday 9am-11am"],
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", // Use a valid URL or path
  },
  {
    fullName: "Amit Singh",
    role: "tutor",
    qualifications: [
      "B.Tech in Computer Science",
      "M.Tech in Software Engineering",
    ],
    subjects: ["Computer Science", "Programming"],
    experience: 7,
    hourlyRate: 40,
    availability: ["Tuesday 10am-1pm", "Thursday 2pm-5pm", "Saturday 11am-2pm"],
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    fullName: "Priya Sharma",
    role: "tutor",
    qualifications: ["M.A in English Literature", "B.Ed"],
    subjects: ["English", "Literature", "Grammar"],
    experience: 4,
    hourlyRate: 35,
    availability: ["Monday 8am-11am", "Wednesday 12pm-3pm", "Friday 2pm-5pm"],
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    fullName: "Ravi Kumar",
    role: "tutor",
    qualifications: ["M.Sc. in Chemistry", "B.Sc. in Chemistry"],
    subjects: ["Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
    experience: 6,
    hourlyRate: 45,
    availability: ["Monday 9am-12pm", "Thursday 3pm-6pm", "Sunday 10am-1pm"],
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    fullName: "Suman Verma",
    role: "tutor",
    qualifications: ["B.Com", "MBA in Finance"],
    subjects: ["Accounting", "Business Studies", "Economics"],
    experience: 8,
    hourlyRate: 50,
    availability: ["Tuesday 9am-12pm", "Friday 1pm-4pm", "Saturday 12pm-3pm"],
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
];

const TutorSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTutors, setFilteredTutors] = useState(tutors);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter tutors based on search query
  useEffect(() => {
    const filtered = tutors.filter((tutor) => {
      return (
        tutor.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.subjects.some((subject) =>
          subject.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    });
    setFilteredTutors(filtered);
  }, [searchQuery]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll page to top on route change
  }, [pathname]);

  return (
    <div className="p-6 mt-20">
      <h1 className="text-2xl font-semibold mb-4">Search Tutors</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by name or subject"
        className="p-2 border border-gray-300 rounded mb-4 w-full"
      />

      <div className="flex gap-10 flex-wrap mt-14">
        {filteredTutors.length === 0 ? (
          <p>No tutors found</p>
        ) : (
          filteredTutors.map((tutor, index) => (
            <div
              key={index}
              className=" bg-gray-800 shadow-lg rounded-lg p-6 w-full sm:w-80"
            >
              <div className="flex items-center mb-4">
                <img
                  src={tutor.profilePicture || "default_profile_picture.jpg"}
                  alt={tutor.fullName}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">{tutor.fullName}</h2>
                  <p className="text-gray-400 text-sm">{tutor.role}</p>
                </div>
              </div>

              <div className="mb-2">
                <h3 className="text-lg font-semibold">Subjects:</h3>
                <ul className="list-disc pl-6 text-gray-400">
                  {tutor.subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-2">
                <h3 className="text-lg font-semibold">Experience:</h3>
                <p className="text-gray-400">
                  {tutor.experience} years of experience
                </p>
              </div>
              <div className="flex justify-end mt-3 ">
                <Link to={`/tutor/detail-page/${Math.random()}`}>
                  <button className="btn ">View Details</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TutorSearchPage;
