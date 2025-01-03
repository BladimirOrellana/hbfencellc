import mongoose from "mongoose";
import Contact from "./../../models/contact";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.error("Validation failed: Missing fields.");
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      // Connect to database
      await mongoose.connect(process.env.MONGO_URI);

      // Save to DB
      const contact = await Contact.create({ name, email, message });
      console.log("Contact saved:", contact);

      res.status(201).json({ success: true });
    } catch (error) {
      console.error("Server error:", error.message); // Log the error
      res.status(500).json({ error: "Server error. Please try again later." });
    }
  } else {
    console.error("Invalid method:", req.method);
    res.status(405).json({ error: "Method not allowed" });
  }
}
