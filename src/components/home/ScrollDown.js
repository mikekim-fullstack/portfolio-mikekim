import React from 'react'
import mouseSVG from '../../assets/img/mouse.svg'
const ScrollDown = () => {
    return (
        <div className='home-scroll'>
            <a href="#about" className="home-scroll-button button-flex">
                <img className='home-scroll-img' src={mouseSVG} alt="mouse svg" />
                <span className="home-scroll-name">Scroll Down</span>
                <i class="uil uil-arrow-down home-scroll-arrow"></i>
            </a>
        </div>
    )
}

export default ScrollDown