import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ logo, children }) => (
    <div className="navbar">
        <div className="navbar-contents">
            <Link to="/">
                <img src={logo} alt="Cropbytes Logo" className="navbar-logo" />
            </Link>
            <div className="navbar-items">{children}</div>
        </div>
    </div>
);

export default NavBar;