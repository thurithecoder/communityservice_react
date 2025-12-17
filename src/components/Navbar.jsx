import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMenuActive(false);
    }, [location]);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                {/* Ensure image path is absolute from public folder */}
                <img src="/Images/logo-lihe.png" alt="LIHE Logo" />
            </div>

            <button
                className={`menu-toggle ${menuActive ? 'active' : ''}`}
                aria-label="Toggle Menu"
                onClick={() => setMenuActive(!menuActive)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={menuActive ? 'active' : ''}>
                <ul>
                    <li><Link to="/" className={isActive('/')}>Home</Link></li>
                    <li><Link to="/about" className={isActive('/about')}>About</Link></li>
                    <li><Link to="/services" className={isActive('/services')}>Service</Link></li>
                    <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
                </ul>
            </nav>

            <div className="nav-buttons">
                <button className="volunteer">Volunteer</button>
                <button className="donate">Donate!</button>
            </div>
        </header>
    );
};

export default Navbar;