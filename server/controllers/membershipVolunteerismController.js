const MembershipVolunteerism = require("../models/MembershipVolunteerism");
const sendEmail = require("./sendEmail");

const createMemberVolunteer = async (req, res) => {
  try {
    const { purpose, fullName, email, phoneNumber, volunteerismArea } =
      req.body;
    console.log(req.body);
    const parsedPurpose = JSON.parse(purpose);
    const createdMemberVolunteer = await MembershipVolunteerism.create({
      purpose: parsedPurpose,
      fullName,
      email,
      phoneNumber,
      volunteerismArea,
    });
    console.log("Memebership/Volunteerism created:", createdMemberVolunteer);
    sendEmail(req.body);
    res.status(200).json(createdMemberVolunteer);
  } catch (error) {
    console.log("Server error for membership/volunteerism form", error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getAllMemberVolunteers = async (req, res) => {
  try {
    const foundMemberVolunteer = await MembershipVolunteerism.findAll({
      members: req.body,
    });
    if (foundMemberVolunteer) {
      res.status(200).json(foundMemberVolunteer);
    }
    res.status(400).json({ Message: "No data found" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

const getSingleMemberVolunteer = async (req, res) => {
  try {
    const foundSingleMember = await MembershipVolunteerism.findOne({
      email: req.email,
    });

    if (foundSingleMember) {
      res.status(200).json(foundSingleMember);
    }
    res.status(400).json({ Message: "Data not found" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

const deleteMembersVolunteers = async (req, res) => {
  try {
    const removedUpdateddMembers = await MembershipVolunteerism.findOneUpdate(
      {
        email: req.email,
      },
      {
        $pull: { membersVolunteers: { email: params.email } },
      },
      { new: true }
    );

    if (removedUpdateddMembers) {
      res.status(200).json(removedUpdateddMembers);
    }
    res.status(400).json({ message: "Data not found" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getAllMemberVolunteers,
  getSingleMemberVolunteer,
  createMemberVolunteer,
  deleteMembersVolunteers,
};
