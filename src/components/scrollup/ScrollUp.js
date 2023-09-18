import React, { useEffect } from 'react'
import './scrollup.css'

const ScrollUp = () => {
    useEffect(() => {
        const scrollEle = document.querySelector('.scrollup')
        const scrollEvent = () => {
            if (window.scrollY > 560) {
                scrollEle.classList.add('show-scroll')
            }
            else {
                scrollEle.classList.remove('show-scroll')
            }
        }
        window.addEventListener('scroll', scrollEvent)

        return () => window.removeEventListener('scroll', scrollEvent)

    }, [])
    return (
        <a href='#' className='scrollup'>
            <i className="uil uil-arrow-up scrollup-icon"></i>
        </a>
    )
}

export default ScrollUp