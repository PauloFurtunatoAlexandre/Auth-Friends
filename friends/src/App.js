import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends";
import Login from "./components/Login";

function App() {
  const logout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  let history = useHistory();
  const friendsPage = () => history.push("/friends");

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            {localStorage.getItem("authToken") ? (
              <div onClick={() => logout()}>Log Out</div>
            ) : (
              <Link to="/friends" onClick={friendsPage}>
                Log In
              </Link>
            )}
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={Friends} />
          {/* <Route component={Login} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
