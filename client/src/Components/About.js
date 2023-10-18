import React, { useState } from "react";
import "./About.css";
import "../utils/API";
import { createMemberVolunteer } from "../utils/API";
const style = {
  elementWidth: {
    marginBottom: 0,
    padding: "1rem",
  },
  aboutBox: {
    width: "90%",
  },
};
export default function About() {
  const [formData, setFormData] = useState({
    purpose: [],
    fullName: "",
    email: "",
    phoneNumber: null,
    volunteerismArea: "",
  });
  const [statusMessage, setStatusMessage] = useState();

  const handleInputChange = (e) => {
    console.log("handleInputChange callled");
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedvalues = checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value);
      setFormData({ ...formData, [name]: updatedvalues });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Button get clicked.");

    try {
      const response = await createMemberVolunteer({
        ...formData,
      });
      console.log("Response:", response);
      if (response.ok) {
        setStatusMessage("Form submitted successfully.");
        setFormData({
          purpose: "",
          fullName: "",
          email: "",
          phoneNumber: null,
          volunteerismArea: "",
        });
      } else {
        setStatusMessage("Error submitting form. Please try again.");
        console.log("Error submitting form:");
      }
    } catch (error) {
      console.log("Error submittin form:", error);
      setStatusMessage("Error submitting form. Please try again.");
    }
  };

  const handleVisitButton = () => {
    window.open(
      "https://www.google.com/maps/place/104+Snelling+Ave+S,+St+Paul,+MN+55105/@44.9384158,-93.1690496,17z/data=!3m1!4b1!4m6!3m5!1s0x87f62a17c2fe574d:0x64fe56b109e05f89!8m2!3d44.938412!4d-93.1664747!16s%2Fg%2F11bw3yd4hh?authuser=0&entry=ttu",
      "_blank"
    );
  };

  return (
    <>
      <div className="container about-container" style={style.elementWidth}>
        <div>
          <h2 className="page-header">About us</h2>
        </div>
        <div style={style.aboutBox}>
          <p className="about-description">
            This church is .............
            <strong> write short story here.......</strong> .................
            This Congregation believes, teaches, and confesses Jesus Christ as
            Lord and Savior, through whom everything was made, and through whose
            life, death, and resurrection God fashions a new creation and
            believes that salvation is by grace through faith alone. This
            Congregation believes, teaches, and confesses Jesus Christ as Lord
            and Savior, through whom everything was made, and through whose
            life, death, and resurrection God fashions a new creation and
            believes that salvation is by grace through faith alone.{" "}
          </p>
        </div>

        <div className="mx-auto vision-container" style={style.aboutBox}>
          <p className="d-inline-flex gap-1 collapse-heading vision-heading">
            <button
              className="btn btn-primary multiCollapse-link"
              data-bs-toggle="collapse"
              href="#multiCollapseVision"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseVision"
            >
              Vision and Mission
            </button>
            <button
              className="btn btn-primary multiCollapse-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseFaith"
              aria-expanded="false"
              aria-controls="multiCollapseFaith"
            >
              Statement of Faith
            </button>

            <button
              className="btn btn-primary multiCollapse-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#multiCollapseValues"
              aria-expanded="false"
              aria-controls="multiCollapseValues"
            >
              Values
            </button>
            <button
              className="btn btn-outline-primary  multiCollapse-link"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".multi-collapse"
              aria-expanded="false"
              aria-controls="multiCollapseVision multiCollapseFaith multiCollapseValues"
            >
              Read All
            </button>
          </p>

          <div className="row">
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseVision">
                <div className="card card-body each-collapse">
                  <h3>Vision</h3>
                  <p>the vision of .........................</p>

                  <h3>Mission</h3>
                  <p>
                    This Church is dedicated to fulfilling the Great Commission
                    of Our Lord Jesus Christ, as recorded in the Gospel of{" "}
                    <strong>Matthew 28:18-20 and Mark 16:15-20</strong> , both
                    locally and internationally. Our congregation's primary
                    calling is to minister to those who are lost and share the
                    message of Good News with all people.
                  </p>
                  <p>
                    We are committed to expanding our presence, establishing
                    branches both in Minnesota and abroad. Additionally, we are
                    actively involved in prison ministry, hospital visitation,
                    correctional center outreach, and providing support to
                    shelters through prayer and counseling.
                  </p>
                  <p>
                    Our mission is to serve and care for the holistic well-being
                    of every individual we encounter.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseFaith">
                <div className="card card-body each-collapse">
                  <h3>Statement of Faith</h3>
                  <p>
                    This church is a community of faith. We firmly believe,
                    teach, and confess Jesus Christ as Lord and Savior,
                    acknowledging that through Him, all things were created.
                    Through His life, death, and resurrection, God ushers in a
                    new creation. We hold the conviction that salvation is
                    solely by grace through faith.
                  </p>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="collapse multi-collapse" id="multiCollapseValues">
                <div className="card card-body each-collapse">
                  <h3>Values</h3>
                  <ul>
                    <li>
                      <strong>Faith:</strong>A commitment to faith in God, Jesus
                      Christ, and the teachings of the Bible.
                    </li>
                    <li>
                      <strong>Worship:</strong>A focus on worshiping God through
                      prayer, song, and sacraments.
                    </li>
                    <li>
                      <strong>Community:</strong>A sense of community and
                      fellowship among members, supporting and caring for one
                      another.{" "}
                    </li>
                    <li>
                      <strong>Seervice:</strong>A dedication to serving others,
                      including outreach programs, charity work, and social
                      justice initiatives.
                    </li>
                    <li>
                      <strong>Love:</strong>An emphasis on love, compassion, and
                      forgiveness as core principles.
                    </li>
                    <li>
                      <strong>Biblical Teaching:</strong>A commitment to
                      teaching and understanding the Bible and its relevance to
                      daily life.
                    </li>
                    <li>
                      <strong>Unity:</strong>Striving for unity among members
                      and with other Christian communities.
                    </li>
                    <li>
                      <strong>Stewardship:</strong>Responsible management of
                      resources and caring for our environment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-schedule-image">
        <video autoPlay muted loop>
          <source src="/images/sunday-service.mp4" type="video/mp4" />
        </video>
        <div className="text-container">
          <h2>Join us in person on:</h2>
          <p>Sunday: 1:00pm to 3:30pm</p>
          <p>Thursday: 5:00pm to 7:00pm</p>
        </div>
      </div>

      <div className="row formAndImage-container">
        <div className="col-lg-6 col-md-6 col-sm-4">
          <img
            src="/images/volunteer.jpg"
            alt="volunteering"
            id="volunteering-image"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-4 mb-1 g-5 form-container">
          <h3>Volunteerism and Membership form</h3>
          <div className="mb-2">
            <label>Select purpose of the form</label>
            <div className="mb-1">
              <input
                className="form-check-input"
                type="checkbox"
                name="purpose"
                value="volunteerism"
                id="volunteerism"
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="volunteerism">
                Volunteerism
              </label>
            </div>
            <div className="">
              <input
                className="form-check-input"
                type="checkbox"
                name="purpose"
                value="membership"
                id="membership"
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="membership">
                Membership
              </label>
            </div>
          </div>
          <div className="">
            <form>
              <label>Full Name:</label>
              <input
                type="text"
                required
                placeholder="full name"
                aria-label="full name"
                name="fullName"
                onChange={handleInputChange}
              />
              <label>Preferred Email:</label>
              <input
                type="text"
                placeholder="email"
                name="email"
                onChange={handleInputChange}
              />
              <label>Phone Number:</label>
              <input
                type="text"
                required
                placeholder="phone number"
                name="phoneNumber"
                onChange={handleInputChange}
              />
              <div>
                <label htmlFor="volunteerismList" className="form-label">
                  Choose Ministry/ies you would like to volunteer in.
                </label>
                <input
                  className="form-control"
                  list="datalistOptions"
                  id="volunteerismList"
                  name="volunteerismArea"
                  placeholder="type to search area of volunteerism"
                  onChange={handleInputChange}
                />
                <datalist id="datalistOptions">
                  <option value="Children and Youth" />
                  <option value="Women empowerment" />
                  <option value="Adults" />
                  <option value="Sunday school tutoring" />
                  <option value="Social Affairs" />
                  <option value="...................." />
                  <option value="other" />
                </datalist>
              </div>
              <button
                className="btn btn-outline submit-button m-2"
                type="submit"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
          {statusMessage && <p>{statusMessage}</p>}
        </div>
        <div className="text-center visit-us">
          <button
            className="btn btn-outline form-btn visitButton"
            onClick={handleVisitButton}
          >
            Visit us
          </button>
        </div>
      </div>
    </>
  );
}
