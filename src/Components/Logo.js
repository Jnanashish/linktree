import React from "react";
import logo from "../../src/logo.png";
import "../main.css";

function Logo() {
  return (
    <div>
      <img className="logo" src={logo} alt="ProfilePhoto" />
    </div>
  );
}

export default Logo;
