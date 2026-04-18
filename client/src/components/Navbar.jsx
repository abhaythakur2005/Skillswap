import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "./Navbar.css";

// TODO: Add hamburger menu for mobile
// TODO: Add user dropdown
// TODO: Add active route highlighting
const Navbar = () => {
  const { isAuthenticated, user, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Brand */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">SkillSwap</span>
        </Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          {/* TODO: Add Tasks link when tasks page is implemented */}
          <li>
            <Link to="/" className="nav-link">
              Tasks
            </Link>
          </li>

          {isAuthenticated && (
            <li>
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
          )}
        </ul>

        {/* Auth Buttons */}
        <div className="navbar-auth">
          {isAuthenticated ? (
            <>
              {/* TODO: Add user profile dropdown */}
              <span className="user-greeting">Welcome, {user?.name}!</span>
              <button className="btn btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-login">
                Login
              </Link>
              <Link to="/register" className="btn btn-signup">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
