import './app.scss'
import Hero from './Components/hero/Hero';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './Components/narbar/Navbar';
import Parallax from './Components/parallax/Parallax';
import Parallax2 from './Components/parallax/Parallax';
import Abouts from './Components/abouts/Abouts';
import Portfolio from './Components/porfolio/Portfolio';
import './index.css'
import Contact from './Components/contact/Contact';
import { Route,Routes } from 'react-router-dom'
import Cursor from './Components/cursor/Cursor';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
<>
<div className='main'>
     <Cursor/>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>    

    <section id='Services'><Parallax type="Services"/></section>
    <section id='Abouts'><Abouts/></section>
    <div className='portfolio'id='Portfolio'><Portfolio/></div>
   <section id='Contact'> <Contact/></section>
{/* <section> 
   <Routes>
    <Route path="/contact" element={<Contact/>}> <Contact/></Route>
   </Routes>
</section> */}
</div>

  </>
  )
};

export default App;
