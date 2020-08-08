import React from "react";
import FriendCard from "./FriendCard";

const FriendsList = (props) => {
  return (
    <div className="friend-card">
      {props.friends.map((friend) => {
        return <FriendCard key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
