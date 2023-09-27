import React from "react";
import "./SlideImage.css";

const style = {
  imageSize: {
    height: "25rem",
    // marginLeft: "7rem",
  },
  imageContainer: {
    display: "flex",
  },
};
export default function SlideImage() {
  return (
    <div
      id="targetedSlideImage"
      data-bs-slide="prev"
      className="carousel slide w-100"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#targetedSlideImage"
          data-bs-slide="prev"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#targetedSlideImage"
          data-bs-slide="prev"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#targetedSlideImage"
          data-bs-slide="prev"
          data-bs-slide-to="2"
          className="active"
          aria-current="true"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" style={style.imageContainer}>
          <img
            src="https://files.logoscdn.com/v1/files/24936544/content.png?download=true&signature=U10GdfFXE5vRpxxUdyd2K8Tiab8"
            alt="slides"
            className="d-block w-100"
            style={style.imageSize}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>
              "When Jesus spoke again to the people, he said, 'I am the light of
              the world. Whoever follows me will never walk in darkness, but
              will have the light of life.'"
            </h5>
            <p>John 8:12</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ytimg.com/vi/b22JUSAq1Wg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgSSg0MA8=&rs=AOn4CLBACcFJiw6ilkFfpv2IS7J4jqobvQ"
            alt="slides"
            className="d-block mx-auto"
            style={{ ...style.imageSize, margin: "auto" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second Slide Heading</h5>
            <p>Short slide image description.......................</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="
            https://static.wixstatic.com/media/920af8_94ed9916b1d04cccaad0fd4d29787e18~mv2.jpg/v1/fill/w_960,h_642,al_c,q_85/920af8_94ed9916b1d04cccaad0fd4d29787e18~mv2.jpg"
            alt="slides"
            className="d-block mx-auto"
            style={{ ...style.imageSize, margin: "auto" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Slide Heading</h5>
            <p>Short slide image description.......................</p>
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
    </div>
  );
}
