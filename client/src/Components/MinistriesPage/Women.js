import React from "react";

const style = {
  padding: {
    padding: "1rem",
  },
};
export default function Women() {
  return (
    <>
      <div className="container" style={style.padding}>
        <h1>Women</h1>
        <div>
          <p>
            The Women’s Ministry Team is the backbone for the services of the
            congregation.  Reach out and organizes all women in the
            congregation for time of prayer, teaching and fellowship.  Work
            with Pastoral office to visit and encourage women members of the
            congregation in a time of need and crisis.  Shall plan and have
            annual women workshops, seminars and discussion on relevant topics
            related to family, child rearing and annual retreat.  Together with
            deacons/deaconesses serve coffee and tea on Sundays.  In
            collaboration with council of elders takes care of receptions or
            meal services during conferences and similar services.  Shall have
            regular meetings and prayer days or times as a team.
          </p>
        </div>
      </div>
      <div
        id="carouselExampleFade"
        class="carousel slide slide-div carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/images/prayerPhotos/prayer1.jpg"
              class="d-block w-100 each-photo"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/images/prayerPhotos/prayer2.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/images/prayerPhotos/prayer3.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
