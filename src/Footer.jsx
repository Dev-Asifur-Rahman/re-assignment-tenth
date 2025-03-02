import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-main-div">
      <div className="footer-top">
        <p>CHILL GAMER</p>
      </div>

      <div className="footer-social-icons">
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-menu-one">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Checkout</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="footer-menu-two">
        <ul>
          <li>
            <a href="#">Bag</a>
          </li>
          <li>
            <a href="#">Shoes</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Watch</a>
          </li>
        </ul>
      </div>

      <div className="footer-menu-three">
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Affiliate Program</a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; <a href="#">CHILL GAMER</a> - 2025
        </p>
      </div>
    </div>
  );
};

export default Footer;
