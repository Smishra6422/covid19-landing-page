import React from "react";
import "./about.style.scss";
import AboutImage from "../../asset/images/about.png";
import AboutGroupImage from "../../asset/images/about_group.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="vacant-sapce"></div>
      <div className="about-image-container">
        <img src={AboutImage} alt="About_Image" />
      </div>
      <div className="about-detail-container">
        <div>
          <h4>What Is Covid-19</h4>
        </div>
        <div>
          <h5>Coronavirus</h5>
        </div>
        <div>
          <p>
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory illness now called COVID-19.Lauren Sauer,
            M.S., the director of operations with the Johns Hopkins Office of
            Critical Event Preparedness and Response
          </p>
        </div>
        <button className="about-page-button">Let Us Help</button>
      </div>
      <div className="vacant-sapce">
        <img src={AboutGroupImage} alt="About_Group_Image" />
      </div>
    </div>
  );
};

export default About;
