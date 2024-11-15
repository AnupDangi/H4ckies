import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <header className="header">WELCOME TO MEDI-SYNC!</header>
      <p className="subtext">Login if you have an account or sign up to create a new profile.</p>
      <div className="button-group">
        <Link to="/login" className="button">Login</Link>
        <Link to="/signup" className="button">Sign up</Link>
      </div>
      <p className="notice">Keep your prescription ready for new sign-up.</p>
      <footer className="footer">Contact for more details - 984798393</footer>
    </div>
  );
};

export default Welcome;
