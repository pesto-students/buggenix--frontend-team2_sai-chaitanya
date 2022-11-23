import {createStore, applyMiddleware } from 'redux';
import { usersReducer } from './reducers/usersReducer';
import thunkMiddleware from "redux-thunk";


const store = createStore(usersReducer, applyMiddleware(thunkMiddleware)); //insert reducers in this

export default store;
 