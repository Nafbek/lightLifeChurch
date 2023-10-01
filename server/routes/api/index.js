const router = require("express").Router();
const contactRoutes = require("./contactRoutes");
const membershipVolunteerRoutes = require("./membershipVolunteerRoutes");

router.use("/", contactRoutes);
router.use("/", membershipVolunteerRoutes);
module.exports = router;
