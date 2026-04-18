import React, { createContext, useState, useCallback } from "react";

// TODO: Add persistent auth state
// TODO: Add error handling

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // ============================================
  // 🔐 Authentication State
  // ============================================
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  // ============================================
  // 📢 Notification State
  // ============================================
  const [notification, setNotification] = useState(null);

  // ============================================
  // 🔄 General State
  // ============================================
  const [isLoading, setIsLoading] = useState(false);

  // ============================================
  // 🔐 Authentication Functions
  // ============================================

  // TODO: Enhance login with API calls
  const login = useCallback((userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    setIsAuthenticated(true);
    localStorage.setItem("authToken", authToken);
    showNotification("welcome", `Welcome, ${userData.name}!`);
  }, []);

  // Logout user
  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
    showNotification("success", "Logged out successfully");
  }, []);

  // ============================================
  // 📢 Notification Functions
  // ============================================

  // Show notification
  const showNotification = useCallback((type, message, duration = 3000) => {
    setNotification({ type, message });

    // Auto-clear notification after duration
    setTimeout(() => {
      setNotification(null);
    }, duration);
  }, []);

  // Clear notification manually
  const clearNotification = useCallback(() => {
    setNotification(null);
  }, []);

  // ============================================
  // 📦 Context Value
  // ============================================

  const value = {
    // Auth state and functions
    user,
    setUser,
    token,
    setToken,
    isAuthenticated,
    login,
    logout,

    // Notifications
    notification,
    showNotification,
    clearNotification,

    // General
    isLoading,
    setIsLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/**
 * Custom Hook: useAppContext
 * Use this to access the AppContext in any component
 * 
 * Usage:
 * ```
 * import { useAppContext } from "../context/AppContext";
 * 
 * function MyComponent() {
 *   const { user, login, logout } = useAppContext();
 *   // ...
 * }
 * ```
 */
export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
