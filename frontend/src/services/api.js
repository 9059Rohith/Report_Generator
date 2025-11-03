import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

// --- Auth Calls ---
export const signup = (userData) => {
  return axios.post(`${API_URL}/auth/signup`, userData);
};

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  if (response.data.token) {
    localStorage.setItem('userToken', response.data.token);
  }
  return response;
};

// --- Chat Calls ---
export const generateReport = (chatData) => {
  const token = localStorage.getItem('userToken');
  if (!token) {
    return Promise.reject("No token found");
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.post(`${API_URL}/chat/generate`, chatData, config);
};