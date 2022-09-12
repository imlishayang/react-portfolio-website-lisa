import React from 'react'
import Greenisnow from "../assets/Green.JPG";
import Travelpedia from "../assets/travel.JPG";
import Movielist from "../assets/movie.JPG";

const Portfolio = () => {
  const portfolios = [
    {
      id:1,
      src: Greenisnow
    },
    {
      id:2,
      src: Travelpedia
    },
    {
      id:3,
      src: Movielist
    },
  ]

  return (
    <div name="projects" className='bg-sand w-full text-bearbrown md:h-screen'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pt-16'>
          <p className='text-4xl md:text-6xl inline  text-bearbrown tracking-widest text-left' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Portfolio</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 pt-8 md:py-6'>
        { portfolios.map(({ id, src}) => (
          <div key={id} className='shadow-md rounded-lg duration-200 hover:scale-105'>
            <img
            src={src}
            alt=""/>
            <div className='flex item-center justify-center'>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> Code</button>
            </div>
          </div>

         ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
