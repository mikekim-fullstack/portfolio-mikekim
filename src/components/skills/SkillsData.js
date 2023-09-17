import React from 'react'

const SkillsData = ({ skillsTitle, skillsData }) => {
    const groupData = skillsData.reduce((result, item, index) => {
        let chunkIndex = Math.floor(index / 3)
        if (!result[chunkIndex]) result[chunkIndex] = []
        result[chunkIndex].push(item)
        return result
    }, [])
    console.log('groupData', groupData)
    return (
        <div className='skills-content'>
            <h3 className="skills-title">{skillsTitle}</h3>
            <div className="skills-box">
                {
                    groupData.map((chunkData, index) => (
                        <div className='skills-group' key={index}>
                            {
                                chunkData.map((data) => (
                                    <div className="skills-data" key={data.id}>
                                        <i className='bx bx-badge-check'></i>
                                        <div>
                                            <h3 className="skills-name">{data.name}</h3>
                                            <span className="skills-level">{data.level}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillsData