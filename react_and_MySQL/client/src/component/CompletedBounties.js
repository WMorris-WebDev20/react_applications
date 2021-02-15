import React, { useState, useContext} from 'react'
import Pagination from './pagination/Pagination'
import { UserContext } from '../context/UserProvider'
import CoughtBounty from './CoughtBounty'

const CompletedBounties = () => {

     const { complete, totals, getSorted, handleNavMenu} = useContext(UserContext)

     const [ currentPage, setCurrentPage ] = useState(1)
     const [ postsPerPage ] = useState(10)
     const [ sort,  setSort ] = useState('firstName')
     const [ ascend, setAscend] = useState('ASC')   
     
     const indexOfLastPost = currentPage * postsPerPage
     const indexOfFirstPost = indexOfLastPost - postsPerPage
     const currentPosts = complete.slice( indexOfFirstPost, indexOfLastPost )
     
     const paginate = ( pageNumber ) => {
         setCurrentPage( pageNumber )
     } 

     const handleChangeOrder = (e) =>{
        const {value} = e.target       
        setSort(value)
    }
    const handleChangeAscend = (e) =>{
        const {value} = e.target       
        setAscend(value)
    }

    const submit = () =>{
        getSorted(sort, ascend)
    }

    return (
       
        <div className = "main" onClick={()=>handleNavMenu("toggled")}>
            <h1 className="all-bounty-h1">Bounty Collection Board</h1>
            <div className="star-bounty">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71ETUNgW3EL._AC_SL1500_.jpg" alt="bounty" className="star-bounty-img"/>
            </div>
            {complete.length  ?
                <>
                    <h1 className="complete-h1">Huray, there has been <span className="bounty-money">{totals.map(totals => " $" + totals.Totals.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))} </span>in bounties collected!</h1>

                    <div className = "select">                
                        <select name = "sort"  required onChange = {handleChangeOrder}>
                            <option value = "">Sort Bounties</option>
                            <option value = {"firstName"}> First Name</option>
                            <option value = {"lastName"}> Last Name</option>
                            <option value = {"bounty"}> Bounty</option>
                            <option value = {"species"}> Species</option>
                        </select>

                        <select name = "order"  required onChange = {handleChangeAscend}>
                            <option value = "">Ascend/Descend</option>
                            <option value = {"ASC"}> Ascend</option>
                            <option value = {"DESC"}> Descend</option>
                        </select>
                        <button onClick={()=>submit()}>Submit</button>
                    </div>

                    <div className = "bounty-flex">
                    
                {currentPosts.map(bounty => 
                    <CoughtBounty 
                        {...bounty}
                        key = {bounty._id}                              
                    />
                    )
                }
            
                {
                    complete.length > 0 ? 
                    <>
                        <Pagination 
                        postsPerPage = {postsPerPage}
                        totalPosts = {complete.length}
                        paginate = {paginate}
                        />
                    </>
                    :
                    null
                }  
            </div>  
                </>
            : 
                <h1  className="complete-h1">Sorry no bounties collected!</h1>

            }

            
            
        </div>        
    )
}

export default CompletedBounties;