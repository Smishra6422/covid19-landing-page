import React from "react";
import "./header.style.scss";
import Navbar from "../navbar/navbar.component";
import Overview from "../overview/overview.component";
const Header = () => {
  return (
    <div className="header-container">
      <Navbar />
      <Overview />
    </div>
  );
};

export default Header;
