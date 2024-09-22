import React from 'react'
import {easeInOut, motion} from 'framer-motion'
import './navbar.scss'
import Sidebar from '../sidebar/Sidebar'
import { IoLogoGithub } from 'react-icons/io5';
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
      <div className='wrapper'>
        <motion.span 
        initial={{opacity:0 ,scale:0}} 
        animate={{opacity:1 ,scale:1}}
        transition={{duration:.9, ease:[0.25, 1, 0.5, 1]}}
        >Full-Stack Dev.
        </motion.span>
        <div className='social'>
                  <a href="#">< FaTwitter /></a>
                  <a href="https://www.linkedin.com/in/peyanshu-verma-a91977255/"><FaLinkedin /></a>
                  <a href="#"><IoLogoInstagram /></a>
                  <a href="https://github.com/peyanshu"><IoLogoGithub /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar