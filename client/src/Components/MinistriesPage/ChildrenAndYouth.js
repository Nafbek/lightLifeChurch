import React, { useState } from "react";
import "./ChildrenAndYouth.css";

export default function ChildrenAndYouth() {
  const style = {
    activitiesBgrd: {
      backgroundImage: `url('/images/childYouthPhotos/main-bg.gif')`,
    },
    sundayBgrd: {
      // backgroundColor: `green`,
      backgroundImage: `url('/images/childYouthPhotos/general.jpg')`,
    },
    bibleBgrd: {
      backgroundImage: `url('/images/childYouthPhotos/cartoon-kidReading.jpg')`,
    },
    afanOromoBgrd: {
      backgroundImage: `url('/images/childYouthPhotos/language.jpg')`,
      backgroundImageRepeat: "no-repeat",
    },
    cardSize: {
      width: "35rem",
      backgroundColor: "yellow",
      fontWeight: "bold",
    },
  };

  const [displaypage, setDisplayPage] = useState("");
  const handleSubmit = (page) => {
    setDisplayPage(page);
  };

  const renderPage = () => {
    if (displaypage === "sunday school") {
      return (
        <div className="eachRendered-div" style={style.sundayBgrd}>
          <div className="container d-flex justify-content-center align-items-center flex-wrap pt-2">
            <div class="card bodyCard text-center animate__hinge">
              <img
                src="/images/childYouthPhotos/happy-sunday.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Kids Sunday School is led by qualified and experienced
                  teachers.
                </p>
                <p class="card-text">Please send your your kids to join us!</p>
              </div>
            </div>
          </div>
          <div className="container message-div text-center d-flex justify-content-center align-items-center flex-wrap mt-2 w-50">
            <p>
              Jesus said, “Let the little children come to me, and do not hinder
              them, for the kingdom of heaven belongs to such as these.” Matthew
              19:14
            </p>
          </div>
        </div>
      );
    } else if (displaypage === "bible") {
      return (
        <div className="eachRendered-div" style={style.bibleBgrd}>
          <div className="container d-flex justify-content-center align-items-center flex-wrap pt-2">
            <div
              class="card bodyCard text-center animate__hinge"
              style={style.cardSize}
            >
              <img
                src="/images/childYouthPhotos/childrenReading3.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-black">
                <p class="card-text">
                  We meet every Saturday for bible study and prayer from{" "}
                  <strong>
                    <em>11:00 AM – 12:30 PM</em>
                  </strong>
                  .
                </p>
                <p class="card-text">
                  Please send your your kids and teenagers to join us!
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (displaypage === "afan oromo language") {
      return (
        <div className="eachRendered-div" style={style.afanOromoBgrd}>
          <div className="container d-flex justify-content-center align-items-center flex-wrap pt-2">
            <div
              class="card bodyCard text-center animate__hinge"
              style={style.cardSize}
            >
              <img
                src="/images/childYouthPhotos/childSpeaking.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-black">
                <p class="card-text">
                  Bible and prayer class followed by
                  <strong>
                    <em> Afaan Oromo Language class</em>
                  </strong>
                  .
                </p>
                <p class="card-text">
                  Our Kids take part in all church services once a month!
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div style={style.activitiesBgrd}>
      <div
        id="targetedSlideImage"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src="/images/childYouthPhotos/childrenActing.jpg"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item ">
            <img
              src="/images/childYouthPhotos/childrenChoir.jpg"
              className="d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/childYouthPhotos/childrenReading2.jpg"
              className="d-block w-100 "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#targetedSlideImage"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#targetedSlideImage"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="entire-container">
        <div className="top-container">
          <div className="container top-subContainer">
            <h2 className="top-heading">Children and Youth Ministry</h2>
            <div>
              <p>
                ...............toddlers, preschool, elementary, middleand high
                school
                <ul>
                  <li>sunday school</li>
                  <li>afan oromo language class</li>
                  <li>bible study on saturday</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="row activities-div">
            <div className="col-sm-4">
              <div
                className="card"
                style={{ backgroundColor: "pink", color: "blue" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Sunday School</h5>
                  <p className="card-text">
                    write about the activities on this program
                  </p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleSubmit("sunday school")}
                  >
                    visit the kids' activities
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="card"
                style={{ backgroundColor: "lightgreen", color: "black" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Bible study</h5>
                  <p className="card-text">a bit describtion here ....</p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleSubmit("bible")}
                  >
                    Visualize ...
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div
                className="card"
                style={{ backgroundColor: "purple", color: "white" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Afan Oromo language class</h5>
                  <p className="card-text">
                    write how important it is .........
                  </p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleSubmit("afan oromo language")}
                  >
                    see more in pictures
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="render-container">{renderPage()}</div>
        <div style={style.activitiesBgrd}></div>
      </div>
    </div>
  );
}
