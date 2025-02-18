const express = require("express");
const router = express.Router();
const { saveLocation } = require("./../../controllers/locationController");

// POST route to save location
router.post("/", saveLocation);

module.exports = router;
