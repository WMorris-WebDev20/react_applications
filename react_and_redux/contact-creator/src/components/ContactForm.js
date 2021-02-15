import React, { useState } from 'react';
import { connect } from 'react-redux'
import {addContact, clearContacts} from '../actions/contactAction'
import ReactTooltip from "react-tooltip"
import {faPlus, faUndo} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ReduxContact = ({dispatch}) =>{
    
    const intiInputs = {
        name: "",
        phone: "",
        email: ""
    }
     const [inputs, setInputs] = useState(intiInputs)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))       
        
    }

    const submit = (event) =>{
        event.preventDefault()
        dispatch(addContact(inputs))
        setInputs(intiInputs)
    }    

    return (
        <div className="main">
            <form name = "form"onSubmit={(e)=>{submit(e)}} className="mainForm">          
                <input 
                    type ="text" 
                    name="name"
                    value = {inputs.name}
                    placeholder = "Name..."
                    onChange = {handleChange} 
                    required
                />
                <input  
                    type="tel" 
                    name = "phone" 
                    value = {inputs.phone}
                    placeholder="Phone Number..."
                    pattern="^\d{10}$"
                    data-tip = "Format: 1234567890"
                    onChange = {handleChange} 
                    required
                />
                <input  
                    type="email"  
                    name = "email" 
                    value = {inputs.email}
                    placeholder="Email..." 
                    onChange = {handleChange}
                    required 
                />
                <div >
                    <button data-tip = "Add Contact">
                        <i className = "plus-icon" >
                            <FontAwesomeIcon icon = {faPlus}/>
                        </i>
                    </button>
                    
                    <button data-tip = "Reset Contacts">
                        <i className = "redo-icon" onClick = {()=> dispatch(clearContacts())}>
                            <FontAwesomeIcon icon = {faUndo}/>
                        </i>
                    </button>
                </div>              

                <ReactTooltip className = "tip" effect = "solid"/>
            </form>
                        
        </div>
      );
    };

export default connect()(ReduxContact);
