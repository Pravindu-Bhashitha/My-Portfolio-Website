import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/Heroimage2';
import AboutContent from '../components/AboutContent';
import ME from '../assets/Me.jpg';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading="ABOUT" text="I am a full stack developer who is currently reading for my BSc.(Hons) information technology degree in university of Moratuwa." img={ME}/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About;