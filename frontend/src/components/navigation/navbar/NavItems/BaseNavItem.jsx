import React, { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import './BaseNavItem.css';
import ForwardArrow from './Forward.png';

const BaseNavItem = ({ text, link, dropdown, dropdownItems }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
    <div className="nav-item" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
        <a href={link} className='nav-text'>{text}</a>
        {dropdown && <img src={ForwardArrow} alt="Dropdown Arrow" className='dropdown-arrow' />}
        {dropdown && showDropdown && <Dropdown items={dropdownItems} />}
    </div>
    );
};

export default BaseNavItem;