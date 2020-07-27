import React, { useState } from "react";
import "./navbar.style.scss";
import { Link } from "react-router-dom";
import Logo from "../../asset/images/Logo.svg";
import Menu from "../../asset/images/menu.svg";

const Navbar = () => {
  const [flag, setFlag] = useState(false);

  const displayNavbar = () => {
    setFlag(!flag);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link>
          <img src={Logo} className="App-logo" alt="logo" />
        </Link>
        <Link>
          <img src={Menu} alt="Menu_Icon" onClick={displayNavbar} />
        </Link>
      </div>
      <div className={flag ? "navbar-lnks" : "hide-navbar-links"}>
        <ul className="navbar-item">
          <li className="navbar-item-list">
            <Link>Overview</Link>
          </li>
          <li className="navbar-item-list">
            <Link>Contagion</Link>
          </li>
          <li className="navbar-item-list">
            <Link>Symptoms</Link>
          </li>
          <li className="navbar-item-list">
            <Link>Precaution</Link>
          </li>
          <li className="navbar-item-list">
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
