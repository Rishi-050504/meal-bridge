import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="icon-circle">icon</div>
        <div className="logo-text">
          <div className="logo-line">FOOD</div>
          <div className="logo-line">COMPANION</div>
        </div>
      </div>
      <div className="navbar-links">
        <Link to="/about">About</Link>
        <Link to="/donor">Donor</Link>
        <Link to="/donations">Donations</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/help">Help</Link>
      </div>
    </nav>
  );
};

export default Navbar;
