import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS, DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../constants/user";

const initialState = {
    isLoading: false,
    usersList: [], 
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
                usersList: payload
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

            const newList = [...state.usersList];
            newList.push(payload)
            return {
                ...state, 
                usersList: newList
            }
        }
        
        case DELETE_USER_REQUEST: {
            return {
                ...state, 
                isLoading: true
            }
        }


        case DELETE_USER_SUCCESS: {
            const id = payload;
            const usersList = state.usersList.filter(user => user._id !== id);
            return {
                ...state, 
                usersList
            }
        }

        case DELETE_USER_FAILURE: {
            return {
                ...state, 
                isLoading: false, 
                error: payload
            }
        }

        default: {
            return state;
        }
    }
}