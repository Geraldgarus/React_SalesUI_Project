// src/components/ManagerSidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBox, FaFileInvoice, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css'; // Ensure this file is correctly styled

const ManagerSidebar = () => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    // Perform logout logic here, e.g., clear authentication tokens
    // localStorage.removeItem('authToken'); // Example: Clear token from local storage

    // Redirect to the index page
    navigate('/');
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/Managerdashboard">
            <FaBox className="sidebar-icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/addproducts">
            <FaBox className="sidebar-icon" /> Add Products
          </Link>
        </li>
        <li>
          <Link to="/sales">
            <FaFileInvoice className="sidebar-icon" /> Sales
          </Link>
        </li>
        <li>
          <Link to="/messages1">
            <FaEnvelope className="sidebar-icon" /> Messages
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button">
            <FaSignOutAlt className="sidebar-icon" /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ManagerSidebar;
