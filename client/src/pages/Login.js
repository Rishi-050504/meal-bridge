import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy logic – replace with API call
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('token', 'dummy-auth-token');
      if (rememberMe) {
        localStorage.setItem('rememberMe', true);
      }
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-section" />

      <div className="login-form-section">
        <div className="login-form-box">
          <h2>Welcome Back</h2>
          <p>Please log in to continue</p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="login-options">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>

              <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
            </div>

            <button type="submit">Login</button>
          </form>

          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
