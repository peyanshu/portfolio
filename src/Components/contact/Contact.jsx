import React, { useRef, useState } from 'react';

import './contact.scss';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Routes , Route, NavLink } from 'react-router-dom'

const variants = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};


const Contact = () => {
  const ref=useRef();
  const formRef=useRef();
  const isInview =useInView(ref,{margin:"-100px"})
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5wjsfwa', 'template_h50vzxs', formRef.current, {
        publicKey: 'JcReAQC-7wse0LsXH',
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log(error)
        }
      );
  };


  return (
    <motion.div className='contact' 
    variants={variants}
     initial="initial"
     whileInView="animate"
     ref={ref}>
      <motion.div className="textcontainer" variants={variants}>
        <motion.h1>Lets work <br />together</motion.h1>
        <motion.div className="items">
          <motion.h2 variants={variants}>Mails <br /> <span>Peyanshu.verma.10@gmail.com</span></motion.h2>
          <motion.h2 variants={variants}>Address<br /><span>Bhopal</span></motion.h2>
          <motion.h2 variants={variants}>Phone   <br />  <span>+91 23456789</span></motion.h2>
        </motion.div>
      </motion.div>

      <motion.div className="formcontainer" variants={variants}>
      <motion.div className="phonesvg"
        initial={{opacity:1}}
        whileInView={{opacity:0}}
        transition={{duration:1, delay:2}}
       >

      <svg width="500px" height="500px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path initial={{pathLength:0}} animate={isInview && {pathLength:1}} transition={{duration:2}} d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10" stroke="#fff"  />
<motion.path initial={{pathLength:0}} animate={isInview && {pathLength:1}} transition={{duration:2}} d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="#fff"/>
<motion.path initial={{pathLength:0}} animate={isInview && {pathLength:1}} transition={{duration:2}} d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" stroke="#fff" />
</svg>
      </motion.div>
        <motion.form
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:1, delay:3}} 
         onSubmit={sendEmail}
         ref={formRef}
         >
 
          <input type='text' required placeholder='Name' name='name' />
          <input type='text' required placeholder='Email'name='email' />
          <textarea placeholder='Message' rows={8} name='message' ></textarea>
          <button type="submit">Submit</button>
           {error && <p className="error">Error sending message. Please try again.</p>}
           {success && <p className="success">Message sent successfully!</p>}
        </motion.form>
      </motion.div> 
      
      
    </motion.div>
  );
}

export default Contact;
