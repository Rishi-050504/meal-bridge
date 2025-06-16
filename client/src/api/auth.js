// import axios from 'axios';

// const BASE_URL = 'http://localhost:5000/api/auth';

// export const registerUser = async (data) => {
//   try {
//     await axios.post(`${BASE_URL}/register`, data); // ✅ POST method
//     return true;
//   } catch (err) {
//     alert(err.response?.data?.message || "Registration failed");
//     return false;
//   }
// };


// export const loginUser = async (data) => {
//   try {
//     const res = await axios.post(`${BASE_URL}/login`, data);
//     localStorage.setItem('token', res.data.token);
//     return true;
//   } catch (err) {
//     alert(err.response?.data?.message || "Login failed");
//     return false;
//   }
// };

// export const requestPasswordReset = async (email) => {
//   try {
//     await axios.post(`${BASE_URL}/forgot-password`, { email });
//   } catch (err) {
//     console.error(err);
//   }
// };





// import axios from 'axios';

// const BASE_URL = 'http://localhost:5000/api/auth';

// export const registerUser = async (data) => {
//   try {
//     const res = await axios.post(`${BASE_URL}/register`, data);
//     localStorage.setItem('token', res.data.token);
//     return true;
//   } catch (err) {
//     alert(err.response?.data?.message || "Registration failed");
//     return false;
//   }
// };

// export const loginUser = async (data) => {
//   try {
//     const res = await axios.post(`${BASE_URL}/login`, data);
//     localStorage.setItem('token', res.data.token);
//     return true;
//   } catch (err) {
//     alert(err.response?.data?.message || "Login failed");
//     return false;
//   }
// };


// client/src/api/auth.js

import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/auth';

// ✅ Register new user
export const registerUser = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/register`, data);
    localStorage.setItem('token', res.data.token);
    return true;
  } catch (err) {
    alert(err.response?.data?.message || "Registration failed");
    return false;
  }
};

// ✅ Login user
export const loginUser = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/login`, data);
    localStorage.setItem('token', res.data.token);
    return true;
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
    return false;
  }
};

// ✅ Request password reset (Forgot Password)
export const requestPasswordReset = async (email) => {
  try {
    const res = await axios.post(`${BASE_URL}/forgot-password`, { email });
    return res.data; // you can show success message to user
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to request password reset');
  }
};
