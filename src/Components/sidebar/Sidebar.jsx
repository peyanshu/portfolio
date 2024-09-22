import React, { useState } from 'react'
import './sidebar.scss'
import Linkss from './linkss/Linkss'
import Togglebutton from './togglebutton/Togglebutton'
import {motion} from 'framer-motion';

const Sidebar = () => {
const [open, setOpen] = useState(false)
  const variants ={
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:20,
        duration:0.3
      }
    },
    closed:{
       clipPath:"circle(30px at 50px 50px)",
       transition:{
        delay:0.3,
        type:"spring",
        stiffness:400,
        damping:40
       }

    }
  }
  return (
    <motion.div className='sidebar ' animate={open?"open" :"closed"}>
      <motion.div className="bg" variants={variants}>
        <Linkss/>
      </motion.div>
      <Togglebutton setOpen={setOpen}/>
    </motion.div>
  )
};

export default Sidebar;