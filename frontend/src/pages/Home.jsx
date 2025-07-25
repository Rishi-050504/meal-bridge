// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import './Home.css';

// function Home() {
//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//         >
//             <header className="home-hero">
//                 <div className="hero-overlay"></div>
//                 <div className="container text-center hero-content">
//                     <motion.h1 
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                         className="hero-title"
//                     >
//                         Share a Meal, <br /> Share Hope.
//                     </motion.h1>
//                     <motion.p 
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.4 }}
//                         className="hero-subtitle"
//                     >
//                         Your surplus food can bring a smile to someone's face. Join our community in the fight against hunger.
//                     </motion.p>
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.6 }}
//                     >
//                         <Link to="/contribute" className="btn btn-dark btn-lg hero-btn">Donate Food Now</Link>
//                     </motion.div>
//                 </div>
//             </header>

//             <section className="section-padding text-center">
//                 <div className="container">
//                     <h2 className="section-title">A Simple Path to Making a Difference</h2>
//                     <p className="lead text-muted mb-5">Three easy steps to turn your surplus into support.</p>
//                     <div className="row g-4">
//                         <div className="col-md-4">
//                             <div className="feature-card">
//                                 <div className="feature-icon">1</div>
//                                 <h3>List Your Donation</h3>
//                                 <p>Quickly fill out a form with details about your surplus food and upload a photo.</p>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="feature-card">
//                                 <div className="feature-icon">2</div>
//                                 <h3>Get Connected</h3>
//                                 <p>Your donation appears on our platform for local volunteers and NGOs to see.</p>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="feature-card">
//                                 <div className="feature-icon">3</div>
//                                 <h3>Coordinate Pickup</h3>
//                                 <p>A receiver accepts, gets your details via email, and contacts you to arrange collection.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </motion.div>
//     );
// }

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <header className="home-hero">
                <div className="hero-overlay"></div>
                <div className="container text-center hero-content">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-title"
                    >
                        Share a Meal, <br /> Build a <span className="text-primary-custom">Bridge</span>.
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-subtitle"
                    >
                        Your surplus food can bring a smile to someone's face. Join our community in the fight against hunger.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link to="/contribute" className="btn btn-primary-custom btn-lg hero-btn">Donate Food Now</Link>
                    </motion.div>
                </div>
            </header>

            <section className="section-padding text-center" style={{backgroundColor: "var(--color-primary-light)"}}>
                <div className="container">
                    <h2 className="section-title">A Simple Path to Making a Difference</h2>
                    <p className="lead text-muted mb-5">Three easy steps to turn your surplus into support.</p>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="feature-card">
                                <div className="feature-icon">1</div>
                                <h3>List Your Donation</h3>
                                <p>Quickly fill out a form with details about your surplus food and upload a photo.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card">
                                <div className="feature-icon">2</div>
                                <h3>Get Connected</h3>
                                <p>Your donation appears on our platform for local volunteers and NGOs to see.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card">
                                <div className="feature-icon">3</div>
                                <h3>Coordinate Pickup</h3>
                                <p>A receiver accepts, gets your details via email, and contacts you to arrange collection.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

export default Home;