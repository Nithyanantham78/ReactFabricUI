var init = {
    employee:[],
    getEmployee:{}
}
export const EmployeeReducer = (state = init, action) => {
    let result;
    switch (action.type) {
        case "ADD_EMPLOYEE":
            let newEmployList = [...state['employee']].push(action.payload)
		    return {employee: newEmployList,getEmployee:action.payload};
            break;
		case "GET_EMPLOYEE":
            return {...state,getEmployee:state['employee'][action.payload]}
			break;
        default:
            return state;
    }
}

