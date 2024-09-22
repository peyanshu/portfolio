import React from 'react'
import { motion } from 'framer-motion'

const variants = {

  open: {
    transition: {
      staggerChildren: 0.1,
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const Linkss = () => {
  const items = ["Homepage", "Portfolio",  "Abouts","Contact"]

  return (
    <motion.div className='Linkss' variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTrap={{scale:0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Linkss;
