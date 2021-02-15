import React from 'react'
import { useSelector} from 'react-redux'
import {addWorkHistory,clearHistory, addPersonnel } from '../../actions'
import JobForm from './JobForm'
import PersonForm from './PersonForm'

const FormType = () => {

    const formType = useSelector(form => form)
    console.log(formType.personnelReducer)
    return (
        <div className="main">

            {(!formType.personnelReducer.length > 0 )?
                    <PersonForm
                        collection={addPersonnel}
                        btnName="Personal Info"
                    /> 
                : 
                    <JobForm
                        collection={addWorkHistory}
                        clearCollection={clearHistory}
                        firstName = {formType.personnelReducer[0].firstName}
                        lastName = {formType.personnelReducer[0].lastName}
                        btnName="Job"
                    />

                    }
            

        </div>
    )
}

export default FormType