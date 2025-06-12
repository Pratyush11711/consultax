import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,

} from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logo-white.svg" alt="Consultax Logo" />
         
          </div>
          <p>
            Sorem ipsum dolor sit amet consectetur adipiscing elit dapibus non
            apte magna ad suspendisse nec pulvi.
          </p>
          <a href="#" className="about-link">About us</a>
          <div className="footer-social">
            <a href="#"><Facebook size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
         
            <a href="#"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Middle Column - Services */}
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>Audit & Assurance</li>
            <li>Bonds & Commodities</li>
            <li>Financial Consulting</li>
            <li>Trades & Stocks</li>
            <li>Financial Projections</li>
            <li>Strategic Planning</li>
          </ul>
        </div>

        {/* Middle Column - Company */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right Column - Subscribe */}
        <div className="footer-subscribe">
          <h4>Subscribe</h4>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2019 Financial Consulting Template by ThemeModern</p>
        <div className="footer-bottom-links">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQs</a>
        </div>
      </div>
    </footer>
  );
}
