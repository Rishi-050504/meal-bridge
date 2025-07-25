// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contribute from './pages/Contribute';
// import Donations from './pages/Donations';
// import Help from './pages/Help';

// function AnimatedRoutes() {
//     const location = useLocation();
//     return (
//         <AnimatePresence mode="wait">
//             <Routes location={location} key={location.pathname}>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contribute" element={<Contribute />} />
//                 <Route path="/donations" element={<Donations />} />
//                 <Route path="/help" element={<Help />} />
//             </Routes>
//         </AnimatePresence>
//     );
// }

// function App() {
//     return (
//         <Router>
//             <Navbar />
//             <main>
//                 <AnimatedRoutes />
//             </main>
//             <Footer />
//         </Router>
//     );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contribute from './pages/Contribute';
import Donations from './pages/Donations';
import Help from './pages/Help';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contribute" element={<Contribute />} />
                <Route path="/donations" element={<Donations />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <main>
                <AnimatedRoutes />
            </main>
            <Footer />
        </Router>
    );
}

export default App;
