// src/components/ManagerNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import necessary icons
import './ManagerNavbar.css'; // Import the CSS file for styling

const ManagerNavbar = () => {
  return (
    <div className="manager-navbar">
      <div className="navbar-content">
        {/* Add any other elements for the left side of the navbar if needed */}
        <div className="navbar-right">
          <div className="dropdown">
            <button className="dropdown-button">
              <FaUser className="user-icon" />
            </button>
            <div className="dropdown-content">
              <Link to="/manager-dashboard">Dashboard</Link>
              <Link to="/settings">
                <FaCog className="dropdown-icon" /> Settings
              </Link>
              <Link to="/logout">
                <FaSignOutAlt className="dropdown-icon" /> Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerNavbar;
