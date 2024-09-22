// import React from 'react';
// import './hero.scss';
// import ScrollReveal from 'scrollreveal';
// import { easeIn } from 'framer-motion';
// import Typed from 'typed.js';
// import {motion} from 'framer-motion';
// import {Link} from 'react-router-dom'

// const Hero = () => {
//   const textVariants ={
//     initial:{
//       x:-500,
//       opacity:0,
//     },
//     animate:{
//       x:0,
//       opacity:1,
//       transition:{
//         ease:easeIn,
//         duration:1,
//         staggerChildren:0.1,
//       }
//     },
//     scrollButton:{
//       opacity:0,
//       y:10,
//       transition:{
//         duration:2,
//         repeat:Infinity,

//       }
//     }
//   }
//   const sliderVariants = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: '-220%',
//       transition: {
//         repeat: Infinity,
//         duration: 10,
//         repeatType: "mirror", // Corrected property name
//       },
//     },
//     scrollButton:{
//       opacity:0,
//       y:10,
//       transition:{
//         duration:2,
//         repeat:Infinity,

//       }
//     }
//   };
  
  
//   return (
//     <div className='hero'>
//                     <motion.div 
//                     variants={textVariants} 
//                     initial="initial" 
//                     animate="animate" 
//                     className="imageContainer">
//                              <div className='pic'> <motion.img variants={textVariants} src="./photo2.png" alt="" /></div>
//                                <div className='round'>   <div className='moon'></div>   </div>
                               
//                     </motion.div>
//  <motion.div className="textContainer" 
//   variants={textVariants}
//   initial="initial"
//   animate="animate"
//   >
//             <motion.h1 
//               variants={textVariants}> Hey, its me <span >Peyanshu</span>  <br/>and I am a_
//               <span className='multiple-text'></span>
//             </motion.h1>
//             <motion.p variants={textVariants}>I am Full Stack Software Engineer with experience in Website , Mobile and Software development. Check out my project and skills <br />" Turning Vision Into Reality With Code And Design " </motion.p>
//   </motion.div> 

//   <div className="button">
//     {/* <button>see the lastest work</button> */}
//     {/* <button>Contact us</button> */}
//     <Link className='l1' id='Portfolio' to="/Portfolio" >see the lastest work</Link>
//     <Link  className='l1' id='Contact' to="/contact">Contact us</Link>
//   </div>

//   <motion.div variants={textVariants}  
//   animate="scrollButton" 
//   className="scrollbutton">
//   <img   src="./scroll.png" alt="" />
//   </motion.div>
// {/*  */}

//   <motion.div variants={sliderVariants} initial="initial" animate="animate" className='slidetext'>Full-Stack Developer Full-Stack Developer</motion.div>
//   </div>
//   )
// }
//    ScrollReveal({ 
//       reset: true,
//       distance:"80px",
//       duration:2000,
//       easing:easeIn,
//       delay:200
//     });
//     ScrollReveal().reveal('.textContainer', { origin:'top' });
//     ScrollReveal().reveal('.textContainer h1', { origin:'left' });
//     ScrollReveal().reveal('.textContainer p', { origin:'left' });
//     ScrollReveal().reveal('.imageContainer', { origin:'bottom' });

//   const typed = new Typed('.multiple-text',{
//     strings:['Web Developer....','UI/UX Developer','Web Designer'],
//     typedSpeed:500,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true,
//   });
// export default Hero;





import React, { useEffect } from 'react';
import './hero.scss';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: '-220%',
      transition: {
        repeat: Infinity,
        duration: 10,
        repeatType: "mirror",
      },
    },
  };

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 2000,
      easing: "easeIn",
      delay: 200,
    });

    ScrollReveal().reveal('.textContainer', { origin: 'top' });
    ScrollReveal().reveal('.textContainer h1', { origin: 'left' });
    ScrollReveal().reveal('.textContainer p', { origin: 'left' });
    ScrollReveal().reveal('.imageContainer', { origin: 'bottom' });

    // Initialize Typed.js
    const options = {
      strings: ["Web Developer...", "UI/UX Developer", "Web Designer"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };
    const typed = new Typed('.multiple-text', options);
  });

  return (
    <div className='hero'>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="imageContainer"
      >
        <div className='pic'>
          <motion.img variants={textVariants} src="./photo2.png" alt="" />
        </div>
        <div className='round'>
          <div className='moon'></div>
        </div>
      </motion.div>
      <motion.div
        className="textContainer"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={textVariants}>
          Hey, it's me <span>Peyanshu</span> <br /> and I am a_
          <span className='multiple-text'></span>
        </motion.h1>
        <motion.p variants={textVariants}>
          I am a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills <br /> "Turning Vision Into Reality With Code And Design"
        </motion.p>
      </motion.div>

      <div className="button">
        <Link className='l1' id='Portfolio' to="/Portfolio">see the latest work</Link>
        <Link className='l1' id='Contact' to="/contact">Contact us</Link>
      </div>

      <motion.div
        variants={textVariants}
        animate="scrollButton"
        className="scrollbutton"
      >
        <img src="./scroll.png" alt="" />
      </motion.div>

      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className='slidetext'
      >
        Full-Stack Developer Full-Stack Developer
      </motion.div>
    </div>
  );
};

export default Hero;
