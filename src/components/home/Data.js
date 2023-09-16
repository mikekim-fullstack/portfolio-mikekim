import React from 'react'
import handSVG from "../../assets/img/hand.svg"
import sendSVG from '../../assets/img/send.svg'
const Data = () => {
    return (
        <div className='home-data'>
            <h1 className="home-title">
                Mike Kim
                <img src={handSVG} className='home-hand' alt="hand svg" />
            </h1>

            <h3 className="home-subtitle">Visual Disigner</h3>
            <p className="home-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus fugit, consectetur voluptates sint distinctio magni dolorum recusandae maiores eveniet sapiente voluptas quibusdam adipisci architecto optio cumque voluptatum ad aliquid?</p>
            <a href="#contact" className="button button-flex">Say Hello
                <img src={sendSVG} width={'25px'} alt="send svg" />
            </a>
        </div>
    )
}

export default Data