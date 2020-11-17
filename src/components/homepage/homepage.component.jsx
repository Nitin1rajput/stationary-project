import React from "react";

import "./homepage.style.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Stationary</h1>
            <span className="subtitle">Show Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Stationary1</h1>
            <span className="subtitle">Show Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Stationary2</h1>
            <span className="subtitle">Show Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Stationary3</h1>
            <span className="subtitle">Show Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Stationary4</h1>
            <span className="subtitle">Show Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
