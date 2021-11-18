import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Route, Redirect } from "react-router-dom";
import { CircularProgress } from "@mui/material";
const AdminRoute = ({ children, ...rest }) => {
  let {currentUser, admin, isLoading} = useAuth();
  if(isLoading){
      return <CircularProgress />
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
      currentUser && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
