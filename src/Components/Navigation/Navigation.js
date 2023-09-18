import React from 'react';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="index.html">
          <img className="Logo" src="images/Logo.jpg" alt="Logo" />
        </a>
      </div>
      <div className="nav-links">
        <a href="#calendar-section">Calendar</a>
        <a href="#news-section">News</a>
        <a href="#membership-section">Membership</a>
        <a href="#about-section">About the Club</a>
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
