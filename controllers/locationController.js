const Location = require("../models/Location");

// Save Location
exports.saveLocation = async (req, res) => {
  const { latitude, longitude } = req.body;

  try {
    const location = new Location({
      latitude,
      longitude,
    });
    await location.save();
    res.status(201).json({ message: "Location saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save location" });
  }
};
