import React from 'react';

import './NavTitle.css'

const NavTitle = ({text}) => {

    return (
        <div className='nav-title'>
            <h1 className='nav-title'>{text}</h1>
        </div>
    )
}

export default NavTitle;