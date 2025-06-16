

import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { name, email, mobile, password } = formData;
      const success = await registerUser({ name, email, mobile, password });

      if (success) {
        alert('Registration successful!');
        navigate('/login');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Join Us and<br />Unlock Endless<br />Possibilities!</h1>
        <p>
          Welcome to <strong>Meal-Bridge</strong>, where your journey begins. Sign up now to access exclusive features, personalized recommendations, and seamless user experience.
        </p>
      </div>

      <div className="signup-right">
        <h2>Sign up to <span className="brand">Meal-Bridge</span></h2>
        <p className="member-text">Already a member? <Link to="/login">Log in here</Link></p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email Address" onChange={handleChange} required />
          <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Create a Password" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Your Password" onChange={handleChange} required />
          <button type="submit" className="primary-btn">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
