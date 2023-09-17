import React from 'react'
import './skills.css'
import SkillsData from './SkillsData'

const Skills = () => {
    const skillsTitle = ['Frontend Developer', 'Backend Developer']
    const skillsData1 = [
        {
            id: 1,
            name: 'CSS',
            level: 'Intermediate',
        },
        {
            id: 2,
            name: 'HTML',
            level: 'Intermediate',
        },
        {
            id: 3,
            name: 'JavaScript',
            level: 'Intermediate',
        },
        {
            id: 4,
            name: 'Bootstrap',
            level: 'Intermediate',
        },
        {
            id: 5,
            name: 'Git',
            level: 'Intermediate',
        },
        {
            id: 6,
            name: 'React',
            level: 'Intermediate',
        },
    ]
    const skillsData2 = [
        {
            id: 1,
            name: 'Node.js',
            level: 'Basic',
        },
        {
            id: 2,
            name: 'Django',
            level: 'Intermediate',
        },
        {
            id: 3,
            name: 'PostgreSQL',
            level: 'Basic',
        },
        {
            id: 4,
            name: 'Python',
            level: 'Intermediate',
        },
        {
            id: 5,
            name: 'Firebase',
            level: 'Intermediate',
        },
        {
            id: 6,
            name: 'Railway.up',
            level: 'Intermediate',
        },
    ]
    return (
        <section className='skills section' id='skills'>
            <h3 className="section-title">Skills</h3>
            <span className="section-subtitle">My Technical Level</span>
            <div className="skills-container container grid">
                <SkillsData skillsTitle={skillsTitle[0]} skillsData={skillsData1} />
                <SkillsData skillsTitle={skillsTitle[1]} skillsData={skillsData2} />
            </div>
        </section>
    )
}

export default Skills