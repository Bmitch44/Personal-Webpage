import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import './BaseNavItem.css';
import ForwardArrow from './Forward.png';

const BaseNavItem = ({ text, link, dropdown, dropdownItems, bold}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
    <div className={`nav-item ${bold && 'bold'}`} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
        <Link to={link} className={`nav-text ${bold ? 'bold-text' : ''}`}>{text}</Link>
        {dropdown && <img src={ForwardArrow} alt="Dropdown Arrow" className='dropdown-arrow' />}
        {dropdown && showDropdown && <Dropdown items={dropdownItems} />}
    </div>
    );
};

export default BaseNavItem;