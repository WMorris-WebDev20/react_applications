import React from 'react'
import './Header.css'

const Header = ({headLine}) => {
    return (
        <div className = "header-background">
            <header className = "header">
                <h1 className = "header-message">{headLine}</h1>
            </header> 
        </div>               
    )
}

export default Header