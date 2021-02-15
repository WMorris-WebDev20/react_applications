import React from 'react'
import { useSelector } from 'react-redux';
import ResumeList from './ResumeList';

const ResumeHeader = ({ collection, type }) => {

    const data = useSelector(info => info)

    return (
        <>
            <div className="collection-div">
                {data.personnelReducer.length === 0 ? 
                    <div className="collection-header"><h1>{type} Data</h1></div> 
                    :  
                    <>
                        {collection.map((item, i) =>
                            <address className="collection-list" key={`${type}${i}`}>
                                <h1>{`${item.firstName} ${item.lastName}`}</h1>
                                <p>{item.street}</p>
                                <p>{`${item.city} ,  ${item.state} ${item.zip}`}</p>                         
                            </address>
                        )
                        }
                        <ResumeList
                            resumeData = {data.workHistoryReducer}
                        />                
                    </>
                }
            </div>
        </>
    )
}

export default ResumeHeader