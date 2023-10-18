import React from "react";
import "./Pastoral.css";
export default function Pastoral() {
  return (
    <>
      <div className="container">
        <h2>Pastoral</h2>
        <div className="intro-div">
          <p>
            In the realm of pastoral ministry, the mission is to nurture and
            guide a community of believers towards a deeper connection with
            their faith and each other.
            <p>
              Our three-fold approach to pastoral ministry aims to bring about a
              harmonious blend of ministry{" "}
              <strong>
                {" "}
                coordination, compassionate care, and the nurturing of
                discipleship.
              </strong>
            </p>
          </p>
        </div>

        <div
          className="accordion accordion-flush"
          id="accordionPastoralContainer"
        >
          <div className="accordion-item">
            <h3 className="accordion-header" id="mission-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Ministry Coordination and Oversight
              </button>
            </h3>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="mission-headingOne"
              dt-bs-parent="accordingPastoralContainer"
            >
              <div className="accordion-body">
                Ministry Coordination and Oversight underscores the importance
                of efficient organization within the church. Our pastors take on
                the responsibility of ensuring all ministries work seamlessly
                together. This fosters unity and synergy among diverse church
                ministries, guided by the pastors' leadership, and backed by
                consistent progress evaluation.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header" id="mission-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Pastoral Care and Outreach
              </button>
            </h3>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="mission-headingTwo"
              dt-bs-parent="accordingPastoralContainer"
            >
              <div className="accordion-body">
                Pastors provide spiritual support and outreach. Their role
                extends beyond the pulpit, encompassing visitations to homes,
                hospitals, and correction centers. In this mission, pastors
                serve as messengers of hope, sharing the Good News and offering
                unwavering support to those in need.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header" id="mission-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Discipleship and Training
              </button>
            </h3>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="mission-headingThree"
              dt-bs-parent="accordingPastoralContainer"
            >
              <div className="accordion-body">
                Pastors undertake the responsibility of educating newcomers in
                the fundamental tenets of Christian faith and discipleship.
                Regular training sessions empower ministers to be effective in
                their roles, ensuring they are equipped with the knowledge and
                skills necessary to flourish in their ministry endeavors. The
                regular training is carried out the first Saturday of each
                month.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center container main-pastor">
        <img
          src="/images/bible.jpg"
          className="each-pastorsImage main-pastor-image img-fluid "
          alt="main pastor"
        />
        <div className="message-div ">
          <h3>Pastor B.</h3>
          <p className="text-center text-break">
            heeeeeedksldkjlsjkdlsjdlskjdsldkjlskdjlskdfjsaoeiwoeiufsjd;lfasjdlkjf;asldka;sldjf;lasjdk;lasjd;lkja;sldkj;alskdj;lasjd;lfkaoeiwqpoeirpqwierpqwoueopruqpweidr[qwpeir[kpszfjsalkdfj;oaslkdkfj;kldsuoipwedsx,.z,/ald;s
          </p>
        </div>
      </div>

      <div className="container ">
        <div className="row card-container">
          <div className="col-6 imageContainer">
            <img
              src="/images/bible.jpg"
              className="each-pastorsImage  img-fluid float-start "
              alt="pastor"
            />
          </div>
          <div className="col-6 body-div">
            <div>
              <h5 className="card-title ">Pr. Etana Debele (PhD)</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

        <div className="row card-container">
          <div className="col-6 imageContainer">
            <img
              src="/images/bible.jpg"
              className="each-pastorsImage img-fluid float-start"
              alt="pastor"
            />
          </div>
          <div className="col-6 body-div">
            <div>
              <h5 className="card-title ">Pr. #3</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="row card-container">
          <div className="col-6 imageContainer">
            <img
              src="/images/bible.jpg"
              className="each-pastorsImage img-fluid float-start"
              alt="pastor"
            />
          </div>
          <div className="col-6 body-div">
            <div>
              <h5 className="card-title ">Evangelist #1</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
