import React, { useContext }  from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars , faTimes} from '@fortawesome/free-solid-svg-icons'
import NavItem from './navItem/NavItem'
import NavTitle from './navTitle/NavTitle'
import { UserContext } from '../../context/UserProvider';
import './Navbar.css'

const Navbar = ()=> {    

    const {  getCompleted, getTotals, handleNavMenu, navMenu} = useContext(UserContext) 

    return (
        <nav className='clear-fix header' >
            <div  className={`navbar ${navMenu} header-message`} >
                <Link onClick={()=>handleNavMenu("toggled")} to="/"><NavTitle text="Bounty Hunter"/> </Link>
                <div className='right'>
                    <Link onClick={()=>handleNavMenu("toggled")} to="/"> <NavItem text='Home'/> </Link>
                    <Link onClick={()=>handleNavMenu("toggled")} to = "/allbounties"><NavItem text='All~Bounties'/> </Link>
                    <Link onClick={()=>{handleNavMenu("toggled");getCompleted(); getTotals()}} to = "/completed"><NavItem text='Completed' /> </Link>        
                </div>
                <>
                    { navMenu === ''?
                        <FontAwesomeIcon icon={faBars} className='navbar-icon' onClick={()=>handleNavMenu(navMenu)}/>
                    : 
                        <FontAwesomeIcon icon={faTimes} className='navbar-icon' onClick={()=>handleNavMenu(navMenu)}/>
                    }                
                </>           
            </div>
        </nav>
    )
}

export default Navbar