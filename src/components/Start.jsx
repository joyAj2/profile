import React from "react";
import Header from "./common/Header";
import { Link, Element } from "react-scroll";
import Work from "./Work";
import Line from "./line";
import Portfolio from "./Portfolio";

function Start() {
  return (
    <div className="start-page-background">
      <Header />
      <div className="start-page-background">
        <div className="start-page-content">
          <Line />
          <div>
            <h1>Hi, my name is Joy EJEH Ave</h1>
            <h2>I design and develop websites</h2>
            <h3>Come see some of my projects!</h3>
            <Link
              to="work"
              smooth={true}
              duration={1}
              className="go-to-work-link"
            >
              Go to Work...
            </Link>
          </div>
        </div>
      </div>
      <Element name="work" className="work-element">
        <Work />
      </Element>
      <Element name="portfolio" className="portfolio-element">
        <Portfolio />
      </Element>
    </div>
  );
}
export default Start;
