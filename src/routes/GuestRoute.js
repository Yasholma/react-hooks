import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../store";
import AnimatedRoute from "./AnimatedRoutes";

const GuestRoute = (props) => {
  const [isLoggedIn] = useContext(AppContext);
  if (isLoggedIn) return <Redirect to="/" />;

  return <AnimatedRoute>{props.children}</AnimatedRoute>;
};

export default GuestRoute;
