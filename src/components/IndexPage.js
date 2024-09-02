import React from 'react';
import { Link } from 'react-router-dom';
import './IndexPage.css'; // Import the CSS file

const IndexPage = () => {
  return (
    <div className="index-page">
      <div className="link-container">
        <Link to="/managerdashboard">Manager</Link>
        <Link to="/dashboard">Seller</Link>
      </div>
    </div>
  );
};

export default IndexPage;
