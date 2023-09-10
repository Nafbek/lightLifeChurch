import React from "react";
import "./Contact.css";

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
  return (
    <div className="container contact-container">
      <form className="form-div">
        <div className="name-div">
          <label htmlFor="firstname" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="form-control"
          />
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="form-control"
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
          />
        </div>
        <div className="message-div">
          <div>
            <label htmlFor="message" className="form-label">
              Message:
            </label>
          </div>

          <textarea className="text-area" name="message" />
        </div>
        <div>
          <button
            type="submit"
            className="submit-button btn btn-outline-primary"
            style={style.submitSize}
          >
            Send
          </button>
        </div>
      </form>
      <h5 style={style.byEmail}>
        OR send us by email:{" "}
        <a href="mailto:lolec2022@gmail.com">lolec2022@gmail.com</a>
      </h5>
    </div>
  );
}
