import React,{useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/MenuPage.css';



const MenuPage = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Only show the navbar if not on the homepage ("/")
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="navbar">
      <Navbar />
      <div className="navbar-left">
        <Link to="/login" className="navbar-title">Logout</Link> {}
        <div className="navbar-links">
          {/* Navbar links can remain in the Navbar component */}
        </div>
      </div>
      {sidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </div>
  );
};

export default MenuPage;
