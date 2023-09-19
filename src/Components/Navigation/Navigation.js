import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="index.html">
          <img className="Logo" src="images/Logo.jpg" alt="Logo" />
        </a>
      </div>
      <div className="nav-links">
        <Link to="calendar-section" smooth={true} duration={500}>Calendar</Link>
        <Link to="news-section" smooth={true} duration={500}>News</Link>
        <Link to="membership-section" smooth={true} duration={500}>Membership</Link>
        <Link to="about-section" smooth={true} duration={500}>About the Club</Link>
      </div>
      <div className="nav-search">
        <input type="text" id="searchInput" placeholder="Search..." />
        <button id="searchButton">Search</button>
      </div>
      <div className="login">
        <a href="Login">Member Login</a>
      </div>
    </nav>
  );
}

export default Navigation;

