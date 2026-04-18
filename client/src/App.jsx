import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AppProvider } from "./context/AppContext";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

import "./App.css";

// TODO: Add protected routes
// TODO: Add task detail page
// TODO: Add user profile page

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />

          <main className="app-main">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected Routes */}
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Catch all - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <footer className="app-footer">
            <div className="footer-content">
              <p>&copy; 2026 SkillSwap - A MERN Stack Learning Platform</p>
              <p className="footer-note">
                Designed & Built by Gaurav Sharma | Made with ❤️ for students
              </p>
              <p className="footer-links">
                <a href="/">Home</a> · <a href="/about">About</a> · <a href="/">Contact</a>
              </p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
