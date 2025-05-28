import React, { useState } from 'react';
import './Auth.css';
import { requestPasswordReset } from '../api/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    await requestPasswordReset(email);
    alert("If the email exists, a reset link has been sent.");
  };

  return (
    <div className="auth-layout">
      <div className="auth-left"></div>
      <div className="auth-right">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} required />
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
