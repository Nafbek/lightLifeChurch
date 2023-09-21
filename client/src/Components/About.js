import React from "react";
import "./About.css";

const style = {
  elementWidth: {
    marginBottom: 0,
    padding: "1rem",
  },
  aboutBox: {
    width: "70%",
  },
};
export default function About() {
  return (
    <div className="container" style={style.elementWidth}>
      <div>
        <h2>About us</h2>
      </div>
      <div style={style.aboutBox}>
        <p className="aboutBox">
          This church is .............
          <strong> write short story here.......</strong> ................. This
          Congregation believes, teaches, and confesses Jesus Christ as Lord and
          Savior, through whom everything was made, and through whose life,
          death, and resurrection God fashions a new creation and believes that
          salvation is by grace through faith alone. This Congregation believes,
          teaches, and confesses Jesus Christ as Lord and Savior, through whom
          everything was made, and through whose life, death, and resurrection
          God fashions a new creation and believes that salvation is by grace
          through faith alone.{" "}
        </p>
      </div>

      <div>
        <p className="d-inline-flex gap-1 collapse-heading">
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#multiCollapseVision"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseVision"
          >
            Vision and Mission
          </a>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseFaith"
            aria-expanded="false"
            aria-controls="multiCollapseFaith"
          >
            Statement of Faith
          </button>

          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseValues"
            aria-expanded="false"
            aria-controls="multiCollapseValues"
          >
            Values
          </button>
          <button
            className="btn btn-outline-primary"
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
              <div className="card card-body">
                <h3>Vision</h3>
                <p>the vision of .........................</p>

                <h3>Mission</h3>
                <p>
                  This Church is dedicated to fulfilling the Great Commission of
                  Our Lord Jesus Christ, as recorded in the Gospel of{" "}
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
              <div className="card card-body">
                <h3>Statement of Faith</h3>
                <p>
                  This church is a community of faith. We firmly believe, teach,
                  and confess Jesus Christ as Lord and Savior, acknowledging
                  that through Him, all things were created. Through His life,
                  death, and resurrection, God ushers in a new creation. We hold
                  the conviction that salvation is solely by grace through
                  faith.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseValues">
              <div className="card card-body">
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
                    <strong>Biblical Teaching:</strong>A commitment to teaching
                    and understanding the Bible and its relevance to daily life.
                  </li>
                  <li>
                    <strong>Unity:</strong>Striving for unity among members and
                    with other Christian communities.
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
      <div>
        <h4>Program Schedule</h4>
        <div>
          <h5>Sunday</h5>
          <ul>
            <li>
              12:30 - 3:00pm <span>write here............</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
