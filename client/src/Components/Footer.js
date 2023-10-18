import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const style = {
  addressStyle: {
    margin: 0,
    fontSize: "1rem",
  },
  centerStyle: {
    color: "yellow",
  },
  footerBgrd: {
    backgroundImage: 'url("/images/footer-background.jpg")',
  },
};
export default function Footer() {
  return (
    <div className="footer-container" style={style.footerBgrd}>
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
              <Link to="/event" className="eachLink">
                Event
              </Link>
            </div>

            <div>
              <a href="#" className="eachLink">
                Resources
              </a>
            </div>
          </div>

          <div className="col align-self-center">
            <div>
              <Link
                to="/contact"
                className="eachLink"
                style={style.centerStyle}
              >
                Contact us
              </Link>
            </div>
            <div>
              <Link to="/donate" className="eachLink" style={style.centerStyle}>
                Give
              </Link>
            </div>
          </div>
          <div className="col align-self-start">
            <div className="eachLink">
              <h4>Address:</h4>
              <div>
                <h6>
                  <FontAwesomeIcon icon={faPhone} />
                </h6>
                <p style={style.addressStyle}>+651-347-7509</p>
                <p style={style.addressStyle}>+651-434-7312</p>
                <FontAwesomeIcon icon={faEnvelope} />
                <p style={style.addressStyle}>lolec2022@gmail.com</p>
              </div>
              <div>
                <a href="https://www.facebook.com/LOLEC2022/" target="block">
                  <img src="/images/facebook_icon.png" className="icons" />
                </a>
                <a href="https://www.youtube.com/@lightoflifeevangelicalchur1098">
                  <img src="/images/youtube_icon.png" className="icons" />
                </a>
              </div>

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
      </div>
      <div className="developerMessageContainer">
        <div className="developerMessageDiv">Powered with ❤️</div>
        <div> &copy; 2023 LOLEC </div>
      </div>
    </div>
  );
}
