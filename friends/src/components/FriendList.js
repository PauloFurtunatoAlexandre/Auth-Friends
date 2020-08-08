import React from "react";

import "./FriendList.scss";

const FriendsList = (props) => {
  return (
    <div className="friend-card">
      {props.friends.map((friend) => {
        return (
          <div key={friend.id} className="card">
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <h5>{friend.email}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
