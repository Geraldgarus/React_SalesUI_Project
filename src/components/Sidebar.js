import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaFileInvoice, FaBox, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css'; // Ensure this file is correctly styled

const Sidebar = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

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
          <Link to="/dashboard">
            <FaTachometerAlt className="sidebar-icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/salesform">
            <FaFileInvoice className="sidebar-icon" /> Sales Form
          </Link>
        </li>
        <li>
          <Link to="/products">
            <FaBox className="sidebar-icon" /> Products
          </Link>
        </li>
        <li>
          <Link to="/messages">
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

export default Sidebar;
