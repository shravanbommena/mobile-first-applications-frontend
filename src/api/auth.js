import axios from "axios";

const API_URL = "https://mobile-first-approach-backend.onrender.com/api/auth"; // Adjust the API URL

export const signup = async (email, password) => {
  const response = await axios.post(`${API_URL}/signup`, { email, password });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await axios.post(`${API_URL}/forgot-password`, { email });
  return response.data;
};

export const refreshToken = async (token) => {
  const response = await axios.post(`${API_URL}/refresh-token`, { token });
  return response.data;
};
