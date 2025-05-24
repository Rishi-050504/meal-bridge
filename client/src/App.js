// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Donate from './pages/Donate';
// import Donations from './pages/Donations';
// import Admin from './pages/Admin';
// import Help from './pages/Help';
// import './App.css';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/donate" element={<Donate />} />
//         <Route path="/donations" element={<Donations />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/help" element={<Help />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Donations from './pages/Donations';
import Admin from './pages/Admin';
import Help from './pages/Help';
import './App.css'; // ✅ Make sure this stays

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
