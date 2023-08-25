import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <nav className="navbar backdrop-opacity-60 backdrop-invert bg-white/30">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="text"
                placeholder="search here"
                aria-label="search"
              />
              <button className="btn btn-outline-success">Search</button>
            </form>
            <button className="btn btn-outline-success">Donate</button>
          </div>
        </nav>
      </div>

      <div>
        <nav className="navbar px-3">
          <section>
            <a href="#">
              <img src="/images/loel-logo.png" alt="logo" className="w-25" />
            </a>
            <a href="#" title="Go to LoLEC Home" className="navbar-brand">
              <h1>Light of Life Evangelical Church</h1>
            </a>
          </section>

          <section>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/videolinks">
                  Sermon
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to=""
                  role="button"
                  aria-expanded="false"
                >
                  Ministries
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/prayer">
                      Prayer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/women">
                      Women's Ministry
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/outreach">
                      Outreach and Evangelism
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/childrenandyouth">
                      Children and Youth
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/youngadults">
                      Young Adults
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/worship">
                      Worship
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/deacons">
                      Deacon's
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fundraising">
                      Fund raising
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </section>
        </nav>
      </div>
    </header>
  );
}
