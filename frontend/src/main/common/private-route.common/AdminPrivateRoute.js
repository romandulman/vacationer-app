import React from "react";
import { Route, Redirect } from "react-router-dom";

export const AdminPrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      JSON.parse(localStorage.getItem("vacationerToken")).profile.role === 1 ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/allvacations", state: { from: props.location } }}
        />
      )
    }
  />
);
