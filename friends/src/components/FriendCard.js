import React from "react";

const FriendCard = (props) => {
  return (
    <div className="friend-card">
      <h2>My Friend</h2>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      <h5>{props.email}</h5>
    </div>
  );
};

export default FriendCard;
