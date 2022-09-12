import React from 'react'
import figma from "../assets/figma.png";
import github from "../assets/github.png";
import tailwindimg from "../assets/tailwind.png";
import rubyonrails from "../assets/rubyonrails.jpg";
import htmlimg from "../assets/html.png";
import cssimg from "../assets/css.png";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  Aos.init();

  const techs = [
    {
      id:1,
      src: htmlimg,
      title: 'HTML',
    },
    {
      id:2,
      src: cssimg,
      title: 'CSS',
    },
    {
      id:3,
      src: rubyonrails,
      title: 'Ruby on Rails',
    },
    {
      id:4,
      src: figma,
      title: 'Figma',
    },
    {
      id:5,
      src: tailwindimg,
      title: 'Tailwind',
    },
    {
      id:6,
      src: github,
      title: 'Github',
    },
  ]

  return (
    <div name="experience" className='bg-sand w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-bearbrown'>
        <div className='text-4xl md:text-5xl inline text-bearbrown py-4 tracking-widest text-left py-20'>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">What i've been learning </p>

        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  sm:px-0' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="1000">

          { techs.map(({id,src, title}) => (
              <div key={id} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
              <img src={src} alt="" className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))
          }


        </div>
      </div>

    </div>
  )
}

export default Experience
