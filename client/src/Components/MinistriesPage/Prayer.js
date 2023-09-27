import React from "react";
import { Link } from "react-router-dom";
import "./Prayer.css";

export default function Prayer() {
  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
}
