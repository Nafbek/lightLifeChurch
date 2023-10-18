import React from "react";
import { Link } from "react-router-dom";
import "./Prayer.css";

export default function Prayer() {
  const photos = [
    "prayer1.jpg",
    "prayer2.jpg",
    "prayer3.jpg",
    "prayer4.jpg",
    "prayer5.jpg",
    "prayer6.jpg",
  ];

  return (
    <>
      <div className="entirePrayer-container">
        <div className="p-5">
          <h3 className="text-white">Prayer Ministry</h3>
        </div>
        <div className="card cardContainer mx-auto">
          <img
            src="https://th.bing.com/th/id/R.c0e92e510fcabe723679969fceebdb48?rik=J6onsAR75%2bTmSw&riu=http%3a%2f%2fnlife.ca%2fsermons%2fGrowth%2fprayer-series%2fsilent-prayer-ohp.jpg&ehk=w1mlZxdCBDviyN%2ffy5HbnXjfvAmpmK8ILnIlz%2fdhP9E%3d&risl=&pid=ImgRaw&r=0"
            className="card-img-top"
            alt="prayer request"
          />
          <div className="card-body text-center">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>
                  "Therefore confess your sins to each other and pray for each
                  other so that you may be healed. The prayer of a righteous
                  person is powerful and effective."
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title">James 5:16 </cite>
              </figcaption>
            </figure>

            <Link to="/contact" className="btn btn-info btn-lg prayer-btn">
              {" "}
              <strong> Prayer Request</strong>
            </Link>
          </div>
        </div>

        <div class="clearfix d-flex text-center justify-content-center">
          <button
            type="button"
            className=" btn btn-warning prayer-time animate__hinge float-start pop-btn"
          >
            24/7 prayer service on teleconference ()
            <p>In person: Every Saturday 8:00pm - 10:00pm</p>
          </button>
        </div>

        <div className="card bg-black text-white text-center">
          <img
            src="/images/prayer-hero.jpg"
            className="card-img prayer-hero"
            alt=""
          />
          <div className="card-img-overlay d-flex justify-content-center align-items-center">
            <h2 className="card-text">Come and pray with us</h2>
          </div>
        </div>
        <div class="bg-success clearfix">
          <button
            type="button"
            className="animate__hinge btn btn-warning float-start pop-btn"
          >
            " Therefore I tell you, whatever you ask in prayer, believe that you
            have received it, and it will be yours".
          </button>
          <button
            type="button"
            className="animate__hinge btn btn-warning float-end pop-btn"
          >
            Mark 11:24 -
          </button>
        </div>
        <div className="prayer-photos d-flex justify-content-center align-items-center flex-wrap">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={`/images/prayerPhotos/${photo}`}
              alt={`photo ${index + 1}`}
              className="each-photo"
            />
          ))}
        </div>
      </div>
    </>
  );
}
