import dbConnect from "./../../utils/dbConnect";
import User from "./../../models/Users";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { uid } = req.query;
      if (!uid) return res.status(400).json({ message: "UID is required" });

      const user = await User.findOne({ uid });
      if (!user) return res.status(404).json({ message: "User not found" });

      return res.status(200).json({ user });
    } catch (error) {
      console.error("Error fetching user:", error);
      return res.status(500).json({ message: "Server error" });
    }
  }

  if (req.method === "POST") {
    try {
      const { uid, email, firstName, lastName } = req.body;

      // Check if user already exists
      let user = await User.findOne({ uid });
      if (user) return res.status(400).json({ message: "User already exists" });

      // Save new user
      user = new User({ uid, email, firstName, lastName });
      await user.save();

      return res.status(201).json({ message: "User saved successfully", user });
    } catch (error) {
      console.error("MongoDB Save Error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
