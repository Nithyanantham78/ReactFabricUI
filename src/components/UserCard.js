import React,{Fragment} from 'react';

export const UserCard = (props) => {
    return <div className="card" id="cardDiv">
        {props.userDetails.first_name?
     <Fragment><img src={props.userDetails.avatar} alt="Avatar" style={{width:"100%"}}/>
    <div className="container">
      <h4><b>{props.userDetails.first_name}</b></h4> 
      <p>{props.userDetails.last_name}</p> 
    </div></Fragment>:<img src={`http://www.theappguruz.com/public/assets/admin/images/loaders/p10.gif`} style={{width:"100%"}}/>}

    </div>
}

