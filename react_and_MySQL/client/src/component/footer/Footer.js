import React, { useContext } from 'react'
import { UserContext } from '../../context/UserProvider';
import "./Footer.css";

const Footer = () =>{

    const { handleNavMenu } = useContext(UserContext)

    return(
        <footer>
                <p className="footer" onClick={()=>handleNavMenu("toggled")}>&copy;2020 William Morris - Web Dev Student</p>           
        </footer>
    )
};
export default Footer