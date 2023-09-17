import React, { useState, useEffect } from 'react'
import './Header.css'
const Header = () => {
    const navLists = [
        {
            id: 1,
            icon: 'estate',
            title: 'Home',
            href: '#home',
        },
        {
            id: 2,
            icon: 'user',
            title: 'About',
            href: '#about',
        },
        {
            id: 3,
            icon: 'file-alt',
            title: 'Skills',
            href: '#skills',
        },
        {
            id: 4,
            icon: 'briefcase-alt',
            title: 'Experience',
            href: '#experience',
        },
        {
            id: 5,
            icon: 'scenery',
            title: 'Projects',
            href: '#projects',
        },
        {
            id: 6,
            icon: 'message',
            title: 'Contact',
            href: '#contact',
        },
    ]
    const [activeLink, setActiveLine] = useState(1)
    const [toggleShowMenu, setToggleShowMenu] = useState(false);
    return (
        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className="nav-logo">Mike</a>
                <div className={`nav-menu ${toggleShowMenu ? 'show-menu' : ''}`}>
                    <ul className="nav-list grid">
                        {
                            navLists.map((list) => (
                                <li key={list.id} className="nav-item">
                                    <a href={list.href} className={`nav-link ${activeLink === list.id ? 'active-link' : ''}`} >
                                        <i className={`uil uil-${list.icon} nav-icon`}></i>
                                        {list.title}
                                    </a>
                                </li>
                            ))
                        }

                    </ul>
                    <i className="uil uil-times nav-close" onClick={() => setToggleShowMenu(prev => !prev)}></i>
                </div>
                <div className={`nav-toggle`} onClick={() => setToggleShowMenu(prev => !prev)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header