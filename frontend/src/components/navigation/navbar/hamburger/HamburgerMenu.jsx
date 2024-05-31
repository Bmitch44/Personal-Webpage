import React from "react";
import BaseNavItem from '../NavItems/BaseNavItem';
import './HamburgerMenu.css';

const HamburgerMenu = ({ onClose }) => {
    return (
        <div className="hamburger-menu">
            <BaseNavItem text="Home" link="/" dropdown={false} onClick={onClose} />
            <BaseNavItem text="Resume" link="/resume" dropdown={false} onClick={onClose} />
            <BaseNavItem text="Projects" link="/projects" dropdown={false} onClick={onClose} />
            <BaseNavItem text="Blog" link="/blog" dropdown={false} onClick={onClose} />
            <BaseNavItem text="About" link="/about" dropdown={false} bold={true} onClick={onClose} />
        </div>
    );
};

export default HamburgerMenu;