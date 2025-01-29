import { validationResult } from "express-validator";
import { deleteImage } from "../config/cloudinary.config.js";
import Parent from "../models/parent.model.js";
import Tutor from "../models/tutor.model.js";
import cloudinary from "cloudinary";
import { Readable } from "stream";
// detail info for tutor
export const parentDetailInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const parent = await Parent.findById(id).select(
      "-role -password -reviews -createdAt -updatedAt"
    );
    if (!parent) {
      return res.status(404).json({ message: "Parent not found." });
    }
    res.status(200).json({ parent });
  } catch (error) {
    next(error);
  }
};

// detail info for parent
export const tutorDetailInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tutor = await Tutor.findById(id).select(
      "-role -password -reviews -createdAt -updatedAt"
    );
    if (!tutor) {
      return res.status(404).json({ message: "Tutor not found." });
    }
    res.status(200).json({ tutor });
  } catch (error) {
    next(error);
  }
};

// profile data of tutor
export const tutorProfile = async (req, res, next) => {
  try {
    const id = req.id;
    const tutor = await Tutor.findById(id).select(
      "-role -password -reviews -createdAt -updatedAt"
    );
    if (!tutor) {
      return res.status(404).json({ message: "Tutor not found." });
    }
    res.status(200).json({ tutor });
  } catch (error) {
    next(error);
  }
};

// profile data of parent
export const parentProfile = async (req, res, next) => {
  try {
    const id = req.id;
    const parent = await Parent.findById(id).select(
      "-role -password -reviews -createdAt -updatedAt"
    );
    if (!parent) {
      return res.status(404).json({ message: "Parent not found." });
    }
    res.status(200).json({ parent });
  } catch (error) {
    next(error);
  }
};

export const uploadImage = async (req, res, next) => {
  try {
    const id = req.id;
    const profileImage = req.file;
    let url = "";
    if (!profileImage) {
      return res.status(400).json({ message: "No image uploaded." });
    }
    const parent = await Parent.findById(id).select(
      "-password -reviews -createdAt -updatedAt"
    );
    if (parent) {
      if (parent.profilePicture) {
        const publicId = parent.profilePicture.split("/").pop().split(".")[0];
        await deleteImage(publicId);
      }
      const uploadStream = await cloudinary.v2.uploader.upload_stream(
        { resource_type: "auto" },
        (error, result) => {
          if (error) {
            console.log("upload failed error: ", error);
            return res.status(500).json({ error: "Upload failed" });
          }
          parent.profilePicture = result.secure_url;
          parent.save();
        }
      );

      // Convert the buffer to a readable stream and pipe it to the upload stream
      const bufferStream = Readable.from(profileImage.buffer);
      bufferStream.pipe(uploadStream);
    } else {
      const tutor = await Tutor.findById(id);
      if (tutor.profilePicture) {
        const publicId = tutor.profilePicture.split("/").pop().split(".")[0];
        await deleteImage(publicId);
      }
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        { resource_type: "auto" },
        (error, result) => {
          if (error) {
            console.log("upload failed error: ", error);
            return res.status(500).json({ error: "Upload failed" });
          }
          console.log(result.secure_url, result.url);
          tutor.profilePicture = result.secure_url;
          tutor.save();
        }
      );
      // Convert the buffer to a readable stream and pipe it to the upload stream
      const bufferStream = Readable.from(profileImage.buffer);
      bufferStream.pipe(uploadStream);
    }
    res.status(200).json({ message: "Image uploaded successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to upload image" });
  }
};

// update profile data of parent
// export const updateParentProfile = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const updatedParent = await Parent.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     if (!updatedParent) {
//       return res.status(404).json({ message: "Parent not found." });
//     }
//     res.status(200).json({ updatedParent });
//   } catch (error) {
//     next(error);
//   }
// };
export const updateParentProfile = async (req, res, next) => {
  try {
    const id = req.id;
    const { fullName, email, phoneNumber, children } = req.body;
    if (!fullName || !email || !phoneNumber || !children) {
      return res.status(400).json({ message: "All fields are required." });
    }
    // Handle validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updatedParent = await Parent.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedParent) {
      return res.status(404).json({ message: "Parent not found." });
    }
    res.status(200).json({ updatedParent });
  } catch (error) {
    next(error);
  }
};

// update profile data of tutor
export const updateTutorProfile = async (req, res, next) => {
  try {
    const id = req.id;
    const { fullName, email, phoneNumber, qualifications, subjects } = req.body;
    if (!fullName || !email || !phoneNumber || !qualifications || !subjects) {
      return res.status(400).json({ message: "All fields are required." });
    }
    // Handle validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const updatedTutor = await Tutor.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({ message: "Profile updated", updatedTutor });
  } catch (error) {
    next(error);
  }
};

export const tutorSearch = async (req, res, next) => {
  try {
    const { fullName, address, qualifications, subjects } = req.query;

    // Create a dynamic filter object
    const filter = {};
    if (fullName) {
      filter.fullName = { $regex: fullName, $options: "i" };
    }
    if (address) {
      filter.address = { $regex: address, $options: "i" };
    }
    if (qualifications) {
      filter.qualifications = { $regex: qualifications, $options: "i" };
    }
    if (subjects) {
      filter.subjects = { $regex: subjects, $options: "i" };
    }

    // Query the database using the filter
    const tutors = await Tutor.find(filter);

    // Return the matching tutors
    res.status(200).json({ success: true, data: tutors });
  } catch (error) {
    next(error);
  }
};
