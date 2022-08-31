import React from 'react'
import HeroImage from "../assets/profile.jpg";
import {IoIosArrowForward} from 'react-icons/io'

const Home = () => {
  return (
    // name property is for smooth scroll
    <div name="home" className='h-screen w-full bg-sand'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
      <div>
            <img src={HeroImage} alt="Lisa's Profile" size={80} className="rounded mx-auto w-2/3 md:w-full pt-80 md:pt-0"/>
          </div>
        <div className='md:ml-6'>

          <p className='text-bearbrown text-l '>Hello! I'm Lisa. </p>
          <p className='text-bearbrown text-3xl mt-1.5 font-bold tracking-wider'>I am a full stack developer</p>
          <p className='text-bearbrown text-xl py-4 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita provident voluptatum, exercitationem sunt fugiat deserunt quibusdam quod maxime, quos neque aliquid veritatis vero ullam inventore natus eius velit non?</p>

          <div>
            <button className='bg-babyavo cursor-pointer group w-fit px-6 py-3 my-2 flex items-center rounded-md text-white text-xl'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <IoIosArrowForward size={25} className="ml-1"/>
              </span>
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home
