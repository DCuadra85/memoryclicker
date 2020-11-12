import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card col-3-md" onClick={()=> props.clickCharacter(props.id)}>
      <div className="img-container" id={props.id}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;