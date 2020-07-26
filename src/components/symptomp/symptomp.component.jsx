import React from "react";
import "./symptomp.style.scss";
import SymptompImage from "../../asset/images/symptom.png";

const Symptomp = () => {
  return (
    <div className="symptomp-container">
      <div className="symptomp-detail-container">
        <div>
          <h4>Covid-19</h4>
        </div>
        <div>
          <h5>Symptomp</h5>
        </div>
        <div>
          <p>
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory
          </p>
        </div>
      </div>

      <div className="symptomp-image-container">
        <img src={SymptompImage} alt="Symptomp_Image" />
      </div>
    </div>
  );
};

export default Symptomp;
