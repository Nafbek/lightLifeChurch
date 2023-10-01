const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    console.log(req.body);
    const createdContact = await Contact.create({
      firstName,
      lastName,
      email,
      message,
    });
    console.log("Contact created:", createdContact);
    res.status(200).json(createdContact);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
    console.log("Server error for Contact data", error);
  }
};

const getContact = async (req, res) => {
  try {
    const { email } = req.query;
    const foundContact = await Contact.findOne({ where: { email } });

    if (!foundContact) {
      res.status(400).json({ messge: "Contact not found" });
    }
    res.status(200).json(foundContact);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createContact, getContact };
