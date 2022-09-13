import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-sand p-4 text-bearbrown'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl md:text-5xl inline  text-bearbrown py-4 tracking-widest text-left md:pt-32' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contact</p>
          <p className='py-6' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Let's mingle!</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/f9e9d92f-ff6b-4a6d-ab7f-0b171d5756d0" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder='Please enter your name' className='p-2 bg-white border-2 rounded-md text-brownbear focus:outline-none'/>
            <input type="text" name="email" placeholder='Please enter your e-mail' className='my-4 p-2 bg-white border-2 rounded-md text-brownbear focus:outline-none'/>
            <textarea name="messgae" rows="10" placeholder="Enter your message" className='p-2 border-2 bg-white rounded-md focus:outline-none'></textarea>
            <button className='bg-babyavo text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
