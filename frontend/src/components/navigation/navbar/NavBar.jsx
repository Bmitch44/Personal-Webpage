import React from 'react';
import './NavBar.css';

const NavBar = ({logo, children}) => (
    <div className="navbar">
        <div className='navbar-contents'>
            <img src={logo} alt="Cropbytes Logo" className="navbar-logo" />
            <div className="navbar-items">
                {children}
            </div>
        </div>
    </div>
);

export default NavBar;