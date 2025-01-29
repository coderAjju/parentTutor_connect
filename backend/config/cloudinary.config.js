import cloudinary from "cloudinary";
import { config } from "dotenv";
import { Readable } from "stream";
config();

cloudinary.v2.config({
  cloud_name: process.env.YOUR_CLOUD_NAME,
  api_key: process.env.YOUR_API_KEY,
  api_secret: process.env.YOUR_API_SECRET,
});

// upload functionality of image on cloudinary
export const uploadProfilePicture = async (profileImage, res) => {
  try {
    const result = {};
    if (profileImage) {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        { resource_type: "auto" },
        (error, result) => {
          if (error) {
            console.log("upload failed error: ", error);
            return res.status(500).json({ error: "Upload failed" });
          }
          console.log("result ", result);
          result = {
            url: result.secure_url,
          };
        }
      );

      // Convert the buffer to a readable stream and pipe it to the upload stream
      const bufferStream = Readable.from(profileImage.buffer);
      bufferStream.pipe(uploadStream);
    }
    return result;
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Upload failed" });
  }
};
export const deleteImage = async (publicId) => {
  try {
    const result = await cloudinary.v2.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
};
