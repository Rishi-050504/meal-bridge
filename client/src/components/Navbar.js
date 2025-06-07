// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const navigate = useNavigate();

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Optional: useEffect to read login state from localStorage or cookie
//   useEffect(() => {
//     const token = localStorage.getItem('token'); // adjust based on your logic
//     setIsLoggedIn(!!token);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem('token'); // clear auth token
//     setIsLoggedIn(false);
//     navigate('/login');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <div className="icon-circle">MB</div>
//       </div>

//       <div className="brand-name">Meal-Bridge</div>

//       <div className="navbar-links">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/donate">Contribute</Link>
//         <Link to="/donations">Donations</Link>
//         <Link to="/admin">Admin</Link>
//         <Link to="/help">Help</Link>

//         {isLoggedIn ? (
//           <button onClick={logout} className="auth-btn">Logout</button>
//         ) : (
//           <Link to="/login" className="auth-btn">Login</Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId'); // Save this at login
    setIsLoggedIn(!!token);
    setUserId(storedUserId);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="icon-circle">MB</div>
      </div>

      <div className="brand-name">Meal-Bridge</div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/donate">Contribute</Link>
        <Link to="/donations">Donations</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/help">Help</Link>
        {isLoggedIn ? (
          <>
            <Link to={`/profile/${userId}`}>
              <img src="/profile-icon.png" alt="profile" className="profile-icon" />
            </Link>
          </>
        ) : (
          <Link to="/login" className="auth-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
