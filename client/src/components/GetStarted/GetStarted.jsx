import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Explore My Portfolio</span>
          <span className="secondaryText">
            Discover my projects and see how I can contribute to your team.
            <br />
            Click below to view my work.
          </span>
          <button className="button">
            <a
              href="https://prakshaljain.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Portfolio
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
