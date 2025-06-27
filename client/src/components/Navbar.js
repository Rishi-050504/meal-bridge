
// // import React, { useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import './Navbar.css';

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [userId, setUserId] = useState(null);

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');
// //     const storedUserId = localStorage.getItem('userId'); // Save this at login
// //     setIsLoggedIn(!!token);
// //     setUserId(storedUserId);
// //   }, []);

// //   const logout = () => {
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('userId');
// //     setIsLoggedIn(false);
// //     navigate('/login');
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-left">
// //         <div className="icon-circle">MB</div>
// //       </div>

// //       <div className="brand-name">Meal-Bridge</div>

// //       <div className="navbar-links">
// //         <Link to="/">Home</Link>
// //         <Link to="/about">About</Link>
// //         <Link to="/donate">Contribute</Link>
// //         <Link to="/donations">Donations</Link>
// //         <Link to="/admin">Admin</Link>
// //         <Link to="/help">Help</Link>
// //         {isLoggedIn ? (
// //           <>
// //             <Link to={`/profile/${userId}`}>
// //               <img src="/profile-icon.png" alt="profile" className="profile-icon" />
// //             </Link>
// //           </>
// //         ) : (
// //           <Link to="/login" className="auth-btn">Login</Link>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userId, setUserId] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const storedUserId = localStorage.getItem('userId');
//     setIsLoggedIn(!!token);
//     setUserId(storedUserId);

//     const handleOutsideClick = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => document.removeEventListener('mousedown', handleOutsideClick);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
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
//           <div className="profile-dropdown" ref={dropdownRef}>
//             <img
//               src="/profile-icon.png"
//               alt="profile"
//               className="profile-icon"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             />
//             {dropdownOpen && (
//               <div className="dropdown-menu">
//                 <Link to={`/profile/${userId}`} onClick={() => setDropdownOpen(false)}>View Profile</Link>
//                 <Link to="/edit-profile" onClick={() => setDropdownOpen(false)}>Edit Profile</Link>
//                 <button onClick={logout}>Sign Out</button>
//               </div>
//             )}
//           </div>
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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
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
          <div className="profile-dropdown" onMouseLeave={() => setDropdownOpen(false)}>
            <img
              src="/profile-icon.png"
              alt="profile"
              className="profile-icon"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to={`/profile/${userId}`}>My Profile</Link>
                <Link to={`/profile/${userId}/edit`}>Update Profile</Link>
                <button onClick={logout}>Sign Out</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="auth-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
