// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css';

// function NavbarComponent() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
//             <div className="container">
//                 <NavLink className="navbar-brand" to="/">
//                     FoodShare
//                 </NavLink>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto align-items-center">
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/">Home</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/about">About Us</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/donations">Find Food</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/help">Help Center</NavLink>
//                         </li>
//                         <li className="nav-item ms-lg-3">
//                             <NavLink className="btn btn-dark" to="/contribute">Donate Now</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default NavbarComponent;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function NavbarComponent() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    Meal Bridge
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/donations">Find Food</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/help">Help Center</NavLink>
                        </li>
                        <li className="nav-item ms-lg-3">
                            <NavLink className="btn btn-primary-custom" to="/contribute">Donate Now</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;