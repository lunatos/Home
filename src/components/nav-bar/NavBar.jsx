import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    const isActive = (path) => location.pathname === path;

    return (
        <>
        <nav className="navBar">
            <div className="navBar-container">
                <Link to='/' className="navBar-home" onClick={closeMobileMenu}>
                    <i className="fa-solid fa-blog"></i>
                </Link>

                <button className="theme-toggle" onClick={toggleTheme} title={theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}>
                    {theme === 'light' ? (
                        <i className="fa-solid fa-moon"></i>
                    ) : (
                        <i className="fa-solid fa-sun"></i>
                    )}
                </button>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className={`nav-links ${isActive('/') ? 'active' : ''}`} onClick={closeMobileMenu}>
                            Home <i className="fa-solid fa-house"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/bio' className={`nav-links ${isActive('/bio') ? 'active' : ''}`} onClick={closeMobileMenu}>
                            Bio <i className="fa-brands fa-pied-piper-alt"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/projects' className={`nav-links ${isActive('/projects') ? 'active' : ''}`} onClick={closeMobileMenu}>
                            Projetos <i className="fa-solid fa-code"></i>
                        </Link>
                    </li>
                    {!button && (
                        <li className="nav-item">
                            <Link to='/bio' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Explorar
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
        </>
    );
}

export default NavBar;
