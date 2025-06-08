import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/auth';

export const registerUser = async (data) => {
  try {
    await axios.post(`${BASE_URL}/register`, data); // ✅ POST method
    return true;
  } catch (err) {
    alert(err.response?.data?.message || "Registration failed");
    return false;
  }
};


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

export const requestPasswordReset = async (email) => {
  try {
    await axios.post(`${BASE_URL}/forgot-password`, { email });
  } catch (err) {
    console.error(err);
  }
};
