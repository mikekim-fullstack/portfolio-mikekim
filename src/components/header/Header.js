import React, { useState, useEffect } from 'react'
import { useMediaQuery, useMediaQueries } from '@react-hook/media-query'
import './Header.css'
const Header = () => {
    const navLists = [
        {
            id: 1,
            icon: 'estate',
            title: 'Home',
            href: 'home',
        },
        {
            id: 2,
            icon: 'user',
            title: 'About',
            href: 'about',
        },
        {
            id: 3,
            icon: 'file-alt',
            title: 'Skills',
            href: 'skills',
        },
        {
            id: 4,
            icon: 'briefcase-alt',
            title: 'Services',
            href: 'services',
        },
        {
            id: 5,
            icon: 'scenery',
            title: 'Qualificaton',
            href: 'qualification',
        },
        {
            id: 6,
            icon: 'scenery',
            title: 'Testimonials',
            href: 'testimonials',
        },

        {
            id: 7,
            icon: 'message',
            title: 'Contact',
            href: 'contact',
        },
    ]
    const [activeLink, setActiveLink] = useState(1)
    const [toggleShowMenu, setToggleShowMenu] = useState(false);
    const [scrolledTop, setScrolledTop] = useState(false)
    const [scrollDown, setScrollDown] = useState(false)
    const matches = useMediaQuery('(max-width: 768px)');
    let prevScrollY = 0
    useEffect(() => {
        const menuLists = []
        navLists.forEach((list) => menuLists.push(document.getElementById(list.href)))
        console.log(menuLists)

        const headNav = document.querySelector('.header-nav')
        const scrollEvent = () => {
            const scrollY = window.scrollY;
            if ((scrollY - prevScrollY) > 0) setScrollDown(true)
            else if ((scrollY - prevScrollY) < 0) setScrollDown(false)

            // console.log('scrollY', scrollY, 'dir', scrollY - prevScrollY)
            prevScrollY = scrollY
            let scrolled = (scrollY > 50) ? true : false
            setScrolledTop(scrolled)

            // ----------- Make the current section active in menu... ----------
            for (let i = menuLists.length - 1; i >= 0; i--) {
                if (scrollY >= menuLists[i].offsetTop + 100) {
                    setActiveLink(navLists[i].id)
                    break;
                }
            }

        }
        window.addEventListener('scroll', scrollEvent)
        return () => window.removeEventListener('scroll', scrollEvent)
    }, [])
    return (
        <header className={`header-nav ${scrolledTop && !matches ? 'scrolled' : ''} ${matches && (scrollDown ? '' : 'hidden')}`}>
            <nav className={`nav container`}>
                <a href="index.html" className="nav-logo">Mike</a>
                <div className={`nav-menu ${toggleShowMenu ? 'show-menu' : ''}`}>
                    <ul className="nav-list grid">
                        {
                            navLists.map((list) => (
                                <li key={list.id} className="nav-item">
                                    <a href={`#${list.href}`} className={`nav-link ${activeLink === list.id ? 'active-link' : ''}`} onClick={() => setActiveLink(list.id)}>
                                        <i className={`uil uil-${list.icon} nav-icon`}></i>
                                        <span className='nav-text'>{list.title}</span>
                                    </a>
                                </li>
                            ))
                        }

                    </ul>
                    {/* <i className="uil uil-times nav-close" onClick={() => setToggleShowMenu(prev => !prev)}></i> */}
                </div>
                <div className={`nav-toggle`} onClick={() => setToggleShowMenu(prev => !prev)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header