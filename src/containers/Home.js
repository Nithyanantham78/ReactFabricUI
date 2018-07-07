import React from 'react';
import { connect } from 'react-redux';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { DropDownComponent } from '../components/DropDownComponent'
import {UserCard} from '../components/UserCard'
import {employeeAction} from '../redux/action/EmployeeAction.js';
import '../assets/css/styles.css';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {department:'',employeeID:'',keyDepartment:1,keyEmployee:1}
        this.dropdownData = {'hr':[
            {key:'',text:"SELECT EMPLOYEE ID"},        
            { key: 1, text: 1 },
            { key: 2, text: 2 },
            { key: 3, text: 3 },
            { key: 4, text: 4 },
            { key: 5, text: 5 }
          ],
        'employee':[
            {key:'',text:"SELECT EMPLOYEE ID"},
          { key: 6, text: 6 },
          { key: 7, text: 7 },
          { key: 8, text: 8 },
          { key: 9, text: 9 },
          { key: 10, text: 10 }
        ]}  
    }

    onChangeEvent = (e) => {
        if(e.key === 'hr' || e.key === 'employee'){
            this.setState((preState)=>({
                department:e.key,keyEmployee:preState.keyEmployee+1
            }))
        }else if(e.text==='SELECT EMPLOYEE ID'){
            this.setState((preState)=>({
                employeeID:e.key
            }))
        }else if(e.text==='SELECT DEPARTMENT'){
            this.setState((preState)=>({
                department:'',employeeID:'',keyEmployee:preState.keyEmployee-1
            }))
        }else{
            this.setState((preState)=>({
                employeeID:e.text
            }))
        }
    }
    onClearEvent = () => {
        this.setState((preState)=>({department:'',employeeId:'',clear:true,keyDepartment:preState.keyDepartment+1,keyEmployee:preState.keyEmployee+1}))
    }
    fetchData = (e) => {
        this.props.employeeAction(this.state.employeeID);
    }


    render() {
        let buttonState = this.state.department&&this.state.employeeID?false:true;
        return <div>
            <div className="ms-Grid">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg10 page-heading"><h1>Employee Records</h1></div>
                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg9">
          <DropDownComponent placeHolder="SELECT DEPARTMENT" onChangeEvent={this.onChangeEvent} data={[{key:'',text:'SELECT DEPARTMENT'},{key:'hr',text:'HR'},{key:'employee',text:'Employee'}]} id='department' key={this.state.keyDepartment+'_dep'} label="Department"/>
          <DropDownComponent placeHolder="SELECT EMPLOYEE ID" onChangeEvent={this.onChangeEvent} data={this.state.department?this.dropdownData[this.state.department]:[]} key={this.state.keyEmployee+'_emp'} id='employee' label="Employee Id"/>
          <div className="buttonClass">
          <DefaultButton primary={true} text="Get Details" disabled={buttonState} onClick={this.fetchData} style={{marginRight:"3%"}}/>
          <DefaultButton primary={true} text="Clear" onClick={this.onClearEvent}/>
          </div>
    </div>
    {this.props.employeeData.first_name?
    <UserCard userDetails={this.props.employeeData}/>:''}
     </div>
        </div>    
         </div>
            
    }

}

const mapStateToProps = (state) => {
    let employee = {'first_name':'','last_name':'','avatar':''}
    return {
        employeeData:typeof state.EmployeeReducer.getEmployee.first_name !== 'undefined'&&state.EmployeeReducer.getEmployee.first_name?state.EmployeeReducer.getEmployee:employee
    }
}

const mapDispatchToProps = { employeeAction  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);