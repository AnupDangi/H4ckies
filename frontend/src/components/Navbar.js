// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h3 className="navbar-title">Medi-Sync</h3>
        <div className="navbar-links">
          <button onClick={() => navigate('/reminder')} className="navbar-link">Reminder</button>
          <button onClick={() => navigate('/history')} className="navbar-link">History</button>
          <button onClick={() => navigate('/drug-interaction')} className="navbar-link">Check Drug Compatibility</button>
          <button onClick={() => navigate('/symptom-checker')} className="navbar-link">Symptoms Checker</button>
        </div>
      </div>
      <div className="navbar-right">
        <FaUserCircle className="user-icon" />
      </div>
    </div>
  );
};

export default Navbar;
