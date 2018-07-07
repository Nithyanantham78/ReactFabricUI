import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { EmployeeReducer } from './reducer/EmployeeReducer.js';


export const store = createStore(combineReducers({ EmployeeReducer }),applyMiddleware(thunkMiddleware));


