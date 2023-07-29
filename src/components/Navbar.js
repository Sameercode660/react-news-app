import "./Navbar.css";
import React from "react";

export default function Navbar({switchToDark}) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            DailyNews
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/abx">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/abx">
                  Link
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={switchToDark}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Default switch checkbox input
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}