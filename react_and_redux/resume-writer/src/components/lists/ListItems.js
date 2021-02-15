import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUndo} from '@fortawesome/free-solid-svg-icons'
import { deleteJob,clearHistory} from '../../actions'

const ListItems = ({ collection, type }) => {

    const dispatch = useDispatch()
    const formType = useSelector(form => form)
    
    return (
        <>
            <div className="collection-div">
                <div className="collection-header">
                    <h1>{type} Data
                        <span>{formType.workHistoryReducer.length > 0 ? <button ><FontAwesomeIcon icon={faUndo} className='undo-icon' onClick={() => dispatch(clearHistory())}/></button>: null}</span>                    
                    </h1>
                    
           
                </div>
                {collection.map((item, i) =>
                    <div className="collection-list" key={`${type}${i}`}>
                        <p>Company : {item.company}</p>
                        <p>Position : {item.position}</p>
                        <p>Description : {item.description}</p>
                        <p>
                            <span>Year Started : {item.startYear}</span>
                            <>{item.endYear !== "" ?<span>Left: {item.endYear}</span>:<span>- Present</span>}</>
                        </p>
                        <p>Pay: ${item.pay.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </p>
                        <button className="remove-btn"><FontAwesomeIcon icon={faTimes} className='delete-icon' onClick={() => dispatch(deleteJob(i))}/></button>
                        
                    </div>
                )
                }
            </div>
        </>
    )
}

export default ListItems