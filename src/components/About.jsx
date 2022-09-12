import React from 'react'
import HeroImage from "../assets/profile.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';



const About = () => {

    Aos.init();

  return (
    <div name="about" className='bg-sand'>
      <div className='max-w-screen-lg mx-auto flex flex-col h-full px-4 '>

        <h2 className='text-4xl md:text-5xl inline  text-bearbrown py-6 tracking-widest text-left pt-24' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Who am i?
        </h2>

        <div className='flex'>

          <div>
            <img src={HeroImage} alt="Lisa's Profile" className='rounded-full' data-aos-duration="2000" data-aos-once="true" data-aos-delay="1000"/>
          </div>

            <div className='text-2xl text-bearbrown pt-10 leading-normal mx-auto md:mx-32 md:text-3xl tracking-wider' data-aos="fade-up" data-aos-duration="2000"          data-aos-once="true" data-aos-delay="1000">
              <p> Hello! I'm Lisa:)</p>
              <p> I'm a junior full stack web developer. I recently completed an intensive web development bootcamp  at <a href="https://www.lewagon.com/shanghai" className='hover:line-through'>Le Wagon, Shanghai.</a> </p>
              <p className='pt-10' data-aos-duration="2000" data-aos-once="true" data-aos-delay="900">
              I’m currently learning Javascript and React to further my frontend dev skills</p>
          </div>

        </div>
     </div>
    </div>
  )
}

export default About
