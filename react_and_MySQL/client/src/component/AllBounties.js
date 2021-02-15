import React, { useState, useContext} from 'react';
import Pagination from './pagination/Pagination'
import Bounty from '../component/Bounty'
import { UserContext } from '../context/UserProvider'

const AllBounties = () => {
     const { bounties, handleNavMenu } = useContext(UserContext)

     const [ currentPage, setCurrentPage ] = useState(1)
     const [ postsPerPage ] = useState(3)   
     
     const indexOfLastPost = currentPage * postsPerPage
     const indexOfFirstPost = indexOfLastPost - postsPerPage
     const currentPosts = bounties.slice( indexOfFirstPost, indexOfLastPost )
     
     const paginate = ( pageNumber ) => {
         setCurrentPage( pageNumber )
     } 
 
    return (
        <div className = "main"  onClick={()=> handleNavMenu('toggle')}>
            <h1 className="all-bounty-h1">Bounty hunter wanted board</h1>
            
            <div className="all-bounty-home">
                <img  className="all-bounty" src="https://images.all-free-download.com/images/graphicthumb/wanted_template_cowboy_icon_retro_paper_6833950.jpg" alt="wanted"/>
            </div>              
            
            <div className = "bounty-flex">
                {Object.keys(bounties).length === 0 ?
                <h3 className="complete-h1">Sorry no bounties added!</h3>
                :
                <h3>Please update the bounties uppon completion!</h3>
              }  
                {currentPosts.map(bounty => 
                    <Bounty 
                        {...bounty} 
                        key= {bounty._id}                              
                    />)
                }
            
                {
                    bounties.length > 0 ? 
                    <>
                        <Pagination 
                        postsPerPage = {postsPerPage}
                        totalPosts = {bounties.length}
                        paginate = {paginate}
                        />
                    </>
                    :
                    null
                }  
            </div>          
        </div>          
    )
}

export default AllBounties;