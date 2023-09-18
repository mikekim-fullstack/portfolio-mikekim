import React, { useState } from 'react'
import './qualification.css'
const Qualification = () => {

    const tabsData = [
        {
            id: 1,
            name: 'Education',
            icon: 'uil-graduation-cap',
        },
        {
            id: 2,
            name: 'Experience',
            icon: 'uil-briefcase-alt',
        },
    ]
    const workData1 = [
        {
            id: 1,
            title: 'Web Designer',
            subTitle: 'Spain - Institute',
            time: '2021 - Present',
            rounder: '',
            link: ''
        },
        {
            id: 2,
            title: 'Art Director',
            subTitle: 'Spain - Institute',
            time: '2020 - 2021',
            rounder: '',
            link: ''
        },
        {
            id: 3,
            title: 'Web Development',
            subTitle: 'Spain - Institute',
            time: '2018 - 2020',
            rounder: '',
            link: ''
        },
        {
            id: 4,
            title: 'Web Designer',
            subTitle: 'Figma - Spain',
            time: '2014 - 2015',
            rounder: '',
            link: ''
        },

    ]
    const workData2 = [

        {
            id: 1,
            title: 'UX Expert',
            subTitle: 'Spain - Institute',
            time: '2017 - 2018',
            rounder: '',
            link: ''
        },
        {
            id: 2,
            title: 'Product Designer',
            subTitle: 'Microsoft - Spain',
            time: '2016 - 2017',
            rounder: '',
            link: ''
        },
        {
            id: 3,
            title: 'UX Designer',
            subTitle: 'Apple Inc - Spain',
            time: '2015 - 2016',
            rounder: '',
            link: ''
        },
        {
            id: 4,
            title: 'Web Designer',
            subTitle: 'Figma - Spain',
            time: '2014 - 2015',
            rounder: '',
            link: ''
        },
        {
            id: 5,
            title: 'Art Director',
            subTitle: 'Spain - Institute',
            time: '2020 - 2021',
            rounder: '',
            link: ''
        },
    ]
    const [activeTab, setActiveTab] = useState(0)
    const onClickTab = (index) => {

        setActiveTab(index)
    }
    return (
        <section className='qualification section' id='qualification'>
            <h2 className="section-title">Qualificaton</h2>
            <span className="section-subtitle">My Personal Journey</span>
            <div className="qualification-container container">
                {/* ===== Tab buttons ====== */}
                <div className="qualification-tabs">
                    {
                        tabsData.map((tData, index) => (
                            <div className={`qualification-button button-flex ${activeTab === index ? 'qualification-active' : ''}`}
                                key={tData.id} onClick={() => onClickTab(index)}>
                                <i className={`uil ${tData.icon} qualification-icon`}></i>
                                {tData.name}
                            </div>
                        ))
                    }
                </div>
                {/* ======= Tab Sections ======= */}
                <div className="qualification-sections grid">
                    {/* ==== Contents #1==== */}
                    <div className={`qualification-content ${activeTab === 0 ? 'qualification-content-active' : ''}`}>
                        {/* ==== Data ==== */}
                        {
                            workData1.map((wData, index) => (
                                <div className="qualification-data grid" key={wData.id}>
                                    {
                                        index % 2 === 1 && (
                                            <>
                                                <div></div>
                                                <div>
                                                    <span className="qualification-rounder"></span>
                                                    <span className="qualification-link"></span>
                                                </div>

                                            </>
                                        )
                                    }
                                    <div>
                                        <h3 className="qualification-title">{wData.title}</h3>
                                        <span className="qualification-subtitle">{wData.subTitle}</span>
                                        <div className="qualification-calendar">
                                            <i className="uil uil-calendar-alt"></i>{wData.time}
                                        </div>
                                    </div>
                                    {
                                        index % 2 === 0 && (
                                            <>
                                                <div>
                                                    <span className="qualification-rounder"></span>
                                                    <span className="qualification-line"></span>
                                                </div>
                                                <div></div>
                                            </>
                                        )

                                    }
                                </div>
                            ))
                        }
                        {/* ---- End of Data ---- */}
                    </div>
                    {/* ==== Contents #2==== */}
                    <div className={`qualification-content ${activeTab === 1 ? 'qualification-content-active' : ''}`}>
                        {/* ==== Data ==== */}
                        {
                            workData2.map((wData, index) => (
                                <div className="qualification-data grid" key={wData.id}>
                                    {
                                        index % 2 === 1 && (
                                            <>
                                                <div></div>
                                                <div>
                                                    <span className="qualification-rounder"></span>
                                                    <span className="qualification-link"></span>
                                                </div>

                                            </>
                                        )
                                    }
                                    <div>
                                        <h3 className="qualification-title">{wData.title}</h3>
                                        <span className="qualification-subtitle">{wData.subTitle}</span>
                                        <div className="qualification-calendar">
                                            <i className="uil uil-calendar-alt"></i>{wData.time}
                                        </div>
                                    </div>
                                    {
                                        index % 2 === 0 && (
                                            <>
                                                <div>
                                                    <span className="qualification-rounder"></span>
                                                    <span className="qualification-line"></span>
                                                </div>
                                                <div></div>
                                            </>
                                        )

                                    }
                                </div>
                            ))
                        }
                        {/* ---- End of Data ---- */}
                    </div>
                </div>
                {/* ------ End of Tab Sections ------ */}
            </div>
        </section>
    )
}

export default Qualification