import React from "react";
import "./footer.style.scss";
import Logo from "../../asset/images/Logo.svg";
import Facebook from "../../asset/images/fb.svg";
import Youtube from "../../asset/images/youtube.svg";
import VIcon from "../../asset/images/v.svg";
import Twitter from "../../asset/images/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-data">
        <div className="logo">
          <Link>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="footer-links">
          <ul className="footer-links-list">
            <li className="footer-links-list-item">
              <Link>Overview</Link>
            </li>
            <li className="footer-links-list-item">
              <Link>Symptoms</Link>
            </li>
            <li className="footer-links-list-item">
              <Link>Prevention</Link>
            </li>
            <li className="footer-links-list-item">
              <Link>Treatment</Link>
            </li>
          </ul>
        </div>
        <div className="social-icon">
          <ul className="social-icon-list">
            <li className="social-icon-list-item">
              <Link>
                <img src={Facebook} alt="Facebook" />
              </Link>
            </li>
            <li className="social-icon-list-item">
              <Link>
                <img src={Youtube} alt="Youtube" />
              </Link>
            </li>
            <li className="social-icon-list-item">
              <Link>
                <img src={VIcon} alt="VIcon" />
              </Link>
            </li>
            <li className="social-icon-list-item">
              <Link>
                <img src={Twitter} alt="Twitter" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-cpoyright">
        <p>2020 @ All rights reserved by pixelspark.co</p>
      </div>
    </div>
  );
};

export default Footer;
