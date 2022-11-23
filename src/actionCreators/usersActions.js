import axios, { axiosPrivate } from "../api/axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST, ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILURE } from "../constants/user"
import useAxiosPrivate from "../hooks/useAxiosPrivate"


const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS, 
        payload: users
    }
}

const fetchUsersFailure = (err) => {
    return {
        type: FETCH_USERS_FAILURE, 
        payload: err
    }
}  

const addUserRequest = () => {
    return {
        type: ADD_USER_REQUEST
    }
}

const addUserSuccess = () => {
    return {
        type: ADD_USER_SUCCESS
    }
}
const addUserFailure = () => {
    return {
        type: ADD_USER_FAILURE
    }
}

export const addUser = () => {
    return (dispatch) => {
        dispatch(addUserRequest());
    }
}


//this is a functional component
export const fetchUsers = () => {
    //making the api call
    
    return (dispatch) => {

        dispatch(fetchUsersRequest());
        fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json())
            .then(data => {
                dispatch(fetchUsersSuccess(data));
            })
            .catch(err => {
                dispatch(fetchUsersFailure(err));
            })
        

    }
}