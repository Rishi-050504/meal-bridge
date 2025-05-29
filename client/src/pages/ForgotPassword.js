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
      <div className="auth-wrapper">
        <div className="auth-left" />
        <div className="auth-right">
          <h2>Forget something?</h2>
          <p>
            Enter your email below to receive password reset instructions.<br />
            Didn’t receive instructions? <a href="#">Try different method</a>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
