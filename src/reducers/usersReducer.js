import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../constants/user";

const initialState = {
    isLoading: false,
    users: [], 
    error: ""
}

export const usersReducer = (state = initialState, {type, payload}) => {
    switch(type) {

        case FETCH_USERS_REQUEST: {

            return {
                ...state, 
                isLoading: true
            }
        }

        case FETCH_USERS_SUCCESS: {

            return {
                ...state, 
                isLoading: false, 
                users: payload
            }
        }

        case FETCH_USERS_FAILURE: {
            return {
                ...state, 
                isLoading: false, 
                error: payload
            }
        }

        case ADD_USER_REQUEST: {
            return {
                ...state, 
                isLoading: true
            }
        }

        case ADD_USER_FAILURE: {
            return {
                ...state, 
                isLoading: false, 
                error: payload
            }
        }

        case ADD_USER_SUCCESS: {

            const newList = [...state.users];
            newList.push(payload)
            return {
                ...state, 
                users: newList
            }
        }

        default: {
            return state;
        }
    }
}