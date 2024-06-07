/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            saepe fuga eius fugit quo iure odio repellat quisquam, officia
            voluptatum debitis ab ut placeat, neque quas molestias? Distinctio,
            voluptatum veritatis? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Repellat nesciunt velit assumenda expedita!
            Laborum repellat tempore dolorum sit quibusdam quae commodi! Eos hic
            quod excepturi voluptas aliquid omnis assumenda dicta.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-right">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-center">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8930522231</li>
            <li>Oyeankit@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 C Tamato.com-All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
