import multer from "multer";
import cloudinary from "./../../utils/cloudinary";
import dbConnect from "./../../utils/dbConnect";
import User from "./../../models/Users";
import fs from "fs";
import { promisify } from "util";

const unlinkAsync = promisify(fs.unlink);

// Configure Multer for file upload (storing in `/tmp`)
const upload = multer({ dest: "/tmp" });

// Disable body parser so Next.js can handle FormData
export const config = {
  api: {
    bodyParser: false,
  },
};

// API Route to handle file uploads
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await dbConnect();

  return new Promise((resolve, reject) => {
    upload.single("file")(req, res, async (err) => {
      if (err) {
        console.error("Multer error:", err);
        return res
          .status(500)
          .json({ message: "File upload error", error: err.message });
      }

      try {
        const { uid } = req.query;
        if (!uid || !req.file) {
          return res.status(400).json({ message: "File and UID are required" });
        }

        // 🔥 Validate user exists
        const user = await User.findOne({ uid });
        if (!user) {
          return res
            .status(403)
            .json({ message: "Unauthorized: User not found" });
        }

        // Upload file to Cloudinary
        const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
          folder: "user_profiles",
        });

        // Remove temp file
        await unlinkAsync(req.file.path);

        if (!uploadResponse.secure_url) {
          return res.status(500).json({ message: "Cloudinary upload failed" });
        }

        // Save URL to user in MongoDB
        user.profileImage = uploadResponse.secure_url;
        await user.save();

        res.status(200).json({ message: "Image uploaded successfully", user });
        resolve();
      } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
        reject();
      }
    });
  });
}
