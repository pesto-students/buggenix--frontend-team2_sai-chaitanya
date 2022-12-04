import axios, { axiosPrivate } from "../api/axios"
import { ADD_CONVERSATION_FAILURE, ADD_CONVERSATION_SUCCESS, CREATE_TICKET_FAILURE, CREATE_TICKET_REQUEST, CREATE_TICKET_SUCCESS, DELETE_TICKET_FAILURE, DELETE_TICKET_REQUEST, DELETE_TICKET_SUCCESS, FETCH_TICKETS_FAILURE, FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, UPDATE_TICKET_FAILURE, UPDATE_TICKET_SUCCESS } from "../constants/tickets";

// Fetch

export const fetchTickets = () => {
    return function(dispatch) {
        dispatch(fetchTicketsRequest())
        return axiosPrivate.get("tickets")
            .then(res => {
                const {data} = res || {};
                dispatch(fetchTicketsSuccess(data));
                return true;
            })
            .catch(err => {
                dispatch(fetchTicketsFailure(err));
                return false
            })
    }
}

// CREATE TICKET

export const createTicket = (payload) => {
    return function(dispatch) {
        dispatch(createTicketRequest());
        return new Promise((resolve, reject) => {
            axiosPrivate.post("tickets", payload)
            .then(res => {
                const {data} = res || {};
                dispatch(createTicketSuccess(data));
                resolve()
                // return true;
            })
            .catch(err => {
                dispatch(createTicketFailure(err));
                reject();
                // return false;
            })

        })
    }
}


// UPDATE TICKET 

export const updateTicket = (payload) => {
    return function(dispatch) {
        //id, property
        //ticketId
        return axiosPrivate.put("tickets", payload)
            .then(res => {
                dispatch(updateTicketSuccess(payload));
                return true 
            })
            .catch(err => {
                dispatch(updateTicketFailure(err));
                return false;
            })
    }
}

// DELETE TICKET

export const deleteTicket = (id) => {
    return function(dispatch) {
        return new Promise((resolve, reject) => {
            axiosPrivate.delete("tickets/" + id).then(res => {
                dispatch(deleteTicketSuccess(id));
                resolve();
            }).catch(err => {
                reject();
            })
        })
    }
}

export const deleteTicketSuccess = (id) => {
    return {
        type: DELETE_TICKET_SUCCESS, 
        payload: id
    }
}

export const addConversation = (payload) => {
    return function(dispatch) {
        return axiosPrivate.post("notes", payload)
            .then(res => {
                const {data} = res || {}; 
                dispatch(addConversationSuccess(data));
                return true
            }).catch(err => {
                return false
            })
    }
} 

const addConversationSuccess = (payload) => {
    return {
        type: ADD_CONVERSATION_SUCCESS, 
        payload
    }
}

const updateTicketSuccess = (payload) => {
    return {
        type: UPDATE_TICKET_SUCCESS, 
        payload
    }
}

const updateTicketFailure = () => {
    return {
        type: UPDATE_TICKET_FAILURE, 
    }
}

const createTicketRequest = () => {
    return {
        type: CREATE_TICKET_REQUEST
    }
}

const createTicketSuccess = (payload) => {
    return {
        type: CREATE_TICKET_SUCCESS, 
        payload
    }
}

const createTicketFailure = (err) => {
    return {
        type: CREATE_TICKET_FAILURE, 
        payload: err
    }
}


const fetchTicketsRequest = () => {
    return {
        type: FETCH_TICKETS_REQUEST
    }
}

const fetchTicketsSuccess = (payload) => {
    return {
        type: FETCH_TICKETS_SUCCESS, 
        payload
    }
}  

const fetchTicketsFailure = (payload) => {
    return {
        type: FETCH_TICKETS_FAILURE, 
        payload
    }
}

