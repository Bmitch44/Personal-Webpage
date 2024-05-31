import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BaseNavItem from './NavItems/BaseNavItem';
import HamburgerMenu from './hamburger/HamburgerMenu';
import './NavBar.css';

const NavBar = ({ logo }) => {
    const location = useLocation();
    const currentTab = location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-contents">
                <Link to="/">
                    <img src={logo} alt="BM Logo" className="navbar-logo" />
                </Link>
                <div className="navbar-items">
                    <BaseNavItem text="Home" link="/" isActive={currentTab === '/'} dropdown={false} />
                    <BaseNavItem text="Resume" link="/resume" isActive={currentTab === '/resume'} dropdown={false} />
                    <BaseNavItem text="Projects" link="/projects" isActive={currentTab === '/projects'} dropdown={false} />
                    <BaseNavItem text="Blog" link="/blog" isActive={currentTab === '/blog'} dropdown={false} />
                    <BaseNavItem text="About" link="/about" isActive={currentTab === '/about'} dropdown={false} bold={true} />
                </div>
                <div className='hamburger-menu-icon' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img src='/hamburger.png' alt='Hamburger Menu' />
                </div>
            </div>
            {isMenuOpen && <HamburgerMenu className={isMenuOpen ? 'show' : ''} onClose={() => setIsMenuOpen(false)} />}
        </div>
    );
};

export default NavBar;