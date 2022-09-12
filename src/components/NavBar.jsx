import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll'

const NavBar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'experience'
    },
    {
      id: 4,
      link: 'projects'
    },
    {
      id: 5,
      link: 'contact'
    },

  ]


  return (
    <div className="flex justify-between items-center w-full h-20 text-bearbrown bg-sand fixed px-4 text-xl">
      <div>
        <h1>LISHA</h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({id, link}) => (
           <li
           key={id}
           className='text-xl text-bearbrown hover:scale-105 duration-200 px-4 cursor-pointer hover:font-bold'>
             <Link to={link} smooth duration={500}>
              {link}
            </Link>
           </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-bearbrown md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-sand to-white text-bearbrown'>
        {links.map(({id, link}) => (
            <li
            key={id}
            className='px-4 text-xl text-bearbrown py-4 cursor-pointer'>
              {link}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default NavBar
