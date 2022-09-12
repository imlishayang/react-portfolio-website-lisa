import React from 'react'
import HeroImage from "../assets/profile.jpg";

const About = () => {
  return (
    <div name="about"
    className='bg-sand'>
      <div className='max-w-screen-lg mx-auto flex flex-col h-full px-4 '>

        <h2 className='text-5xl inline  text-bearbrown py-4 tracking-widest text-left py-20'>(001) Who am i?</h2>
        <div className='grid grid-cols-2'>
          <div className="rounded-full object-scale-down mx-auto w-80 md:w-full pt-80 md:pt-0">
            <img src={HeroImage} alt="Lisa's Profile" className='rounded-full w-2/5'/>
          </div>
          <p className='text-2xl text-bearbrown pt-10 leading-normal'> Hello! I'm Lisa! I like to write code.
           I enjoy creating websites where aesthetics meets functionality. </p>
           </div>
     </div>
    </div>
  )
}

export default About
