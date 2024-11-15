import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login'); // Redirect to Login Page
  };

  return (
    <div className="welcome-page">
      <h1>MEDI-SYNC</h1>
      <p>An AI-powered drug interaction checker application.</p>
      <button onClick={handleGetStartedClick} className="get-started-button">Get Started</button>
      <footer>Contact for more details - 984798393</footer>
    </div>
  );
};

export default WelcomePage;