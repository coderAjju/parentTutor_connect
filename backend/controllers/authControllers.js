import { validationResult } from "express-validator";
import Parent from "../models/parent.model.js";
import Tutor from "../models/tutor.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSaveInCookie from "../services/generateTokenAndSaveInCookie.js";
// Example of a register function
export const registerParent = async (req, res, next) => {
  try {
    const { fullName, email, phoneNumber, password, children } = req.body;

    // Handle validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if parent already exists by email or phone number
    const existingParent = await Parent.findOne({
      $or: [{ email }, { phoneNumber }],
    });
    if (existingParent) {
      return res.status(400).json({
        message: "Parent already exists with this email or phone number.",
      });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new parent
    const parent = new Parent({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      children,
    });
    await parent.save();

    // generate token and save in cookie
    await generateTokenAndSaveInCookie(res, parent._id);

    res.status(201).json({ message: "Parent registered successfully!" });
  } catch (error) {
    next(error);
  }
};

export const registerTutor = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      password,
      qualifications,
      subjects,
      experience,
      hourlyRate,
      availability,
    } = req.body;

    // Handle validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the tutor already exists
    const existingTutor = await Tutor.findOne({
      $or: [{ email }, { phoneNumber }],
    });
    if (existingTutor) {
      return res.status(400).json({
        message: "Tutor already exists with this email or phone number.",
      });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new tutor
    const tutor = new Tutor({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      qualifications,
      subjects,
      experience,
      hourlyRate,
      availability,
    });
    await tutor.save();

    // generate token and save in cookie
    await generateTokenAndSaveInCookie(res, tutor._id);

    res.status(201).json({ message: "Tutor registered successfully!", tutor });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error });
  }
};

export const loginParent = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Check if the parent exists by email
    const parent = await Parent.findOne({ email });
    if (!parent) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // Verify the password
    const isPasswordMatch = await bcrypt.compare(password, parent.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // generate token and save in cookie
    await generateTokenAndSaveInCookie(res, parent._id);

    res.status(200).json({ message: "Login successful!", parent });
  } catch (error) {
    next(error);
  }
};

export const loginTutor = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Check if the parent exists by email
    const tutor = await Tutor.findOne({ email });
    if (!tutor) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // Verify the password
    const isPasswordMatch = await bcrypt.compare(password, tutor.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // generate token and save in cookie
    await generateTokenAndSaveInCookie(res, tutor._id);

    res.status(200).json({ message: `Welcome back ${tutor.fullName}`, tutor });
  } catch (error) {
    next(error);
  }
};
