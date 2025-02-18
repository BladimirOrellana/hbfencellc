const router = require("express").Router();
const contactRoutes = require("./contact");
const location = require("./locationRoutes");
app.use("/contact", contactRoutes);
app.use("/visitors-location", location);

module.exports = router;
