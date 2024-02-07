import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData, SidebarDataBottom } from './SlidebarData';
import './Header.css';
import Hamburger from 'hamburger-react';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(prevSidebar => !prevSidebar);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (sidebar && !event.target.closest('.nav-menu') && !event.target.closest('.hamburger-react')) {
                setSidebar(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [sidebar]);

    return (
        <>
<div className={`navbar ${sidebar ? 'active' : ''}`}>
    <div className="menu-icon-wrapper"> {/* Wrapper added */}
        <Hamburger toggled={sidebar} toggle={toggleSidebar} color="#fff" />
    </div>
</div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div className="menu-scroll">
                    <ul className='nav-menu-items'>
                        {SidebarData.map((item, index) => (
                            <li key={index} className={item.cName}>
                                {item.external ? (
                                    <a href={item.path} target="_blank" rel="noopener noreferrer" onClick={toggleSidebar}>
                                        {item.icon}
                                        <span>{item.title}</span> {/* Keep this if you want to show the title, otherwise remove */}
                                    </a>
                                ) : (
                                    <Link to={item.path} onClick={toggleSidebar}>
                                        {item.icon}
                                        <span>{item.title}</span> {/* Keep this if you want to show the title, otherwise remove */}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <div className="social-icons-bottom">
                            {SidebarDataBottom.map((item, index) => (
                                <a key={index} href={item.path} target="_blank" rel="noopener noreferrer" onClick={toggleSidebar}>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </ul>
                </div>
            </nav>
            <div className={`content ${sidebar ? 'content-blur' : ''}`}>
                {/* Your main content here */}
            </div>
        </>
    );
}

export default Navbar;
