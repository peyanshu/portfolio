import React, { useRef } from 'react';
import './Portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  
  {
    id: 1,
    title: "react commerce",
    img: "https://i.pinimg.com/originals/ed/0b/69/ed0b69fd4ddba4c91b680fa31a27ddb0.gif",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita temporibus repellendus magnam iusto pariatur sequi est nam velit",
  },
  {
    id: 2,
    title: "react commerce",
    img: "https://i.pinimg.com/originals/d0/24/9d/d0249d76a9750a1a1e45c9d809b87c70.gif",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita temporibus repellendus magnam iusto pariatur sequi est nam velit",
  },
  {
    id: 3,
    title: "react commerce",
    img: "https://i.pinimg.com/originals/64/8e/58/648e58d071568bba75276ea8f632a7ad.gif",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita temporibus repellendus magnam iusto pariatur sequi est nam velit",
  },
  {
    id: 4,
    title: "react commerce",
    img: "https://i.pinimg.com/564x/68/97/8c/68978cb8aa6cdb78981d6981af1a8627.jpg",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita temporibus repellendus magnam iusto pariatur sequi est nam velit",
  },
];

const SingleItem = ({ item }) => {
       const ref =useRef(); 
       const { scrollYProgress } = useScroll({
          target: ref,
          
        });
        const y = useTransform(scrollYProgress ,[0,1],[-200,200],TransitionEvent)
  return (
    <section >
       <motion.div className="container" >
     <div className="wrapper"> 
      <div className="imagecontainer" ref={ref}> 
           <img src={item.img} 
           alt={item.title} />
       </div>
     <motion.div className="textcontainer" style={{y}}>
        <h2>{item.title}</h2>
         <p>{item.des}</p>
       <button>See Demo</button>
      </motion.div>
     </div>
     </motion.div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30, 
  });

  return (
    <div className='Portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map(item => ( 
        <SingleItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
