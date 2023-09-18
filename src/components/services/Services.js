import React, { useState, useEffect } from 'react'
import './services.css'
const Services = () => {
    const contentData = [
        {
            id: 1,
            icon: 'uil-web-grid',
            title: ['Product', '<br/>', 'Designer'],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        },
        {
            id: 2,
            icon: 'uil-arrow',
            title: ['UI/UX', '<br/>', 'Designer'],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        },
        {
            id: 3,
            icon: 'uil-edit',
            title: ['Visual', '<br/>', 'Designer'],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        },
    ]
    const servicesData = [
        {
            id: 1,
            work: 'I develop the user interface',
            icon: ''
        },
        {
            id: 2,
            work: 'Web page development'
        },
        {
            id: 3,
            work: 'I create ux element interface'
        },
        {
            id: 4,
            work: 'I position your brand'
        },
        {
            id: 5,
            work: 'Design and mockups of products for your company'
        },
        {
            id: 6,
            work: 'I develop the user interface'
        },
    ]
    const [toggleModal, setToggleModal] = useState(-1)
    return (
        <section className='services section' id='services'>
            <h3 className="section-title">services</h3>
            <span className="section-subtitle">What I Offer</span>
            <div className="services-container container grid">
                {/* ========= content lists ==================*/}
                {
                    contentData.map((cData, index) => (
                        <div className="services-content" key={cData.id}>
                            <div>
                                <i className={`uil ${cData.icon} services-icon`}></i>
                                <h3 className="services-title">
                                    {
                                        cData.title.map((tData, index) => tData === '<br/>' ? <br key={index} /> : tData)
                                    }
                                </h3>
                            </div>
                            <span className={`services-button`} onClick={() => setToggleModal(index)}>View More
                                <i className={`uil uil-arrow-right services-button-icon`}></i>
                            </span>
                            <div className={`services-modal ${toggleModal === index ? 'active-modal' : ''}`}>
                                <div className="services-modal-content">
                                    <i className="uil uil-times services-modal-close" onClick={() => setToggleModal(-1)}></i>
                                    <h3 className="services-modal-title">
                                        {
                                            cData.title.map((tData, index) => tData === '<br/>' ? ' ' : tData)
                                        }
                                    </h3>
                                    <p className="services-modal-description">{cData.description}</p>
                                    <ul className="services-modal-lists grid">
                                        {/* ======== Modal list data ======== */}
                                        {
                                            servicesData.map((edata) => (
                                                <li className="services-modal-list" key={edata.id}>
                                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                                    <p className="services-modal-info">{edata.work}</p>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Services