import axios from "axios";

/**
 * Axios API Instance
 * Centralized API communication for the SkillSwap app
 */

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request Interceptor
 * TODO: Add JWT token to Authorization header
 */
API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 * TODO: Handle error responses (401, 403, 500, etc.)
 */
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // TODO: Handle different error statuses
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login
      console.warn("Unauthorized - redirecting to login");
    }

    return Promise.reject(error);
  }
);

export default API;
