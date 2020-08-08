import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

import "./Login.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const onLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then((res) => {
        localStorage.setItem("authToken", res.data.payload);
        history.push("/friends");
      })
      .catch((err) => console.error("Something went wrong: ", err.message));
  };

  const handleChange = (e) => {
    e.preventDefault()
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value});
  };

  return (
    <div>
      <form onSubmit={onLogin}>
        <h3>Log in</h3>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />

        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
