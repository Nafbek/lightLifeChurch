import React, { useState } from "react";
import "./Contact.css";
import {
  // getSingleMemberVolunteer,
  // getALLMemberVolunteer,
  // createMemberVolunteer,
  // deleteMembersVolunteers,
  // getContact,
  createContact,
} from "../utils/API";

const style = {
  byEmail: {
    margin: 0,
    paddingBottom: ".5rem",
  },
  submitSize: {
    fontSize: "1.5rem",
    padding: ".5rem",
    fontWeight: "bold",
  },
};
export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createContact(formData);
      console.log("Server response", response);

      if (response.ok) {
        setSubmitStatus("Form submitted successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        console.log("Error submitting contact form");
        setSubmitStatus("Error submitting contact form. Please try again.");
      }
    } catch (error) {
      console.log("Error submitting contact form", error);
      setSubmitStatus("Error submitting contact form. Please try again.");
    }
  };

  return (
    <div className="container contact-container">
      <form className="form-div">
        <h3>Contact us</h3>
        <div className="name-div">
          <label htmlFor="firstname" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="form-control"
            onChange={handleInputChange}
          />
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="email-div">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="message-div">
          <div>
            <label htmlFor="message" className="form-label">
              Message:
            </label>
          </div>

          <textarea
            className="text-area"
            name="message"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="submit-button btn btn-outline-primary"
            style={style.submitSize}
            onClick={handleFormSubmit}
          >
            Send Message
          </button>
        </div>
      </form>
      {submitStatus && <p>{submitStatus}</p>}
      <h5 style={style.byEmail}>
        OR send us by email:{" "}
        <a href="mailto:lolec2022@gmail.com">lolec2022@gmail.com</a>
      </h5>
    </div>
  );
}
