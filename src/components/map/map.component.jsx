import React from "react";
import "./map.style.scss";
import MapIMage from "../../asset/images/map1.png";
import Usa from "../../asset/images/usa.png";
import Italy from "../../asset/images/italy.png";
import China from "../../asset/images/china.png";
import Spain from "../../asset/images/spain.png";
import Germany from "../../asset/images/germany.png";
import Iran from "../../asset/images/iran.png";

const Map = () => {
  return (
    <div className="map-container">
      <div className="map-image">
        <img src={MapIMage} alt="Map_Image" />
      </div>
      <div className="map-data">
        <div className="heading">
          <div>
            <span>Live Reports</span>
          </div>
          <div>
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>
        <ul className="country-list">
          <li className="country-list-item">
            <p>
              <span>
                <img src={Usa} alt="Usa" />
              </span>
              <span>Usa</span>
            </p>
            <p>
              <span>102523</span>
              <span>^</span>
            </p>
          </li>
          <li className="country-list-item">
            <p>
              <span>
                <img src={Italy} alt="Italy" />
              </span>
              <span>Italy</span>
            </p>
            <p>
              <span>78525</span>
              <span>^</span>
            </p>
          </li>
          <li className="country-list-item">
            <p>
              <span>
                <img src={China} alt="China" />
              </span>
              <span>China</span>
            </p>
            <p>
              <span>45215</span>
              <span>^</span>
            </p>
          </li>
          <li className="country-list-item">
            <p>
              <span>
                <img src={Spain} alt="Spain" />
              </span>
              <span>Spain</span>
            </p>
            <p>
              <span>65214</span>
              <span>^</span>
            </p>
          </li>
          <li className="country-list-item">
            <p>
              <span>
                <img src={Germany} alt="Germany" />
              </span>
              <span>Germany</span>
            </p>
            <p>
              <span>45265</span>
              <span>^</span>
            </p>
          </li>
          <li className="country-list-item">
            <p>
              <span>
                <img src={Iran} alt="Iran" />
              </span>
              <span>Iran</span>
            </p>
            <p>
              <span>32526</span>
              <span>^</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Map;
