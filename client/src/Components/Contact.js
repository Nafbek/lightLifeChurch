import React from "react";

export default function Contact() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="form-control"
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="text-area" name="message" />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
