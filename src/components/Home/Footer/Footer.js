import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Unmoy.css";
import footerImage from "../../../images/FooterImages/footer1.png";
const Footer = () => {
  return (
    <footer className="footer_wrapper">
      <div className="option_wrapper"></div>
      <div className="footer_section">
        <div className="company_header">
          <h1>
            <span className="c_logo">Sixty</span>
            <br />
            <span className="c_logo_2">ninth street</span>
          </h1>
          <p>
            Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
            tristique id vitae massa. Proin vulputate cong ue rutrum. Fusce
            lobortis a enim eget tempus.
          </p>
        </div>
        <div className="footer_column">
          <h2>Company</h2>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Clients</li>
            <li>Testimonials</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer_column">
          <h2>For Renters</h2>
          <ul>
            <li>About Us</li>
            <li>Guidelines</li>
            <li>Apartments</li>
            <li>Flats</li>
            <li>Houses</li>
          </ul>
        </div>
        <div className="footer_column">
          <h2>For Sellers</h2>
          <ul>
            <li>Sell with us</li>
            <li>What do you need</li>
            <li>Clients</li>
            <li>Testimonials</li>
            <li>Guidelines</li>
          </ul>
        </div>
        <div className="footer_column">
          <h2>For Buyers</h2>
          <ul>
            <li>Buy with us</li>
            <li>Papers</li>
            <li>Clients</li>
            <li>Testimonials</li>
            <li>Homes</li>
          </ul>
        </div>
      </div>
      <div className="copyright_section">
        <p>
          Copyright {new Date().getFullYear()} All Rights Reserved | this
          project is made with <FontAwesomeIcon icon={faHeart} /> by team-IT
        </p>
        <img src={footerImage} alt="footerImage" />
      </div>
    </footer>
  );
};

export default Footer;
