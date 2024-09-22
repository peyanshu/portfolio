import React from 'react'
import './Abouts.scss'

const Abouts = () => {
          
  return (
    <div className='flex '>
          <div className=" left w-1/2 h-screen relative " >
            <h1 >About me</h1> 
            <p>I am a full stack developer, I build full stack websites and mobile applications, I will solve all your business problems.! am open to freelance work.    <br/>     <br/>  
              I am a specialized MERN stack developer, your go-to solution for crafting full-stack websites and mobile applications. With a passion for problem-solving and innovation, I excel in creating seamless digital experiences tailored to your business needs.    <br/>    <br/>
                Specializing in MongoDB, Express js. React.js, and Nodejs. | leverage the power of the MERN stack to deliver robust and dynamic solutions that exceed expectations. Whether you need a sleek website or a feature-rich mobile app. I have the skills to bring your vision to life.    <br/>    <br/>
                My commitment to clean, efficient code ensures easy maintenance and scalability, while my understanding of business challenges enables me to develop custom solutions that address your specifc needs.</p>  
          </div>
          <div className="right w-1/2">
                    <h1>Skills</h1>
                    <div className='box' id="HTML">HTML</div>
                    <div className='box' id="CSS">CSS/scss</div>
                    <div className='box' id="Javascript">Javascript</div>
                    <div className='box' id="MongoDb">MongoDb</div>
                    <div className='box' id="Express">Express</div>
                    <div className='box' id="Node">Node.js</div>
                    <div className='box' id="React">React.js</div>
                    <div className='box' id="Tailwind">Tailwind css</div>
                    <div className='box' id="Redux">Redux</div>
                    <div className='box' id="FramerMotion">Framer Motion</div>
                    <div className='box' id="c">C/Java</div>
                    <div className='box' id="leadership">Leadership</div>
                    <div className='box' id="git">Git/Github</div>
                    
          </div>
    </div>
  )
}

export default Abouts;