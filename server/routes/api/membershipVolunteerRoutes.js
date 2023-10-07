const router = require("express").Router();

const {
  getAllMemberVolunteers,
  getSingleMemberVolunteer,
  createMemberVolunteer,
  deleteMembersVolunteers,
} = require("../../controllers/membershipVolunteerismController");

router
  .route("/membership")
  .post(createMemberVolunteer)
  .get(getAllMemberVolunteers);
router
  .route(`/membership/:email`)
  .get(getSingleMemberVolunteer)
  .delete(deleteMembersVolunteers);

module.exports = router;
