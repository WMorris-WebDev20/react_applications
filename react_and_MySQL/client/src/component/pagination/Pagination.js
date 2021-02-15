import React from 'react'
import "./Pagination.css"

const Pagination = ({ postsPerPage, totalPosts , paginate}) => {

    const pageNumbers = []

    for ( let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)        
    }

    return (
        
        <ul className = "pagination">
            <li  className = 'page-item' 
                onClick = {() => paginate(1)} 
            >
                &laquo;
            </li>
            
            {pageNumbers.map(number => (
                <li 
                    key ={number} 
                    className = 'page-item' 
                    onClick = {() => paginate(number)}
                >
                    {number}                      
                </li>
            ))}
            
            <li  
                className = 'page-item' 
                onClick = {() => paginate(Math.ceil(totalPosts/3))}
            >
                &raquo;
            </li>
        </ul>        
    )
}

export default Pagination