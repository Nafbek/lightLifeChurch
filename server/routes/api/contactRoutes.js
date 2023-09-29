const Contact = require("../../models/index");

const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    const createdContact = await Contact.create({
      firstName,
      lastName,
      email,
      message,
    });
    res.status(200).json(createdContact);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getContact = async (req, res) => {
  try {
    const { email } = req.body;
    const foundContact = await Contact.findOne({ where: { email } });

    if (!getContact) {
      res.status(400).json();
    }
    res.status(200).json(foundContact);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createContact, getContact };
