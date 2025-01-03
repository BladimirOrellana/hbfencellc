const express = require("express");
const router = express.Router();
const {
  createContact,
  getContacts,
} = require("./../../controllers/contactController");

// Public route to create contact
router.post("/", createContact);

// Private route to get all contacts (for admin purposes)
router.get("/", getContacts);

module.exports = router;
