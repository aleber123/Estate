import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SlidebarData';
import './Header.css';
import Hamburger from 'hamburger-react';
import '../Fonts.module.css'; // Import your fonts module

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        // Directly toggle the sidebar state
        setSidebar(prevSidebar => !prevSidebar);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // If sidebar is open and the clicked target is not part of the sidebar,
            // then close the sidebar.
            if (sidebar && event.target.closest('.nav-menu') === null && !event.target.closest('.hamburger-react')) {
                setSidebar(false);
            }
        };

        // Listen for clicks to detect outside clicks
        document.addEventListener('click', handleOutsideClick);

        return () => {
            // Cleanup listener
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [sidebar]); // Dependency on sidebar state to add/remove listener based on its state

    return (
        <>
            <div className={`navbar ${sidebar ? 'active' : ''}`}>
                <Hamburger toggled={sidebar} toggle={toggleSidebar} color="#000" />
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div className="menu-scroll">
                    <ul className='nav-menu-items'>
                        {SidebarData.map((item, index) => (
                            <li key={index} className={item.cName}>
                                {item.external ? (
                                    <a href={item.path} target="_blank" rel="noopener noreferrer" onClick={toggleSidebar}>
                                        {item.icon}
                                        {item.title}
                                    </a>
                                ) : (
                                    <Link to={item.path} onClick={toggleSidebar}>
                                        {item.icon}
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))}
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