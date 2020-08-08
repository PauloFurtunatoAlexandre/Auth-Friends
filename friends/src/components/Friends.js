import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import FriendCard from "./FriendCard";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  const GetFriends = () => {
    useEffect(() => {
      debugger;
      axiosWithAuth()
        .get("/friends")
        .then((res) => {
          setFriends(res.data);
        })

        .catch((err) =>
          console.error("could not fetch from API: ", err.message)
        );
    }, [friends]);
    console.log(friends);

    return friends;
  };

  return (
    <div className="friends-list">
      {friends.map((friend) => {
        return <FriendCard key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default Friends;
