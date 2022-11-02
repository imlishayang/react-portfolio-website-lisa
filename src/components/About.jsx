import React from 'react'
import HeroImage from "../assets/profile.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';



const About = () => {

    Aos.init();

  return (
    <div name="about" className='bg-sand'>
      <div className='max-w-screen-lg mx-auto flex flex-col h-full px-4 '>
        <h2 className='text-4xl md:text-5xl inline  text-bearbrown py-6 tracking-widest text-left pt-20 pb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Who am i?
        </h2>

        <div className='md:flex'>
          <div data-aos-duration="2000" data-aos-once="true" data-aos-delay="1000">
            <img src={HeroImage} alt="Lisa's Profile" width="600" height="800" className='rounded-full'/>
          </div>
          <div className='text-2xl text-bearbrown pt-10 leading-normal mx-auto md:ml-6 md:text-2xl tracking-wider' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="500">
            <p> Hello! I'm Lisa:)</p>
            <p> I'm a junior full stack web developer. </p>
            <p> I recently completed an intensive web development bootcamp  at <a href="https://www.lewagon.com/shanghai" target="_blank" rel="noopener noreferrer" className='hover:line-through'>Le Wagon, Shanghai.</a> </p>
            <p className='pt-10' > I’m currently learning Javascript and React to further my frontend dev skills. Check out my progress <a href="https://html-space.netlify.com" target="_blank" rel="noopener noreferrer" className='hover:line-through'>here</a>.</p>
            <p className='py-10' > I am open to part-time and freelance projects</p>
          </div>
        </div>
     </div>
    </div>
  )
}

export default About
