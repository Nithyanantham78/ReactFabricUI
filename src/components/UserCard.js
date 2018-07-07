import React from 'react';

export const UserCard = (props) => {
    let imageLoad = () => {
     document.getElementById('cardDiv').style.display = "block";
    }
    return <div className="card" id="cardDiv" style={{display:"none"}} onLoad={imageLoad}>
    <img src={props.userDetails.avatar} alt="Avatar" style={{width:"100%"}}/>
    <div className="container">
      <h4><b>{props.userDetails.first_name}</b></h4> 
      <p>{props.userDetails.last_name}</p> 
    </div>
    </div>
}

