import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { FiMenu, FiX } from "react-icons/fi";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
      </nav>
      
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/profile" onClick={() => setMenuOpen(false)}> User Profile</Link></li>
          <li><Link to="/posture-analysis" onClick={() => setMenuOpen(false)}> Posture Analysis</Link></li>
          <li><Link to="/reports" onClick={() => setMenuOpen(false)}> Reports</Link></li>
          <li><Link to="/recommendations" onClick={() => setMenuOpen(false)}> Personalized Recommendations</Link></li>
          <li><Link to="/exit" onClick={() => setMenuOpen(false)}> Exit</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;