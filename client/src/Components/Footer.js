import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col align-self-start linkContainer">
            <div>
              <Link to="/" className="eachLink">
                About us
              </Link>
            </div>
            <div>
              <Link to="/sermon" className="eachLink">
                Sermons
              </Link>
            </div>
            <div>
              <Link to="/ministries" className="eachLink">
                Ministries
              </Link>
            </div>
          </div>

          <div className="col align-self-center">
            <div>
              <Link to="/contact" className="eachLink">
                Contact us
              </Link>
            </div>
            <div>
              <Link to="/donate" className="eachLink">
                Donate
              </Link>
            </div>
          </div>
          <div className="col align-self-start">
            <div>
              <a href="#" className="eachLink">
                Resources
              </a>
            </div>
            <div className="eachLink">
              <h4>Address:</h4>

              <h6>
                <FontAwesomeIcon icon={faPhone} /> +651-347-7509
              </h6>
              <h6>
                <FontAwesomeIcon icon={faEnvelope} />
                lightoflifechurch@gmail.com
              </h6>
              <a
                href="https://www.google.com/maps/place/104+Snelling+Ave+S,+St+Paul,+MN+55105/@44.9384158,-93.1690496,17z/data=!3m1!4b1!4m6!3m5!1s0x87f62a17c2fe574d:0x64fe56b109e05f89!8m2!3d44.938412!4d-93.1664747!16s%2Fg%2F11bw3yd4hh?authuser=0&entry=ttu"
                className="addressLink"
              >
                <h6>104 Snelling Ave South,</h6>
                <h6>Saint Paul, MN, 55104</h6>
              </a>
            </div>
          </div>
        </div>
        <div className="row developerMessageDiv">
          <p>Powered with ❤️</p>
        </div>
      </div>
    </div>
  );
}
