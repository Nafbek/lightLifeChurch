const router = require("express").Router();

const {
  getAllMemberVolunteers,
  getSingleMemberVolunteer,
  createMemberVolunteer,
  deleteMembersVolunteers,
} = require("../../controllers/membershipVolunteerismController");

router
  .route("/")
  .post(createMemberVolunteer)
  .get(getSingleMemberVolunteer)
  .get(getAllMemberVolunteers)
  .delete(deleteMembersVolunteers);

module.exports = router;
