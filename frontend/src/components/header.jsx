import React from "react";
import logoutIcon from "../assets/logout.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Drone Monitoring</h1>
      <Link className="logout">
        <img src={logoutIcon} alt="" />
        Logout
      </Link>
    </div>
  );
};

export default Header;
