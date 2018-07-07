var init = {
    employee:[],
    getEmployee:{}
}
export const EmployeeReducer = (state = init, action) => {
    let result;
    switch (action.type) {
		case "ADD_EMPLOYEE":
            state['employee'].push(action.payload);
            state = {...state,getEmployee:action.payload}
            break;
		case "GET_EMPLOYEE":
            state = {...state,getEmployee:state['employee'][action.payload]} 
			break;
    }
    return state;
}

