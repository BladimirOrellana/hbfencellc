const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const next = require("next");
const routes = require("./routes/index"); // Import routes

// Load environment variables
dotenv.config();

// Next.js Setup
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;
console.log("port ", PORT);
// CORS Configuration
const corsOptions = {
  origin: ["http://localhost:3000"], // Adjust as needed for production
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json()); // Parse JSON data

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Custom API Routes
app.use(routes);

// Handle Next.js Routes
nextApp.prepare().then(() => {
  app.all("*", (req, res) => {
    return handle(req, res); // Let Next.js handle all other routes
  });

  // Start Server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
