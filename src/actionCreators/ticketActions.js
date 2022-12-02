import { axiosPrivate } from "../api/axios"
import { DELETE_TICKET_FAILURE, DELETE_TICKET_REQUEST, DELETE_TICKET_SUCCESS, FETCH_TICKETS_FAILURE, FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS } from "../constants/tickets";

// Fetch

export const fetchTickets = () => {
    return function(dispatch) {
        dispatch(fetchTicketsRequest())
        return axiosPrivate.get("tickets")
            .then(res => {
                const {tickets} = res || {};
                dispatch(fetchTicketsSuccess(tickets));
                return true;
            })
            .catch(err => {
                dispatch(fetchTicketsFailure(err));
                return false
            })
    }
}


// Delete

// export const deleteTicket = (ticketId) => {
//     return function(dispatch) {
//         dispatch(deleteTicketRequest());
//         axiosPrivate.delete("ticket/" + ticketId).then(res => {
            
//             console.log(res)
//             return true;
//         }).catch(err => {

//         })
//     }
// }


const deleteTicketRequest = () => {
    return {
        type: DELETE_TICKET_REQUEST
    }
}

const deleteTicketSuccess = () => {
    return {
        type: DELETE_TICKET_SUCCESS
    }
}

const deleteTicketFailure = () => {
    return {
        type: DELETE_TICKET_FAILURE
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

