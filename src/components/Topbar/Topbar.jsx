import "./Topbar.css";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Topbar = () => {
  return (
    <div className="top-container">
      <div className="top-sub-container">
      <div className="social-container">
        <div className="icon"><Twitter size={20} /></div>
        <div className="icon"><Facebook size={20} /></div>
        <div className="icon"><Linkedin size={20} /></div>
        <div className="hours">
          <p>Opening Hours: Monday to Saturday - 8am to 9pm</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Topbar;
