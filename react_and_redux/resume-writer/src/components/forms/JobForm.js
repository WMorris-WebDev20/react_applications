import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileWink} from '@fortawesome/free-solid-svg-icons'
import { clearPersonnel } from '../../actions';


const Form = ({ collection, btnName, firstName, lastName}) => {

    const dispatch = useDispatch();

    const intiInputs = {
        company: "",
        position: "",
        description: "",
        startYear: "",
        endYear: "",
        pay: ""
    }

    const [inputs, setInputs] = useState(intiInputs)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    const submit = (event) => {
        event.preventDefault()
        dispatch(collection(inputs))
        setInputs(intiInputs)
    }

    return (
        <div className="main">
            <h1>{firstName} {lastName}<FontAwesomeIcon icon={faSmileWink} className='smile-icon' /> </h1>
            <h2>please Add {btnName}:</h2>
            <form name="form" onSubmit={(e) => { submit(e) }} className="main-form">
                <input
                    type="text"
                    name="company"
                    value={inputs.company}
                    placeholder={`Company...`}
                    onChange={handleChange}
                    required />
                
                <input
                    type="text"
                    name="position"
                    value={inputs.position}
                    placeholder={`Position...`}
                    onChange={handleChange}
                    required />

                <textarea
                    type="text"
                    name="description"
                    value={inputs.description}
                    placeholder={`Description...`}
                    onChange={handleChange}
                    required />

                <div className= "date">
                    
                    <div >
                        <label htmlFor="startYear">Started:</label>
                        <input
                            type="date"
                            name="startYear"
                            value={inputs.startYear}
                            onChange={handleChange}
                            required />
                    </div>

                    <div >
                        <label htmlFor="startYear">Left:</label>
                        <input
                            type="date"
                            name="endYear"
                            value={inputs.endYear}
                            onChange={handleChange} />                        

                    </div> 
                </div>   

                <input
                    type="number"
                    name="pay"
                    value={inputs.pay}
                    placeholder={`Annaul Salary...`}
                    onChange={handleChange}
                    required />

                <div >
                    <button > Add {btnName}</button>                    
                </div>

            </form>
            <button onClick={()=>dispatch(clearPersonnel())}>Change Personnel Info</button>           

        </div>
    );
};

export default Form;
