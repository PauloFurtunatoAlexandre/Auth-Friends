import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
  console.log(friends);

  return (
    <div className="friends-list">
        <FriendList friends={friends} />
    </div>
  );
};

export default Friends;
