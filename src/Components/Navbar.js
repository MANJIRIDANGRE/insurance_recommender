import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="iblogo.png" alt="InsureBank Logo" className="logo" />
        <h1 className="title">InsureBank</h1>
      </div>
      <div className="nav-right">
        
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
