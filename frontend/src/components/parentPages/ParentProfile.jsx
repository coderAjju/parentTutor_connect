import React, { useState } from "react";
import axios from "axios";
import UpdateParentProfileModal from "./UpdateParentProfileModal";

const ParentProfile = () => {
  const parentData = {
    fullName: "Neha Gupta",
    email: "neha.gupta@example.com",
    phoneNumber: "+918765432109",
    password: "Neha@123",
    profilePicture:
      "https://img.freepik.com/free-vector/parents-concept-illustration_114360-4137.jpg",
    children: [
      {
        id: 1,
        name: "Aarav Gupta",
        age: 10,
        grade: "5th",
        subjectInterests: ["Science", "Computer Science", "Geography"],
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcO7NQsNTxb2e7ThBWJwSQ3JouqSXuk-o1eg&s",
      },
      {
        id: 2,
        name: "Ananya Gupta",
        age: 8,
        grade: "3rd",
        subjectInterests: ["Mathematics", "English", "Art"],
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZP9zTf75vBmTD9BJWQmf3DjamXGuvzw44w&s",
      },
    ],
  };
  const [profile, setProfile] = useState(parentData);
  const [editing, setEditing] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle Profile Image Upload
  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, profilePicture: imageUrl });

      // Upload to backend
      const formData = new FormData();
      formData.append("file", file);
      const { data } = await axios.post("/api/upload", formData);
      setProfile({ ...profile, profilePicture: data.url });
    }
  };

  // Handle Child Image Upload
  const handleChildImageChange = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedChildren = [...profile.children];
      updatedChildren[index].photo = imageUrl;
      setProfile({ ...profile, children: updatedChildren });

      // Upload to backend
      const formData = new FormData();
      formData.append("file", file);
      const { data } = await axios.post("/api/upload", formData);
      updatedChildren[index].photo = data.url;
      setProfile({ ...profile, children: updatedChildren });
    }
  };

  // Handle Profile Update
  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put(`/api/parents/${profile._id}`, profile);
      alert("Profile updated successfully!");
      setEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto  shadow-lg rounded-lg">
      {/* Parent's Profile Section */}
      <div className="flex items-center mb-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src={profile.profilePicture || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleProfileImageChange}
          />
        </div>
        <div className="ml-6">
          <h2 className="text-2xl font-semibold">{profile.fullName}</h2>
          <p className="text-gray-600">{profile.email}</p>
          <p className="text-gray-600">{profile.phoneNumber}</p>
          <p className="text-gray-600">
            {profile.address || "No address provided"}
          </p>
        </div>
      </div>

      {/* Children's Profile Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Children's Details</h3>
        {profile.children.length > 0 ? (
          profile.children.map((child, index) => (
            <div key={index} className="mb-6 p-4  rounded-lg flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                  src={child.photo || "https://via.placeholder.com/100"}
                  alt={child.name}
                  className="w-full h-full object-cover"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => handleChildImageChange(e, index)}
                />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">
                  {child.name} (Age: {child.age})
                </h4>
                <p className="text-gray-600">Grade: {child.grade}</p>
                <p className="text-gray-600">
                  Interests: {child.subjectInterests.join(", ")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No children added yet.</p>
        )}
      </div>
      <button className="btn" onClick={() => setEditing((prev) => !prev)}>
        Edit Profile
      </button>
      {editing && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full h-screen overflow-y-auto fixed backdrop-blur-md  top-0 left-0 z-40 "
        >
          <UpdateParentProfileModal
            parentData={parentData}
            setProfile={setProfile}
            setEditing={setEditing}
          />
        </div>
      )}
    </div>
  );
};

export default ParentProfile;
