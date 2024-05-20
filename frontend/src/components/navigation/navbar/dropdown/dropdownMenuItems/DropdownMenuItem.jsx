import React from 'react';
import './DropdownMenuItem.css';

const DropdownMenuItem = ({ header, subheader, link, logo}) => (
    <a href={link} className="menu-item">
        {logo && <img src={logo} alt="Menu Item Logo" className="menu-item-logo" />}
        <div className="menu-item-text">
            <p className="menu-item-header">{header}</p>
            <p className="menu-item-subheader">{subheader}</p>
        </div>
    </a>
);

export default DropdownMenuItem;