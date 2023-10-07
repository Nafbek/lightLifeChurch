import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Event.css";

export default function Event() {
  return (
    <>
      <div className="row EventMain-container">
        <div className="col-6 m-1 card each-card">
          <img className="card-img-top" src="/images/bible.jpg" alt="" />
          <div className="card-body">
            <p className="card-text">Some text here 111111............</p>
          </div>
        </div>
        <div className="col-6 m-1 card each-card">
          <img className="card-img-top" src="/images/bible.jpg" alt="" />
          <div className="card-body">
            <p className="card-text">Some text here 22222............</p>
          </div>
        </div>

        <div className="col-6 m-1 card each-card">
          <img className="card-img-top" src="/images/bible.jpg" alt="" />
          <div className="card-body">
            <p className="card-text">Some text here 4444............</p>
          </div>
        </div>
        <div className="col-6 m-1 card each-card">
          <img className="card-img-top" src="/images/bible.jpg" alt="" />
          <div className="card-body">
            <p className="card-text">Some text here 5555............</p>
          </div>
        </div>
        <div className="col-6 m-1 card each-card">
          <img className="card-img-top" src="/images/bible.jpg" alt="" />
          <div className="card-body">
            <p className="card-text">Some text here 5555............</p>
          </div>
        </div>
        <div className="col-6 m-1 card each-card">
          <img className="card-img-top" src="/images/bible.jpg" alt="" />
          <div className="card-body">
            <p className="card-text">Some text here 66666............</p>
          </div>
        </div>
      </div>
      <div className="calendarStarter-btn">
        <button
          className="btn btn-primary calendarButton"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Check our church calendar
        </button>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Our Program</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              {
                title: "Church Service",
                start: "2023-10-15T10:00:00",
                end: "2023-10-15T12:00:00",
              },
              {
                title: "Bible Study",
                start: "2023-10-15T10:00:00",
                end: "2023-10-15T12:00:00",
              },
            ]}
          />
        </div>
      </div>
      <div class="bg-success clearfix">
        <button type="button" className="btn btn-warning float-start pop-btn">
          O magnify the Lord with me, And let us exalt His name together.
        </button>
        <button type="button" className="btn btn-warning float-end pop-btn">
          Psalm 34:3
        </button>
      </div>
    </>
  );
}
