import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'

const CoughtBounty = ( {bounty, firstName, lastName, cought,  species } ) =>{ 
    
    return(
        <div className = "bounty-complete ">
            <h1 className="bounty-name">{firstName}&nbsp;{lastName}   &nbsp; <i className="fa-money">
                    <FontAwesomeIcon icon={faMoneyBillWave}/></i></h1>
                <p className = "complete-p">A(n) {species === ""? "Unknown species": species} has been {cought === "true"? "At Large": cought === "false"? "cought" : "Unknown"} and has a bounty of <b className="bounty-m">${bounty < 0 || bounty === ""|| bounty === null ? "No Bounty" : bounty.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </b></p>
                
        </div>
    )
}
export default CoughtBounty