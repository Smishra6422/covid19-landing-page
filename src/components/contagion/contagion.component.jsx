import React from "react";
import "./contagion.style.scss";
import WearMask from "../../asset/images/contagion_image1.png";
import HandWash from "../../asset/images/contagion_image2.png";
import NoseRag from "../../asset/images/contagion_image3.png";
import ContagionExtra from "../../asset/images/contagion_extra.png";

const Contagion = () => {
  return (
    <div className="contagion-container">
      <div className="vacant-space">
        <div>
          <img src={ContagionExtra} alt="Virus_image" />
        </div>
      </div>

      <div className="contagion-main-data">
        <div className="contagion-detail-container">
          <div>
            <h4>Covid-19</h4>
          </div>
          <div>
            <h5>Contagion</h5>
          </div>
          <div>
            <p>
              Corona viruses are a type of virus. There are many different
              kinds, and some cause disease. A newly identified type
            </p>
          </div>
        </div>
        <div className="contagion-image-container">
          <div className="contagion-image-item">
            <div className="contagion-image">
              <img src={WearMask} alt="" />
            </div>
            <div className="contagion-detail">
              <div>
                <h5>Air Transmission</h5>
              </div>
              <div>
                <p>
                  Objectively evolve tactical expertise before extensible
                  initiatives. Efficiently simplify
                </p>
              </div>
            </div>
          </div>
          <div className="contagion-image-item">
            <div className="contagion-image">
              <img src={HandWash} alt="" />
            </div>
            <div className="contagion-detail">
              <div>
                <h5>Human Contacts</h5>
              </div>
              <div>
                <p>
                  Washing your hands is one of thesimplest ways you can protect
                </p>
              </div>
            </div>
          </div>
          <div className="contagion-image-item">
            <div className="contagion-image">
              <img src={NoseRag} alt="" />
            </div>
            <div className="contagion-detail">
              <div>
                <h5>Containeted Objects</h5>
              </div>
              <div>
                <p>
                  Use the tissue while sneezing,In this way, you can protect
                  your droplets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vacant-space"></div>
    </div>
  );
};

export default Contagion;
