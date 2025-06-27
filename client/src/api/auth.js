// import axios from 'axios';

// const BASE_URL = 'http://localhost:5000/api/auth';

// export const registerUser = async (data) => {
//   try {
//     const res = await axios.post(`${BASE_URL}/register`, data);
//     const { token, userId } = res.data;
//     localStorage.setItem('token', token);
//     localStorage.setItem('userId', userId);
//     return true;
//   } catch (err) {
//     alert(err.response?.data?.message || "Registration failed");
//     return false;
//   }
// };

// export const loginUser = async (data) => {
//   try {
//     const res = await axios.post(`${BASE_URL}/login`, data);
//     const { token, userId } = res.data;
//     localStorage.setItem('token', token);
//     localStorage.setItem('userId', userId);
//     return true;
//   } catch (err) {
//     alert(err.response?.data?.message || "Login failed");
//     return false;
//   }
// };
// // Add to src/api/auth.js

// export const requestPasswordReset = async (email) => {
//   try {
//     const res = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
//     return res.data.message;
//   } catch (err) {
//     throw new Error(err.response?.data?.message || 'Failed to send reset email');
//   }
// };

import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/auth';

// Register user
export const registerUser = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/register`, data);
    const { token, userId } = res.data;
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    return true;
  } catch (err) {
    alert(err.response?.data?.message || "Registration failed");
    return false;
  }
};

// Login user
export const loginUser = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/login`, data);
    const { token, userId } = res.data;
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    return true;
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
    return false;
  }
};

// Forgot Password (if implemented)
export const requestPasswordReset = async (email) => {
  try {
    const res = await axios.post(`${BASE_URL}/forgot-password`, { email });
    return res.data.message;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to send reset email');
  }
};
