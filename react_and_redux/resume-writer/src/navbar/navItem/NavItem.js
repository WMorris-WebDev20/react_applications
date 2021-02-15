import React from 'react';

import './NavItem.css'

const NavItem = ({text, logout}) => {

    return (
        <div className='nav-item'>
            {text}
        </div>
    )
}

export default NavItem;