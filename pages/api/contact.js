import mongoose from "mongoose";
import Contact from "../../models/contact"; // Import the model

const MONGO_URI = process.env.MONGO_URI;
console.log("mogo uri", MONGO_URI);
// Connect to MongoDB
async function connectToDB() {
  if (mongoose.connection.readyState >= 1) {
    return; // Already connected
  }
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

// API Route
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      // Connect to database
      await connectToDB();

      // Save data to MongoDB
      const contact = await Contact.create({ name, email, message });

      res.status(201).json({ success: true, data: contact });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
