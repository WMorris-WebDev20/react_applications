import React from 'react';
import { connect } from 'react-redux'
import ReactTooltip from "react-tooltip"
import {deletePerson} from '../actions/contactAction'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactList = ({dispatch, contact}) => {
    console.log (contact)

    return (
        <>
        {((contact !== undefined && contact.length > 0 ))?
        <div className="contact-div">
            <div className="contact-header"><span>Name</span><span>Phone</span><span>Email</span></div>        
                {contact.map((person, i) => 
                    
                    <div key={`contact${i}`} className="contact-list" >
                        <p>{person.name}</p>
                        <p>{person.phone.replace(/(\d{3})(\d{3})(\d{4})/,'($1)$2-$3')}</p> 
                        <p>{person.email}</p>
                        <p>
                            <i data-tip="Delete Contact"className = "trash-icon" onClick= {()=> dispatch(deletePerson(i))}>
                                <FontAwesomeIcon icon = {faTrashAlt}/>
                            </i>
                        </p>
                    </div>
                            
                )}
                <ReactTooltip className= "tip" effect = "solid"/>
            </div>
            :
            null
              }            
        </>
      )
    }
    
    const mapStateToProps = state => {    
        return { contact: state }
    }

export default connect( mapStateToProps )(ContactList)