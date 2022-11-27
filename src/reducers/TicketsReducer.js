import { FETCH_TICKETS_FAILURE, FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS } from "../constants/tickets";


const initialState = {
    isLoading: false, 
    data: [], 
    error: ""
}

const TicketsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_TICKETS_REQUEST: {
            return {
                ...state, 
                isLoading: true
            }
        }

        case FETCH_TICKETS_SUCCESS: {
            return {
                ...state, 
                isLoading: false, 
                data: payload
            }
        }

        case FETCH_TICKETS_FAILURE: {
            return {
                ...state, 
                isLoading: false, 
                error: payload
            }
        }

        default: return state;
    }
}

export default TicketsReducer;