import React from 'react'

const Info = () => {
    const experienceData = [
        {
            id: 1,
            title: 'Experience',
            subTitle: '8 Years Working',
            icon: 'award-alt',
        },
        {
            id: 2,
            title: 'Completed',
            subTitle: '48+ Projects',
            icon: 'briefcase-alt',
        },
        {
            id: 3,
            title: 'Support',
            subTitle: 'Online 24/7',
            icon: 'cell',
        },
    ]
    return (
        <div className='about-info grid'>
            {
                experienceData.map((data) => (
                    <div className="about-box">
                        <i class={`uil uil-${data.icon} about-icon`}></i>
                        <h3 className="about-title" key={data.id}>{data.title}</h3>
                        <span className="about-subtitle">{data.subTitle}</span>
                    </div >
                ))
            }
        </div >
    )
}

export default Info