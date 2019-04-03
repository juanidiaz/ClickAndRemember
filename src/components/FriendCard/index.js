import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.data.name} src={props.data.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.data.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.data.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.data.location}
          </li>
        </ul>
      </div>
      <span className="remove" onClick={props.handleDeleteFriend(props.data.id)}>𝘅</span>
    </div>
  );
}

export default FriendCard;
