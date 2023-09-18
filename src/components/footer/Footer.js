import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container container">
                <h1 className="footer-title">Mike</h1>
                <ul className="footer-lists">
                    <li>
                        <a href="#about" className="footer-link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer-link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer-link">Testimonials</a>
                    </li>
                </ul>
                <div className="footer-social">
                    <a href="https://www.linkedin.com/feed/" target='_blank' className="footer-social-link"><i className="uil uil-linkedin-alt"></i></a>
                    <a href="https://github.com/mikekim-fullstack" target='_blank' className="footer-social-link"><i className="uil uil-github-alt"></i></a>
                </div>
                <span className="footer-copy">&#169;MikeKim. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer