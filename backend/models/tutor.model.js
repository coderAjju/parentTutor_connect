import mongoose from "mongoose";
// Define Tutor Schema
const tutorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    default: "tutor",
  },
  qualifications: {
    type: [String],
    required: true,
    trim: true,
  },
  subjects: {
    type: [String], // Array of subjects the tutor can teach
    required: true,
  },
  experience: {
    type: Number, // Number of years of experience
    required: true,
  },
  hourlyRate: {
    type: Number, // Hourly rate for the tutor's services
    required: true,
  },
  availability: {
    type: [String], // Days and times available (e.g., ["Monday 9am-12pm", "Tuesday 1pm-3pm"])
    required: true,
  },
  profilePicture: {
    type: String, // URL of the tutor's profile picture (optional)
    default: "",
  },
  verified: {
    type: Boolean, // Whether the tutor's profile has been verified
    default: false,
  },
  reviews: [
    {
      parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Parent", // Reference to the Parent model
      },
      rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
      },
      comment: {
        type: String,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create Tutor model
const Tutor = mongoose.model("Tutor", tutorSchema);

export default Tutor;
