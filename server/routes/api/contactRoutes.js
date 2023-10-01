const router = require("express").Router();

const {
  createContact,
  getContact,
} = require("../../controllers/contactController");

router.route("/contact").post(createContact);
router.route(`/contact/:email`).get(getContact);

module.exports = router;
