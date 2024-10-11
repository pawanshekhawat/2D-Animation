import React from "react";
import { anticipate, motion } from "framer-motion";
const App = () => {
  return (
    <div>
      <motion.div
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 1000,
          bottom: 300,
        }}
        // dragDirectionLock="true"
        whileTap={{
          scale: 2
        }}
        animate={{
          x: 1000,
          y: 300,
        }}
        transition={{
          duration: 2,
          delay: 1,
          ease: "anticipate",
        }}
        id="box"
      ></motion.div>
      <motion.h1 id="head">hello</motion.h1>
    </div>
  );
};

export default App;
