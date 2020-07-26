import React from "react";
import "./overview.style.scss";
import OverviewImage from "../../asset/images/overview.png";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="vacant-space"></div>
      <div className="overview-detail-container">
        <div>
          <h4>COVID-19 Alert</h4>
        </div>
        <div>
          <h5>Stay at Home quarantine To stop Corona virus</h5>
        </div>
        <div>
          <p>
            There is no specific medicine to Prevevnt or Treat coronavirus
            Disease ( Covid-19 ) Peopple May Need Supportive Care To
          </p>
        </div>
        <button>Let Us Help</button>
      </div>

      <div className="overview-image">
        <img src={OverviewImage} alt="Overview_image" />
      </div>
    </div>
  );
};

export default Overview;
