import React, { useState } from 'react'
import { useDispatch} from 'react-redux'


const PersonForm = ({ collection, btnName }) => {

    const dispatch = useDispatch();

    const intiInputs = {
        firstName:  "",
        lastName:  "",
        street:  "",
        city:  "",
        state:  "",
        zip: ""
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
            <h1>{btnName}:</h1>
            <form contentEditable = {inputs.personnel} name="form" onSubmit={(e) => { submit(e) }} className="main-form">
                <input
                    type="text"
                    name="firstName"
                    value={inputs.firstName}
                    placeholder={`First Name...`}
                    onChange={handleChange}
                    required />
                
                <input
                    type="text"
                    name="lastName"
                    value={inputs.lastName}
                    placeholder={`Last Name...`}
                    onChange={handleChange}
                    required />

                <input
                    type="text"
                    name="street"
                    value={inputs.street}
                    placeholder={`Street...`}
                    onChange={handleChange}
                    required />
                <input
                    type="text"
                    name="city"
                    value={inputs.city}
                    placeholder={`City...`}
                    onChange={handleChange}
                    required />

                <input
                    type="text"
                    name="state"
                    value={inputs.state}
                    placeholder={`State...`}
                    onChange={handleChange}
                    required />
                
                <input
                    type="text"
                    name="zip"
                    value={inputs.zip}
                    placeholder={`Postal Code...`}
                    onChange={handleChange}
                    required />

                <div >
                    <button > Add {btnName}</button>
                </div>
            </form>

        </div>
    );
};

export default PersonForm;
