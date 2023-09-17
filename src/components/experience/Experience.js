import React, { useState, useEffect } from 'react'
import './experience.css'
const Experience = () => {
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
    const experienceData = [
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
        <section className='experience section' id='experience'>
            <h3 className="section-title">Experience</h3>
            <span className="section-subtitle">Time Line</span>
            <div className="experience-container container grid">
                {/* ========= content lists ==================*/}
                {
                    contentData.map((cData, index) => (
                        <div className="experience-content" key={cData.id}>
                            <div>
                                <i className={`uil ${cData.icon} experience-icon`}></i>
                                <h3 className="experience-title">
                                    {
                                        cData.title.map((tData, index) => tData === '<br/>' ? <br /> : tData)
                                    }
                                </h3>
                            </div>
                            <span className={`experience-button`} onClick={() => setToggleModal(index)}>View More
                                <i className={`uil uil-arrow-right experience-button-icon`}></i>
                            </span>
                            <div className={`experience-modal ${toggleModal === index ? 'active-modal' : ''}`}>
                                <div className="experience-modal-content">
                                    <i className="uil uil-times experience-modal-close" onClick={() => setToggleModal(-1)}></i>
                                    <h3 className="experience-modal-title">
                                        {
                                            cData.title.map((tData, index) => tData === '<br/>' ? ' ' : tData)
                                        }
                                    </h3>
                                    <p className="experience-modal-description">{cData.description}</p>
                                    <ul className="experience-modal-lists grid">
                                        {/* ======== Modal list data ======== */}
                                        {
                                            experienceData.map((edata) => (
                                                <>
                                                    <li className="experience-modal-list" key={edata.id}>
                                                        <i className="uil uil-check-circle experience-modal-icon"></i>
                                                        <p className="experience-modal-info">{edata.work}</p>
                                                    </li>
                                                </>
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

export default Experience