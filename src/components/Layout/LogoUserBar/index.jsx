import React from "react";

import mainLogo from "../../../assets/images/main-logo.svg";
import "./LogoUserBar.css";

const LogoUserBar = () => {
  return (
    <div className="logoUser-bar-container">
      <img src={mainLogo} alt="main logo" />
      <div className="user-dropdown">
        User Menu
      </div>
    </div>
  );
};

export default LogoUserBar;
