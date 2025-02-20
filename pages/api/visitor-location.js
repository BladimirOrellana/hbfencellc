import dbConnect from "../../utils/dbConnect";
import mongoose from "mongoose";

// Location Schema
const LocationSchema = new mongoose.Schema(
  {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Initialize Model
const Location =
  mongoose.models.Location || mongoose.model("Location", LocationSchema);

// Connect to Database
dbConnect();

// API Handler
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { latitude, longitude } = req.body;

      // Validation
      if (!latitude || !longitude) {
        return res
          .status(400)
          .json({ error: "Latitude and longitude are required." });
      }

      // Save Location
      const location = await Location.create({ latitude, longitude });
      return res
        .status(201)
        .json({ message: "Location saved successfully!", location });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "Server error. Unable to save location." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" }); // Handle non-POST requests
  }
}
