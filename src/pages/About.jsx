import React from 'react'
import { Link } from 'react-router-dom'
import Suit1 from '../assets/images/OGSuit.jpeg'
import WhatWeDo from '../components/WhatWeDo'
import Vision from '../components/Vision'
import Mission from '../components/Mission'
const About = () => {
  return (
    <div>
      <div className='flex items-center justify-between space-x-0 space-y-28 '>
              <div className=''>
                <img src={Suit1} className='rounded-full' alt="Suit" />
                  <div className='flex flex-col items-center justify-center text-center p-4 space-y-2'>
                    <h1 className='text-2xl font-bold'>CEO/MANAGER</h1>
                    <p className='text-gray-600'>GIDEON GAGGAH</p>
                    <div className='flex items-center space-x-2 justify-between '>
                      <span>@GAGA REAL ESTATE LIMITED</span>
                      <span className='text-xs text-green-600 border-b-2 border-green-400'>CAC CERTIFIED</span>
                    </div>
                    <Link to='/contact' className='bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition duration-300'>IG: officiall_gflow</Link>
                    <Link to='/contact' className='bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition duration-300'>GMAIL: gaggahgideon@gmail.com</Link>
                  </div>
              </div>
              <div className='flex flex-col items-center justify-center text-center p-4 space-y-4'>
                  <h1 className='text-4xl font-bold text-orange-700'>About Us</h1>
                  <p>
                    <span className='font-bold text-orange-400'>Welcome to GAGA Real Estate Limited</span> — your trusted partner in property and investment solutions.

                    At <span className='font-bold text-orange-400'>GAGA Real Estate Limited</span>, we are committed to delivering exceptional real estate services across residential, commercial, and investment properties. With a focus on integrity, professionalism, and client satisfaction, we aim to make property ownership and investment simple, secure, and rewarding
                  </p>
                  <WhatWeDo />
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-6'>
                    <Vision />
                    <Mission />
                  </div>
              </div>
            
      </div>
      
    </div>
  )
}

export default About
