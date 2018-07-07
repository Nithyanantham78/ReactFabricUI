import React from 'react';
import {Dropdown} from 'office-ui-fabric-react/lib/Dropdown';
import PropTypes from 'prop-types';
import '../assets/css/styles.css'

export const DropDownComponent = (props) =>{
    return <div>
         <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4"><Dropdown
          placeHolder={props.placeHolder}
          label={props.label}
          id={props.id}
          required={true}
          ariaLabel={props.label}
          options={props.data}
          onChanged={(e)=>{props.onChangeEvent(e)}}
          key={props.key}
        /></div>
    </div>
}

DropDownComponent.propTypes = {
    data: PropTypes.array.isRequired,
    onChangeEvent:PropTypes.func.isRequired
}