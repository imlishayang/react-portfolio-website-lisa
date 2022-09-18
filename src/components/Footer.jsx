import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import {  FaGithub } from "react-icons/fa";
import {  FaFile } from "react-icons/fa";
import CV from "../CV/cv.jpg";

const Footer = () => {
  return (
    <div name="Footer" className='p-10 bg-sand text-bearbrown'>
        <div>
          <div className='flex justify-center'>
            <p className='text-bearbrown text-xl'>Where to find me:</p>
          </div>

            <div className=' flex justify-center'>
              <a href='https://www.linkedin.com/in/hello-lisayang/' target="_blank" rel="noopener noreferrer" className='text-bearbrown text-4xl p-2 hover:text-babybear'><FaLinkedinIn/></a>
              <a href='https://github.com/imlishayang' target="_blank" rel="noopener noreferrer" className='text-bearbrown text-4xl p-2 hover:text-babybear'><FaGithub/></a>
              <a href={CV} target="_blank" rel="noopener noreferrer" className='text-bearbrown text-4xl p-2 hover:text-babybear'><FaFile/></a>
            </div>
        </div>

    </div>
  )
}

export default Footer
