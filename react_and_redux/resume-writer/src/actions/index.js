//WORK-HISTORY-ACTIONS

export const addWorkHistory = (work) =>{
    return {
        type: "ADD_WORK_HISTORY",
        payload: work
    }
}
export const deleteJob = (job) =>{
    return {
        type: "DELETE_JOB",
        payload: job
    }
}
export const clearHistory = () => {
    return {
        type: "CLEAR_HISTORY"
    }
}
//PERSONNEL-ACTIONS

export const addPersonnel = (personnel) =>{
    return {
        type: "ADD_PERSONNEL",
        payload: personnel
    }
}

export const clearPersonnel = () =>{
    return {
        type: "CLEAR_PERSONNEL"
    }
}
