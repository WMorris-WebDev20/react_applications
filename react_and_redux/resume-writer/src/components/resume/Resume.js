import React from 'react'
import { useSelector } from 'react-redux'
import ResumeHeader from './ResumeHeader'

const Resume = () => {

    const formType = useSelector(form => form)

    return (
        <div className="main">
            <ResumeHeader
                collection={formType.personnelReducer}
                type=" Resume"
            />
        </div>
    )
}

export default Resume
