import React from 'react'
import Greenisnow from "../assets/Green.JPG";
// import Travelpedia from "../assets/travel.JPG";
// import Movielist from "../assets/movie.JPG";
// import Link from 'react-scroll/modules/components/Link';

const Portfolio = () => {
  // const portfolios = [
  //   {
  //     id:1,
  //     src: Greenisnow,
  //     description: "The final project for our bootcamp at Le wagon. Our projects stems from a passion to inform users about climate change but most importantly inspire users to reduce their carbon footprint. Users are able to track their carbon emissions saved.",
  //     url:"https://greengreen866.herokuapp.com/",
  //   },

  // ]

  return (
    <div name="projects" className='bg-sand w-full text-bearbrown md:h-screen pt-24'>
      <div className=' max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pt-20'>
          <p className='text-4xl md:text-6xl inline  text-bearbrown tracking-widest text-left' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Projects</p>
        </div>

        <div className='grid sm:grid-cols-2  gap-8 px-12 pt-8 md:py-6' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="500">
          <div className='shadow-md rounded-lg duration-200 hover:scale-105'>
             {/* CARD */}
            <img src={Greenisnow} alt=""/>
              <div className='flex item-center justify-center'>
                <a href='https://greengreen866.herokuapp.com/' target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:line-through">Demo</button>
                </a>
                <a href="https://github.com/jayjaroen/-greengreen" target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:line-through"> Code</button>
                </a>
              </div>
          </div>
           {/* INFO*/}
            <div>
              <p className='text-xl font-bold pb-2'>Green is NOW</p>
              <p>Green is now is our final project built in 4 weeks during our part-time bootcamp at Le Wagon. This project stems from a passion to inform users about climate change but most importantly inspire users to reduce their carbon footprint. Users are able to track their carbon emissions saved, read about tips and tricks, access carbon emission data from their home country and view their data through graphs.</p>
              <p className='text-l font-bold py-2'>Tech featured:</p>
              <div>
                <p> - Tailwind </p>
                <p> - Devise </p>
                <p> - Cloudinary</p>
                <p> - Ruby on rails</p>
                <p> - Sweet alert</p>
              </div>
            </div>
            <div className='p-10'></div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
