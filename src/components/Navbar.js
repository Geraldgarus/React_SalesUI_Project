// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; // Importing the user icon from react-icons
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        {/* Add any other elements for the left side of the navbar if needed */}
        <div className="navbar-right">
          <div className="dropdown">
            <button className="dropdown-button">
              <FaUser className="user-icon" />
            </button>
            <div className="dropdown-content">
              <Link to="/profile">My Profile</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
