import React, { useContext, useState } from 'react'
import BountyForm from './BountyForm'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../context/UserProvider'

const Bounty = ( {bounty, firstName, lastName, cought,  species, bountyID,  key} ) =>{ 

    const { editBounty, deleteBounty} = useContext(UserContext)

    const [ editToggle, setEditToggle ] = useState(false) 
    
    const handleToggle = (toggle) =>{
        setEditToggle(toggle)
    } 
    
    return(
        <div className = "bounty main" key = {key}>
            { !editToggle ? 
            <>
                <h1 className="bounty-name"><span>{firstName}</span><span> {lastName} </span></h1>
                <p className="bounty-p">The bounty is {cought === "true"? "Cought": cought === "false"? "At Large" : "Unknown"}</p>
                <p className="bounty-b">Bounty: ${bounty < 0 || bounty === "" || bounty === null ? "No Bounty" : bounty.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p> 
                <p className="bounty-s">Species: {species === ""? "Unknown species": species}</p>
                
                <button 
                    className = "delete-btn"
                    onClick = {()=> deleteBounty(bountyID)}><i className="fa-delete">
                    <FontAwesomeIcon icon={faTimesCircle}/></i> 
                </button>
                
                <button 
                    className = "edit-btn"
                    onClick = {() => setEditToggle(prevToggle => !prevToggle)}><i className="fa-edit">
                    <FontAwesomeIcon icon={faEdit}/></i>
                </button>
            </>
            :
                <>
                    <BountyForm 
                        firstName = {firstName}
                        lastName = {lastName}
                        bounty = {bounty}
                        cought = {cought}
                        species = {species}
                        bountyID = {bountyID}
                        btnText = "Submit Edit"
                        submit = {editBounty}
                        toggle = {handleToggle}
                    />
                    <button 
                    onClick = {() => setEditToggle(prevToggle => !prevToggle)}>
                    Close
                    </button>                    
                </>
            }
        </div>
    )
}
export default Bounty