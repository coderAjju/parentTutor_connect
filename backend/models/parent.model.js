import mongoose from "mongoose";
// Define Parent Schema
const parentSchema = new mongoose.Schema(
  {
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
    profilePicture: {
      type: String,
    },
    role: {
      type: String,
      default: "parent",
    },
    children: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        age: {
          type: Number,
          required: true,
        },
        grade: {
          type: String,
          required: true,
        },

        subjectInterests: {
          type: [String], // Array of subjects the child is interested in
          required: true,
        },
        photo: {
          type: String,
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
  },
  {
    timestamps: true,
  }
);

// Create Parent model
const Parent = mongoose.model("Parent", parentSchema);

export default Parent;
