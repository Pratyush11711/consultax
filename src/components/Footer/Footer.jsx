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
            <img src="/logos/svg330.svg" alt="Consultax Logo" />
         
          </div>
          <p>
            Contact & Address: One Park Plaza, Suite 600 · Irvine, CA 92614 · (408) 375-5030 · dan.whitson.wfg@gmail.com
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
          <h4>Legal Links</h4>
          <ul>
            <li>Online Privacy Statement</li>
            <li>Terms of Use</li>
            <li>Complaint Handling – US ONLY</li>
            <li>Do Not Sell My PI</li>
            <li> Text Terms of Service US</li>
         
          </ul>
        </div>

        {/* Middle Column - Company */}
        <div className="footer-links license">
          <h4>Licensing & Disclosures:</h4>
          <ul>
            <li>Dan Whitson – CA License #4424993</li>
            <li>World Financial Group Insurance Agency, LLC (in California, doing business as World Financial Insurance Agency, LLC), World Financial Group Insurance Agency of Hawaii, Inc., World Financial Group Insurance Agency of Massachusetts Inc., and WFG Insurance Agency of Puerto Rico, Inc. (collectively WFGIA), offer insurance products.</li>
            <li>California License #0679300</li>
            <li>WFGIA Headquarters: 6400 C Street SW, Cedar Rapids, IA 52499 · Phone: 770.453.9300</li>
            <li>Disclaimer: Many people have experienced various levels of success with WFGIA. However, everyone’s experience may vary. This statement is not intended as, nor does it represent, that any individual’s results are representative of what all participants achieve when following the WFG system. Neither WFGIA nor its agents may provide tax or legal advice; anyone to whom this material is promoted, marketed, or recommended should consult and rely on their own independent tax and legal professional.</li>
       
          </ul>
        </div>

        {/* Right Column - Subscribe */}
        {/* <div className="footer-subscribe">
          <h4>Subscribe</h4>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <button>SUBSCRIBE</button>
        </div> */}
      </div>

      <div className="footer-bottom">
        <p>© 2024 Transamerica Corporation · 3176703 · June 2024</p>
 
      </div>
    </footer>
  );
}
