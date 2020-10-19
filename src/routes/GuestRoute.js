import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../store";
import AnimatedRoute from "./AnimatedRoutes";

const GuestRoute = (props) => {
  const [isLoggedIn] = useContext(AppContext);
  if (isLoggedIn)
    return (
      <AnimatedRoute>
        <Redirect to="/" />
      </AnimatedRoute>
    );

  return <AnimatedRoute>{props.children}</AnimatedRoute>;
};

export default GuestRoute;
