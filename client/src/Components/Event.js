import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Event.css";
import "animate.css";

export default function Event() {
  const regularPrograms = [
    {
      title: "Worship",
      daysOfWeek: ["0"],
      startTime: "10:00:00",
      color: "green",
    },
    {
      title: "Bible Study",
      startTime: "18:00:00",
      daysOfWeek: ["2"],
      color: "green",
    },
    {
      title: "Healing",
      daysOfWeek: ["4"],
      startTime: "16:00:00",
      color: "green",
    },
  ];

  return (
    <>
      <div className="row EventMain-container">
        <div>
          <h2 className="event-header">Events</h2>
        </div>

        <div className="header-div col-6">
          <h3>
            WE are proud to organize the following events for the kingdom of
            God. Please join us in expanding our territory and impacts in Jesus
            name
          </h3>
        </div>
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
        <div className="header-div col-6">
          <h3>
            WE are proud to organize the following events for the kingdom of
            God. Please join us in expanding our territory and impacts in Jesus
            name
          </h3>
        </div>
        <div className="header-div col-6">
          <h3>
            WE are proud to organize the following events for the kingdom of
            God. Please join us in expanding our territory and impacts in Jesus
            name
          </h3>
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
          <h5 className="animate__heartBeat">Check our church calendar</h5>
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
            events={regularPrograms}
          />
        </div>
      </div>
      <div class="bg-success clearfix">
        <button
          type="button"
          className="animate__hinge btn btn-warning float-start pop-btn"
        >
          O magnify the Lord with me, And let us exalt His name together.
        </button>
        <button
          type="button"
          className="animate__hinge btn btn-warning float-end pop-btn"
        >
          Psalm 34:3
        </button>
      </div>
    </>
  );
}
