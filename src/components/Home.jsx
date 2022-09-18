import React from 'react'
// import HeroImage from "../assets/profile.jpg";
// import {IoIosArrowForward} from 'react-icons/io'
import Aos from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';

const Home = () => {

    Aos.init();

  return (
    // name property is for smooth scroll
    <div name="home" className='h-screen w-full bg-sand' >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='text-5xl text-left flex flex-col justify-center md:text-8xl
        text-bearbrown md:pt-18 tracking-widest leading-relaxed'>
          <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" >CODER,</h1>
          <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="600" className='pt-4'>DESIGNER,</h1>
          <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="1200" className='pt-4'>CREATIVE THINKER</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
