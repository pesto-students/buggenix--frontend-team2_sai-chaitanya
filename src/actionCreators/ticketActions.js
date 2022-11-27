import { axiosPrivate } from "../api/axios"
import { FETCH_TICKETS_FAILURE, FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS } from "../constants/tickets";

export const fetchTickets = () => { //thunk 
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