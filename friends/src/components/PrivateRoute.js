import React from "react";
import { Route, Redirect } from "react-router-dom";
// import Loader from "react-loader-spinner";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("authToken")) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
