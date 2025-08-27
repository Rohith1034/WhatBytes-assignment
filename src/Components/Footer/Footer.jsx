import React from "react";
import "./Footer.css";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-container">
        
        <div className="footer-rows">
          <h2>Filters</h2>
          <div className="footer-horizantal-row">
            <a className="links" href="/">All</a>
            <a className="links" href="/">Elearonl</a>
          </div>
        </div>

        
        <div className="footer-rows">
          <h2>About Us</h2>
          <div className="footer-vertical-row">
            <a className="links" href="/">Home</a>
            <a className="links" href="/">About Us</a>
            <a className="links" href="/">Contact</a>
          </div>
        </div>

        
        <div className="footer-rows">
          <h2>Follow Us</h2>
          <div className="footer-horizantal-row social-media-container">
            <Facebook className="social-media-link" color="white" size="40px" />
            <Twitter className="social-media-link" color="white" size="40px" />
            <Instagram className="social-media-link" color="white" size="40px" />
          </div>
        </div>

        
        <div className="footer-rows">
          <h2>Download Our App</h2>
          <div className="download-apps">
            <a className="download-btn"
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="store-badge"
              />
            </a>
            <a className="download-btn"
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="store-badge"
              />
            </a>
          </div>
        </div>
      </div>

      
      <hr className="line-breaker" />
      <p className="copy-rights">© 2024 American</p>
    </div>
  );
};

export default Footer;
