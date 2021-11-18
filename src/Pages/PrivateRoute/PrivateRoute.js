import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Route, Redirect } from "react-router-dom";
import { CircularProgress } from "@mui/material";
const PrivateRoute = ({ children, ...rest }) => {
  let {currentUser, isLoading} = useAuth();
  if(isLoading){
      return <CircularProgress />
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
      currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
