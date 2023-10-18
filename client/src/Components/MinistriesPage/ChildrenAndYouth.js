import React, { useState } from "react";
import "./ChildrenAndYouth.css";

export default function ChildrenAndYouth() {
  const style = {
    activitiesBgrd: {
      backgroundImage: `url('/images/childYouthPhotos/general.jpg')`,
    },
    sundayBgrd: {
      backgroundColor: `green`,
    },
    bibleBgrd: {
      backgroundImage: `url('/images/childYouthPhotos/cartoon-kidReading.jpg')`,
    },
    afanOromoBgrd: {
      backgroundImage: `url('/images/iamchildofGod.jpg')`,
    },
  };

  const [displaypage, setDisplayPage] = useState("");
  const handleSubmit = (page) => {
    setDisplayPage(page);
  };

  const renderPage = () => {
    if (displaypage === "sunday school") {
      return (
        <div style={style.sundayBgrd}>
          display here the sunday school program
        </div>
      );
    } else if (displaypage === "bible") {
      return (
        <div className="entire-container" style={style.afanOromoBgrd}>
          display bible here......
        </div>
      );
    } else if (displaypage === "afan oromo language") {
      return <div style={style.bibleBgrd}>Afan oromo here.......</div>;
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="entire-container" style={style.activitiesBgrd}>
        <h2>Children and Youth Ministry</h2>
        <div>
          <p>
            toddlers, preschool, elementary, middleand high school
            <ul>
              <li>sunday school</li>
              <li>afan oromo language class</li>
              <li>bible study on saturday</li>
            </ul>
          </p>
        </div>

        <div className="row activities-div">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sunday School</h5>
                <p className="card-text">
                  write about the activities on this program
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleSubmit("sunday school")}
                >
                  visit the kids' activities
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bible study</h5>
                <p className="card-text">a bit describtion here ....</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleSubmit("bible")}
                >
                  Visualize ...
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Afan Oromo language class</h5>
                <p className="card-text">write how important it is .........</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleSubmit("afan oromo language")}
                >
                  see more in pictures
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-25">{renderPage()}</div>
      </div>
    </>
  );
}
