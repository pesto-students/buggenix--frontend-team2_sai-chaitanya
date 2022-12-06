import { axiosPrivate } from "../api/axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST, ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE } from "../constants/user"


// FETCH USERS

export const fetchUsers = () => {
    
    return (dispatch) => {

        dispatch(fetchUsersRequest());

        axiosPrivate.get("users").then(res => {
            const {team} = res.data;
            dispatch(fetchUsersSuccess(team));
        }).catch(err => {
            dispatch(fetchUsersFailure(err));
        })
    }
}

// DELETE USER

export const deleteUser = (id) => {
    return (dispatch) => {

        dispatch(deleteUserRequest(id));

        return axiosPrivate.delete(`users/${id}`).then(res => {
            dispatch(deleteUserSuccess(id));
            return true;
        }).catch(err => {
            dispatch(deleteUserFailure(err));
            return false;
        })
    }
}

// ADD USER 

export const addUser = (payload) => {
    return dispatch => {
        dispatch(addUserRequest());
        return axiosPrivate.post("users", payload).then(res => {
            const {data: user} = res || {};
            dispatch(addUserSuccess(user));
            return true
        }).catch(err => {
            dispatch(addUserFailure(err));
            return false;
        })
    }
}


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

const addUserSuccess = (payload) => {
    return {
        type: ADD_USER_SUCCESS, 
        payload
    }
}
const addUserFailure = () => {
    return {
        type: ADD_USER_FAILURE
    }
}

const deleteUserRequest = () => {
    return {
        type: DELETE_USER_REQUEST
    }
}
const deleteUserSuccess = (id) => {
    return {
        type: DELETE_USER_SUCCESS, 
        payload: id
    }
}
const deleteUserFailure = () => {
    return {
        type: DELETE_USER_FAILURE
    }
}


