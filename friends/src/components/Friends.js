import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import "./Friends.scss";

import FriendList from "./FriendList";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setFriends(res.data);
      })

      .catch((err) => console.error("could not fetch from API: ", err.message));
  }, []);
  console.log("added friends to render", friends);

  return (
    <div className="friends-list">
        <FriendList friends={friends} />
    </div>
  );
};

export default Friends;
