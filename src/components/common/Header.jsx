import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <RouterLink
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            style={{ color: "white" }}
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4" style={{ color: "white" }}>
              <img
                src="/assets/cover copy 2.png"
                alt="Logo"
                style={{ width: "100px", height: "100", borderRadius: "3px" }}
              />
              <span style={{ marginLeft: "10px" }}>Joy EJEH Ave</span>
            </span>
          </RouterLink>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <RouterLink
                to="/"
                className="nav-link active"
                aria-current="page"
              >
                <span style={{ color: "rgb(0, 0, 0)" }}>Start /&gt;</span>
              </RouterLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="work"
                smooth={true}
                duration={1}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                <span style={{ color: "white" }}>Work/&gt;</span>
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="portfolio"
                smooth={true}
                duration={1}
                className="nav-link"
                style={{ cursor: "pointer", color: "white" }}
              >
                Portfolio/&gt;
              </ScrollLink>
            </li>
            <li className="nav-item">
              <RouterLink to="/faqs" className="nav-link">
                <span style={{ color: "white" }}>About /&gt;</span>
              </RouterLink>
            </li>
            <li className="nav-item">
              <RouterLink to="/about" className="nav-link">
                <span style={{ color: "white" }}>Contact /&gt;</span>
              </RouterLink>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header;
