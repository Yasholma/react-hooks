import React from "react";
import { motion } from "framer-motion";
import { Route } from "react-router-dom";

const AnimatedRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}>
      <motion.div
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        exit={{ scale: 0, x: 200 }}
      >
        {children}
      </motion.div>
    </Route>
  );
};

export default AnimatedRoute;
