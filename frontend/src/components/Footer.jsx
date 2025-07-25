import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <h3 className="footer-brand">Meal Bridge</h3>
                        <p className="footer-tagline">Connecting hearts, one meal at a time.</p>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                        <h5>Navigate</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/donations">Find Food</Link></li>
                            <li><Link to="/contribute">Donate</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                        <h5>Support</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/help">Help Center</Link></li>
                            <li><Link to="/help">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <h5>Join Our Mission</h5>
                        <p>Your small contribution can make a big difference in someone's life.</p>
                        <Link to="/contribute" className="btn btn-primary-custom">Donate Now</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Meal Bridge. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;