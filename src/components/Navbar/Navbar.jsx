import { useState } from "react";
import { Menu, ChevronDown, Search, ShoppingCart } from "lucide-react";
import Mainheader from "../MainHeader/Mainheader";
import Topbar from "../Topbar/Topbar";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleAccordion = (key) => {
    setActiveAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <Topbar />
      <Mainheader />

      <nav className="navbar">
        <div className="nav-logo">
          <img src="/logo-wfg.svg" alt="Logo" />
        </div>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          <Menu size={24} />
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
          {/* Home */}
          <li className="has-dropdown">
            <div onClick={() => toggleAccordion("home")} className="accordion-header">
              <a href="#">Home <ChevronDown size={16} /></a>
            </div>
            {activeAccordion === "home" && (
              <ul className="dropdown show">
                <li><a href="/home1">Home1</a></li>
                <li><a href="/home2">Home2</a></li>
              </ul>
            )}
          </li>

          {/* Pages */}
          <li className="has-dropdown">
            <div onClick={() => toggleAccordion("pages")} className="accordion-header">
              <a href="#">Pages <ChevronDown size={16} /></a>
            </div>
            {activeAccordion === "pages" && (
              <ul className="dropdown show">
                <li><a href="/about">About Us</a></li>
                <li><a href="/team">Our Team</a></li>
                <li><a href="/works">How it work</a></li>
                <li><a href="/test">Testimonials</a></li>
                <li><a href="/icon">Icon Box</a></li>
                <li><a href="/serviceBox">Services Box</a></li>
                <li><a href="/career">Career</a></li>
              </ul>
            )}
          </li>

          {/* Services */}
          <li className="has-dropdown">
            <div onClick={() => toggleAccordion("services")} className="accordion-header">
              <a href="#">Services <ChevronDown size={16} /></a>
            </div>
            {activeAccordion === "services" && (
              <ul className="dropdown show">
                <li><a href="/finance">Financial Consulting</a></li>
                <li><a href="/busines">International Business</a></li>
                <li><a href="/audit">Audit and Insurance</a></li>
                <li><a href="/tax">Taxes and Efficiency</a></li>
                <li><a href="/bonds">Bonds and Commodities</a></li>
              </ul>
            )}
          </li>

          {/* Case Study */}
          <li className="has-dropdown">
            <div onClick={() => toggleAccordion("cases")} className="accordion-header">
              <a href="#">Case Study <ChevronDown size={16} /></a>
            </div>
            {activeAccordion === "cases" && (
              <ul className="dropdown show">
                <li><a href="/caseA">Case Study 1</a></li>
                <li><a href="/caseB">Case Study 2</a></li>
                <li><a href="/caseDetails">Case Details</a></li>
              </ul>
            )}
          </li>

          {/* Blog */}
          <li className="has-dropdown">
            <div onClick={() => toggleAccordion("blog")} className="accordion-header">
              <a href="#">Blog <ChevronDown size={16} /></a>
            </div>
            {activeAccordion === "blog" && (
              <ul className="dropdown show">
                <li><a href="/blogList">Blog List</a></li>
                <li><a href="/blogDetails">Blog Details</a></li>
              </ul>
            )}
          </li>

          {/* Contact */}
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <div className="navbar-icons">
          <div className="search-toggle" onClick={() => setOpenSearch(!openSearch)}>
            {openSearch ? <span className="close-icon">✖</span> : <Search />}
          </div>
          {openSearch && (
            <div className="search-input-wrapper">
              <input type="text" placeholder="Enter keyword..." />
            </div>
          )}
          <div className="cart-icon">
            <ShoppingCart />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;