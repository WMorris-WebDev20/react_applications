const contactReducer = (contact = [] , action) => {
        switch(action.type) { 

            case "ADD_CONTACT":
                return contact = [...contact, action.payload]                

            case "CLEAR_CONTACTS":
            return contact = []

            case "DELETE_PERSON":
                return  contact = contact.filter((item, index) => index !== action.payload)   
                
            default:
                return contact
        }
    }
    
export default contactReducer
