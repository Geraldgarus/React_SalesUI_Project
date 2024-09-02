// src/components/ManagerDashboard.js
import React from 'react';
import './ManagerDashboard.css'; // Import the CSS file for styling

const ManagerDashboard = () => {
  // Example data for the sales boxes
  const salesData = {
    daily: "$1,000",
    weekly: "$7,000",
    monthly: "$30,000",
    yearly: "$360,000"
  };

  return (
    <div className="dashboard-container">
      <div className="sales-box daily-sales">
        <h2>Daily Sales</h2>
        <p>{salesData.daily}</p>
      </div>
      <div className="sales-box weekly-sales">
        <h2>Weekly Sales</h2>
        <p>{salesData.weekly}</p>
      </div>
      <div className="sales-box monthly-sales">
        <h2>Monthly Sales</h2>
        <p>{salesData.monthly}</p>
      </div>
      <div className="sales-box yearly-sales">
        <h2>Yearly Sales</h2>
        <p>{salesData.yearly}</p>
      </div>
    </div>
  );
};

export default ManagerDashboard;
