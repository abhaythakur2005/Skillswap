import { useState, useCallback } from "react";
import API from "../services/api";

// Custom Hook: useApi
// Simplifies API calls with loading and error handling
export const useApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // TODO: Add retry logic and timeout handling
  const execute = useCallback(async (apiCall) => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiCall;
      setData(response.data);
      return response.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "An error occurred";
      setError(errorMessage);
      console.error("API Error:", errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, execute };
};

/**
 * TODO: Additional Custom Hooks
 * 
 * useAsync - For any async operation:
 * export const useAsync = (asyncFunction, immediate = true) => {
 *   const [status, setStatus] = useState("idle");
 *   const [data, setData] = useState(null);
 *   const [error, setError] = useState(null);
 * 
 *   const execute = useCallback(async () => {
 *     setStatus("pending");
 *     try {
 *       const response = await asyncFunction();
 *       setData(response);
 *       setStatus("success");
 *       return response;
 *     } catch (err) {
 *       setError(err);
 *       setStatus("error");
 *       throw err;
 *     }
 *   }, [asyncFunction]);
 * 
 *   return { execute, status, data, error };
 * };
 * 
 * useFetch - Alternative fetch hook:
 * export const useFetch = (url, options = {}) => {
 *   const [loading, setLoading] = useState(true);
 *   const [data, setData] = useState(null);
 *   const [error, setError] = useState(null);
 * 
 *   useEffect(() => {
 *     const fetchData = async () => {
 *       try {
 *         const response = await API.get(url);
 *         setData(response.data);
 *       } catch (err) {
 *         setError(err);
 *       } finally {
 *         setLoading(false);
 *       }
 *     };
 * 
 *     fetchData();
 *   }, [url]);
 * 
 *   return { loading, data, error };
 * };
 */
