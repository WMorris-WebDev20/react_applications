import React from 'react'

const ResumeList = ({ resumeData }) => {

    return (
            <div className="collection-div resume-div">
                <h1>Experience</h1>  
                {resumeData.map((item, i) =>
                    <div className="collection-list resume-list" key={`resume${i}`}>
                        <p>Company : {item.company}</p>
                        <p>Position : {item.position}</p>
                        <p>Description : {item.description}</p>
                        <p>
                            <span>Year Started : {item.startYear}</span>
                            <>{item.endYear !== "" ?<span>Left: {item.endYear}</span>:<span>- Present</span> }</>
                        </p>
                        <p>Pay: ${item.pay.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </p>  
                    </div>
                )
                }
            </div>
       )
}

export default ResumeList