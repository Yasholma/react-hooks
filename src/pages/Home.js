import { motion } from "framer-motion";
import React from "react";

const Home = () => {
  return (
    <div className="flex h-screen bg-blue-700">
      <motion.h1
        initial={{ opacity: 0, y: -300, scale: 0 }}
        animate={{
          scale: 1.2,
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
          rotate: 360,
        }}
        className="m-auto text-3xl"
      >
        Welcome Home
      </motion.h1>
    </div>
  );
};

export default Home;
