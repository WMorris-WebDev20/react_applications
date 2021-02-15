import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

    const UserProvider = (props) => {

    const [ bounties, setBounty ] = useState([])
    const [ complete, setComplete ] = useState([])
    const [ totals, setTotals] = useState([])    
    const [toggle, setToggle ] = useState({navMenu: ''})

    const handleNavMenu = (e) =>{
        
       e === ''? setToggle({navMenu:'toggled'}): setToggle({navMenu:''})
    }

    const createtable = () =>{
        axios.get("/bounty/createtable")
            .then( res => console.log(res) )
            .catch( err => console.log(err) )
    }

    const getBounty = () =>{
        axios.get("/bounty")
            .then( res => setBounty(res.data) )
            .catch( err => console.log(err) )
    }

    const getCompleted = () =>{
        axios.get(`bounty/completed`)
            .then( res => setComplete(res.data) )
            .catch( err => console.log(err) )
    }
    const getSorted = (field, asc) =>{
        axios.get(`bounty/sorted/${field}/${asc}`)
            .then( res => setComplete(res.data) )
            .catch( err => console.log(err) )
    }

    const getTotals = () =>{
        axios.get("bounty/totals")
            .then( res => setTotals(res.data) )
            .catch( err => console.log(err) )
    }

    const addBounty = ( newBounty ) =>{
        axios.post("/bounty", newBounty)
            .then(res => {
                console.log(res.data)
                setBounty( prevBounties => [...prevBounties, res.data[0]] )
            })
                .catch(err => console.log(err))
    }

    const deleteBounty = ( bountyID ) =>{
        console.log(bountyID)
        axios.delete(`/bounty/${bountyID}`)
            .then(res => {
                setBounty( prevBounties => prevBounties.filter(bounty => bounty.bountyID!== bountyID) )
            })
            .catch(err => console.log(err))
    }

    const editBounty = ( updates, bountyID ) =>{
        axios.put( `/bounty/${bountyID}`, updates)
        .then(res => {
            setBounty( prevBounties => prevBounties.map(bounty => bounty.bountyID!== bountyID ? bounty : res.data[0]) )
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        createtable()        
        getBounty()
    }, [])    


    return (
        <UserContext.Provider
        value={{            
            ...toggle,
            bounties,
            complete,
            totals,
            editBounty,
            deleteBounty,
            addBounty,
            getBounty,
            handleNavMenu,
            getCompleted,
            getTotals,
            getSorted

        }}>
        { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;