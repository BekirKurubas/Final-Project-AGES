import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "../../App.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>Short description about the company or project.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <p>Stay connected with us on social media.</p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="icon"
                  style={{ color: "white", marginRight: "10px" }}
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  className="icon"
                  style={{ color: "white", marginRight: "10px" }}
                />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="icon" style={{ color: "white" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
