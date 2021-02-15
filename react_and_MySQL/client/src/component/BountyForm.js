import React, { useState } from 'react'

const BountyForm = (props) => {
    const intiInputs = {firstName: props.firstName || "" , lastName: props.lastName || "", cought: props.cought || "", bounty: props.bounty || "", species: props.species ||""}
    
    const [inputs, setInputs] = useState(intiInputs)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        name === "bounty"? setInputs(prevInputs => ({...prevInputs, [name]: parseInt(value)})):
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit(inputs, props.bountyID)
        setInputs(intiInputs)
        props.toggle(false)                
    }

    return(
        <form onSubmit = {handleSubmit}>
           
           <input
                type = "text" 
                name = "firstName"
                placeholder = "First Name" 
                value = {inputs.firstName}
                required 
                onChange = {handleChange}/>
           
           <input 
                type = "text" 
                name = "lastName"
                placeholder = "Last Name"
                 value = {inputs.lastName}
                 required 
                 onChange = {handleChange}/>
            
            <div className = "bounty-div">
                <label >Enter Bounty</label>
                <input 
                    className = "bounty-amt"
                    type = "text" 
                    name = "bounty"
                    placeholder ="Bounty"
                    value = {inputs.bounty} 
                    
                    onChange = {handleChange}/>
            </div>             
            
            <select value = {inputs.cought} name = "cought"  required onChange = {handleChange}>
                <option value = "unknown">Select Condition</option>
                <option value = {"false"}> At large</option>
                <option value = {"true"}> Cought</option>
            </select>
            
            <select value = {inputs.species} name = "species" required onChange = {handleChange}>
                <option value = "unknown">Select Type</option>
                <option value = "Human"> Human</option>
                <option value = "Sith"> Sith</option>
                <option value = "Ewok"> Ewok</option>
                <option value = "Wookiee"> Wookiee</option>
                <option value = "Hutt"> Hutt</option>
            </select>
            
            <button className = "form-btn">{props.btnText}</button>        
        </form>
    )
}

export default BountyForm