import React from 'react'
import './About.css'
import aboutImg from '../../assets/img/MIKEKIM.JPG'
import myCV from '../../assets/img/mikekimCV2022-compressed.pdf'
import downloadSVG from '../../assets/img/download.svg'
import Info from './Info'
const About = () => {
    return (
        <section className='section about' id='about'>
            <h2 className="section-title">About Me</h2>
            <span className="section-subtitle">My Introduction</span>
            <div className="about-container container grid">
                <img src={aboutImg} alt="about img" className='about-img' />
                <div className='about-data'>
                    <Info />
                    <p className="about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iste reprehenderit debitis suscipit alias quis eos est ipsa. Exercitationem, voluptates.</p>
                    <a download={''} href={myCV} className="button button-flex">Download CV
                        <img src={downloadSVG} alt="file svg" className='about-file-svg' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About