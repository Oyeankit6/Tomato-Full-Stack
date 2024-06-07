// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Nabar.css";
import { assets } from "../../assets/assets.js";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <img src={assets.profile_image} className="profile" alt="" />
    </div>
  );
};

export default Navbar;
