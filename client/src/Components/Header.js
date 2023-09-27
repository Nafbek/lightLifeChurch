import React from "react";
import { Link } from "react-router-dom";

import { Dropdown } from "bootstrap";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <div className="first-nav-div">
        <nav className="navbar backdrop-opacity-60 backdrop-invert">
          <div className="logo-div">
            <a href="#">
              <img
                src="/images/loel-logo.png"
                alt="logo"
                className="image-logo"
              />
            </a>
            <a href="/" title="Go to LoLEC Home" className="name-logo">
              <h1>Light of Life Evangelical Church</h1>
            </a>
          </div>

          <ul className="nav nav-pills first-navList">
            <div>
              <ul></ul>
            </div>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sermon">
                Sermon
              </Link>
            </li>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle ministries-dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ministries
              </button>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="ministries/prayer">
                    Prayer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="ministries/pastoral">
                    Pastoral
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="ministries/women">
                    Women's Ministry
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="ministries/outreach">
                    Outreach and Evangelism
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="ministries/childrenandyouth"
                  >
                    Children and Youth
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="ministries/youngadults">
                    Young Adults
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="ministries/worship">
                    Worship
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="ministries/deacons">
                    Deacon's
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="ministries/fundraising">
                    Fund raising
                  </Link>
                </li>
              </ul>
            </div>

            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="second-nav-div">
        <nav className="navbar px-3">
          <div className="container-fluid">
            <form className="d-flex formEl" role="search">
              <input
                className="form-control me-2 custom-search-bar search-bar"
                type="text"
                placeholder="search here"
                aria-label="search"
              />
              <button className="btn btn-outline-info">Search</button>
            </form>
            <button className="btn btn-success">Give</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
