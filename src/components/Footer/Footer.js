import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="App">
      <div className="Footer">
        <h1>WellNav</h1>
        <div className="Footer-Section">
          <div className="Footer-left">
            <h1>About Wellnav</h1>
            <p>
              <Link to="/AboutUs">About</Link>
            </p>
            <p>Karir</p>
            <p>Kebijakan</p>
          </div>
          <div className="Footer-Right">
            <h1>Bantuan</h1>
            <p>
              <Link to="/FAQ">FAQ</Link>
            </p>
            <p>Kontak</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
