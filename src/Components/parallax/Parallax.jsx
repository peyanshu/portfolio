import React from 'react';
import './parallax.scss';

import { motion, useTransform, useViewportScroll } from 'framer-motion';

const Parallax = ({ type }) => {
  const { scrollYProgress } = useViewportScroll();
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className='parallax'
      style={{
        background:
          type === "Services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)"
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === 'Services' ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div
        className='planets'
        
        style={{
          y: yBg,
          backgroundImage: `url(${type === "Services" ? "/planets.png" : "/sun.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          position: "absolute",
          width: "100%",
          height: "100%"
        }}
      
      ></motion.div>

      <motion.div style={{ x: yBg }} className='stars'></motion.div>
    </div>
  );
};

export default Parallax;
