import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; // Import the Navbar component
import SalesForm from './components/SalesForm';
import Products from './components/Products';
import Messages from './components/Messages';
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import IndexPage from './components/IndexPage'; // Import the new IndexPage component
import ManagerSidebar from './components/ManagerSidebar';
import Sales from './components/Sales';
import Messages1 from './components/Messages1';
import Addproducts from './components/Addproducts';
import ManagerDashboard from './components/Managerdashboard';
import ManagerNavbar from './components/ManagerNavbar';

const App = () => (
  <Router>
    <Routes>
      {/* Route for the Index Page without Sidebar and Navbar */}
      <Route path="/" element={<IndexPage />} />

      {/* Route for other pages with Sidebar and Navbar */}
      <Route
        path="/dashboard"
        element={
          <div>
            <Navbar /> {/* Place Navbar at the top */}
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}> {/* Adjust based on Sidebar width */}
                <Dashboard />
              </div>
            </div>
          </div>
        }
      />


      <Route
        path="/salesform"
        element={
          <div>
            <Navbar /> {/* Place Navbar at the top */}
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}> {/* Adjust based on Sidebar width */}
                <SalesForm />
              </div>
            </div>
          </div>
        }
      />
      <Route
        path="/products"
        element={
          <div>
            <Navbar /> {/* Place Navbar at the top */}
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}> {/* Adjust based on Sidebar width */}
                <Products />
              </div>
            </div>
          </div>
        }
      />
            
<Route
        path="/messages"
        element={
          <div>
            <Navbar /> {/* Place Navbar at the top */}
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}> {/* Adjust based on Sidebar width */}
                <Messages />
              </div>
            </div>
          </div>
        }
      />
      
      <Route
        path="/managerdashboard"
        element={
          <div>
            <ManagerNavbar /> {/* Use ManagerNavbar */}
            <div style={{ display: 'flex' }}>
              <ManagerSidebar />
              <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
                <ManagerDashboard />
              </div>
            </div>
          </div>
        }
      />

      <Route
        path="/sales"
        element={
          <div>
            <ManagerNavbar /> {/* Use ManagerNavbar */}
            <div style={{ display: 'flex' }}>
              <ManagerSidebar />
              <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
                <Sales />
              </div>
            </div>
          </div>
        }
      />

      <Route
        path="/addproducts"
        element={
          <div>
            <ManagerNavbar /> {/* Use ManagerNavbar */}
            <div style={{ display: 'flex' }}>
              <ManagerSidebar />
              <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
                <Addproducts />
              </div>
            </div>
          </div>
        }
      />

      <Route
        path="/messages1"
        element={
          <div>
            <ManagerNavbar /> {/* Use ManagerNavbar */}
            <div style={{ display: 'flex' }}>
              <ManagerSidebar />
              <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
                <Messages1 />
              </div>
            </div>
          </div>
        }
      />
    </Routes>
  </Router>
);

export default App;
