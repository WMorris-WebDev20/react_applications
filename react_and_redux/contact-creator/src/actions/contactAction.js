export const addContact = (contacts) =>{
    return{
        type: "ADD_CONTACT",
        payload: contacts
    }
}
export const clearContacts = () =>{
    return {
        type: "CLEAR_CONTACTS"
    }
}
export const deletePerson = (index) => {
    return {
        type: "DELETE_PERSON",
        payload: index
    }
}
export const filterContacts = (filter) => {
    return {
        type: "FILTER_CONTACT",
        payload: filter
    }
}
