
const workHistoryReducer = (workHistory = [], action) => {
    switch(action.type) {

        case "ADD_WORK_HISTORY":
            return workHistory = [...workHistory , action.payload]
            
        case "DELETE_JOB":

            return workHistory = workHistory.filter((item, index) => index !== action.payload)
                 
        
        case "CLEAR_HISTORY":
            
        return workHistory= []
       
        default:
            return workHistory
    
    }
}
export default workHistoryReducer