import { ADD_CONVERSATION_SUCCESS, CREATE_TICKET_FAILURE, CREATE_TICKET_REQUEST, CREATE_TICKET_SUCCESS, DELETE_TICKET_SUCCESS, FETCH_TICKETS_FAILURE, FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, UPDATE_TICKET_SUCCESS } from "../constants/tickets";


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

        case CREATE_TICKET_REQUEST: {
            return {
                ...state, 
                isLoading: true, 
            }
        }
        case CREATE_TICKET_SUCCESS: {
            const prevData = [...state.data];
            prevData.unshift(payload);
            return {
                ...state, 
                isLoading: false, 
                data: prevData
            }
        }

        case CREATE_TICKET_FAILURE: {
            return {
                ...state, 
                isLoading: false, 
                err: payload
            }
        }

        case UPDATE_TICKET_SUCCESS: {

            const {ticketId} = payload;

            const prevData = [...state.data];
            const updatedData = prevData.map(ticket => {
                if(ticket.id === ticketId) {
                    const updatedTicket = {...ticket, ...payload};
                    delete updatedTicket.ticketId
                    return updatedTicket
                } else {
                    return ticket;
                }
            })
            
            return {
                ...state,
                data: updatedData
            }
        }

        case ADD_CONVERSATION_SUCCESS: {
            let updatedData = [...state.data];
            const {ticketId} = payload[0]; 
            updatedData = updatedData.map(ticket => {
                const {id} = ticket;
                if(id === ticketId) {
                    return {
                        ...ticket, 
                        conversations: payload, 
                        conversationCount: ticket.conversationCount + 1
                    }
                } else {
                    return ticket;
                }
            })

            return {
                ...state, 
                data: updatedData
            }
        }

        case DELETE_TICKET_SUCCESS: {
            const id = payload;
            let updatedData = [...state.data];
            updatedData = updatedData.filter(ticket => ticket.id !== id);
            return {
                ...state, 
                data: updatedData
            }
        }

        default: return state;
    }
}

export default TicketsReducer;