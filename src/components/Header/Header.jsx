// src/components/Header/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <svg
          className="search-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" placeholder="Search" className="search-input" />
        <div className="notification-icon">
          <i className="fa-solid fa-bell"></i>
        </div>
      </div>
      <div className="header-actions">
        <div className="user-actions">
          <div className="user-avatar">
            <img src="src\assets\images\user.jpg" alt="User Avatar" />
          </div>
          <button className="add-btn">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="header-menu">
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
};

export default Header;
