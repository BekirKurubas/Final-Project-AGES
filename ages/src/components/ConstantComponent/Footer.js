import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import {} from "react-icons/fa6";

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
            <ul className="social-icons">
              <li>
                <a className="navbar-brand" href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a className="navbar-brand" href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a className="navbar-brand" href="https://www.twitter.com/">
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
