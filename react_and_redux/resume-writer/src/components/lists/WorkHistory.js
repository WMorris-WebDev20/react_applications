import React from 'react'
import { useSelector} from 'react-redux'
import { deleteJob} from '../../actions'
import ListItems from './ListItems'

const WorkHistory = () => {

    const data = useSelector(form => form)

    return (
        <div className="main">
            <ListItems
                collection={data.workHistoryReducer}
                deleteItem={deleteJob}
                type=" Work History "
            />
        </div>
    )
}

export default WorkHistory