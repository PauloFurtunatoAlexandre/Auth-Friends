import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  const logout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {localStorage.getItem("authToken") ? (
              <div onClick={() => logout()}>Log Out</div>
            ) : (
              <Link to="/friends">Log In</Link>
            )}
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" render={Welcome} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friends" component={Friends} />
          {/* <Route component={Login} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
