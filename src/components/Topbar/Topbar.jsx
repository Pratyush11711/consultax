import "./Topbar.css";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Topbar = () => {
  return (
    <div className="top-container">
      <div className="top-sub-container">
      <div className="social-container">
        <div className="icon"><Twitter size={20} /></div>
        <div className="icon"><Facebook size={20} /></div>
        <div className="icon"><Linkedin size={20} /></div>
        <div className="icon"><Instagram size={20} /></div>
        <div className="icon"><Youtube size={20} /></div>


        <div className="hours">
          <p>Office Hours: Monday to Friday: 9 AM to 5 PM · Saturday to Sunday: Closed</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Topbar;
