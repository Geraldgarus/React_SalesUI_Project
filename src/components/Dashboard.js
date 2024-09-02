import React from 'react';
import { FaBox, FaChartLine, FaEnvelope, FaCalendarWeek } from 'react-icons/fa'; // Import icons
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => (
  <div className="dashboard">
    <div className="box products">
      <FaBox className="dashboard-icon" />
      <h3>Products</h3>
      <p>View and manage your products here.</p>
    </div>
    <div className="box daily-sales">
      <FaChartLine className="dashboard-icon" />
      <h3>Daily Sales</h3>
      <p>Track and analyze daily sales data.</p>
    </div>
    <div className="box messages">
      <FaEnvelope className="dashboard-icon" />
      <h3>Messages</h3>
      <p>Check your recent messages and notifications.</p>
    </div>
    <div className="box weekly-sales">
      <FaCalendarWeek className="dashboard-icon" />
      <h3>Weekly Sales</h3>
      <p>Review the sales data for the week.</p>
    </div>
  </div>
);

export default Dashboard;
