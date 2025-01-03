const router = require("express").Router();
const contactRoutes = require("./contact");

app.use("/contact", contactRoutes);

module.exports = router;
