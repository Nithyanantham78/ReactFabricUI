import axios from 'axios';
import _ from 'underscore';

export const addEmployee = (payload) => {
        return {
            'type':'ADD_EMPLOYEE',
            'payload': payload
        }
}

export const getEmployee = (id) => {
        return {
            'type': 'GET_EMPLOYEE',
            'payload': id
        }
}

export const employeeAction = (id) => {
      return (dispatch, getState)=>{
        let state = getState().EmployeeReducer.employee;
        let pluck = _.pluck(state,'id');
        let contains = _.contains(pluck,id);
        if(!contains){ 
            axios.get(`https://reqres.in/api/users/${parseInt(id)}`)
            .then((response)=>{
               dispatch(addEmployee(response['data']['data']));
            })    
        }else{
            let getIndex = _.indexOf(pluck,id)
            dispatch(getEmployee(getIndex));
        }
      }
      
}
