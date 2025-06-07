// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Donate from './pages/Donate';
// import Donations from './pages/Donations';
// import Admin from './pages/Admin';
// import Help from './pages/Help';
// import Login from './pages/Login';                 // ✅ Login
// import Signup from './pages/Signup';               // ✅ Signup
// import ForgotPassword from './pages/ForgotPassword'; // ✅ Forgot Password
// import './App.css';

// function App() {
//   return (
//     <div className="app-wrapper">
//       <Navbar />
//       <div className="content-wrapper">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/donate" element={<Donate />} />
//           <Route path="/donations" element={<Donations />} />
//           <Route path="/admin" element={<Admin />} />
//           <Route path="/help" element={<Help />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />               {/* ✅ New Route */}
//           <Route path="/forgot-password" element={<ForgotPassword />} /> {/* ✅ New Route */}
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Donations from './pages/Donations';
import Admin from './pages/Admin';
import Help from './pages/Help';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import ChangePassword from './pages/ChangePassword';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/:id/edit" element={<EditProfile />} />
          <Route path="/profile/:id/change-password" element={<ChangePassword />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
