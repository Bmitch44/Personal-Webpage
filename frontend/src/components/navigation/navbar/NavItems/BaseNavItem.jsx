import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';
import './BaseNavItem.css';
import ForwardArrow from './Forward.png';

const BaseNavItem = ({ text, link, isActive, dropdown, dropdownItems, bold, onClick}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const activeClass = isActive ? (bold ? 'active-white' : 'active') : '';
    console.log(activeClass);
    return (
    <div className={`nav-item ${bold && 'bold'}`} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
        <NavLink to={link} className={`nav-text ${bold ? `bold-text` : ''} ${activeClass}`} onClick={onClick}>
                {text}
        </NavLink>
        {dropdown && <img src={ForwardArrow} alt="Dropdown Arrow" className='dropdown-arrow' />}
        {dropdown && showDropdown && <Dropdown items={dropdownItems} />}
    </div>
    );
};

export default BaseNavItem;