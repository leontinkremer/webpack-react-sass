import React from "react";

import "./_LeontinKremerApp.scss";

const LeontinKremerApp = () => {
  return (
    <div className="app-container">
      <nav className="app-container__nav">
        <a
          className="app-container__nav__link"
          href="https://github.com/leontinkremer?tab=stars"
          target="_blank"
          rel="noopener"
        >
          <span className="app-container__nav__link__span">&lt;</span> Github
          <span className="app-container__nav__link__span"> /&gt;</span>
        </a>
        <a
          className="app-container__nav__link"
          href="https://www.youtube.com/channel/UCe9R2BFrrX19V4kjYIX3r9Q/videos"
          target="_blank"
          rel="noopener"
        >
          <span className="app-container__nav__link__span">&lt;</span> YouTube
          <span className="app-container__nav__link__span"> /&gt;</span>
        </a>
        <a
          className="app-container__nav__link"
          href="https://www.linkedin.com/in/leontinkremer/recent-activity/shares/"
          target="_blank"
          rel="noopener"
        >
          <span className="app-container__nav__link__span">&lt;</span> LinkedIn
          <span className="app-container__nav__link__span"> /&gt;</span>
        </a>
      </nav>
    </div>
  );
};

export default LeontinKremerApp;
