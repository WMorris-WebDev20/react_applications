import workHistoryReducer from './workHistoryReducer'
import personnelReducer from './personnelReducer'
import { combineReducers }from 'redux'

const combine = combineReducers({
    workHistoryReducer,
    personnelReducer
})

export default combine