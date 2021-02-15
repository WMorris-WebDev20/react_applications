import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider';
import BountyForm from './BountyForm';

const Home = () => {

    const { addBounty, handleNavMenu } = useContext(UserContext)

    return(
        <div className = "bounty-container main" onClick={()=>handleNavMenu("toggled")}>
            <div className="bounty-home">
                <img className="bounty-hunters" src="https://vignette.wikia.nocookie.net/a40bb604-52a6-4b33-b498-ed29610abe55/scale-to-width-down/800" alt="bounty-hunters"/>
            </div>
            <h1>Hello and welcome to the Bounty hunter data logger!</h1>
            <h2>Please fill out the form to input data. If you would like to see more data please look at the bounter bounty list</h2>
                <BountyForm
                    submit = {addBounty}
                    btnText = "Add Bounty"
                    toggle = {()=>{}}
                />
        </div>
    )
}

export default Home