import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
        <Link to="/">
          <img src="./logo2.png" alt="" width={120} />
          </Link>
          <span className="secondaryText">
            Our vision is to provide everyone <br />with the best place to live,
            tailored to their needs.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Address</span>
          <span className="secondaryText">Ontario, Canada</span>
          {/* <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div> */}
        </div>
      </div>

      {/* Footer copyright */}
      <div className="f-copyright">
        <span className="secondaryText">
          © {new Date().getFullYear()} Homzy. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
