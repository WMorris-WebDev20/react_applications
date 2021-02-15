
const personnelReducer = (personnel = [], action) => {
    switch(action.type) {
        
        case "ADD_PERSONNEL":

            return personnel = [action.payload]

        case "CLEAR_PERSONNEL":

            return personnel = []

       default:
            return personnel
    }
}

export default personnelReducer

