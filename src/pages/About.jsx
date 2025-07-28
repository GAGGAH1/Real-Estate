import React from 'react'
import { Link } from 'react-router-dom'
import Suit1 from '../assets/images/OGSuit.jpeg'
import WhatWeDo from '../components/WhatWeDo'
import Vision from '../components/Vision'
import Mission from '../components/Mission'

const About = () => {
  return (
    <div className="px-4 py-8 bg-gray-50 min-h-screen pt-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* CEO Section */}
        <div className="flex flex-col items-center justify-center text-center p-4 space-y-4 w-full md:w-1/2">
          <img src={Suit1} className="rounded-full w-40 h-40 object-cover mx-auto mb-4" alt="Suit" />
          <h1 className="text-2xl font-bold">CEO/MANAGER</h1>
          <p className="text-gray-600">GIDEON GAGGAH</p>
          <span>@GAGA REAL ESTATE LIMITED</span>
          <Link to='/contact' className='bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition duration-300 block w-full md:w-auto mt-2'>IG: officiall_gflow</Link>
          <Link to='/contact' className='bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition duration-300 block w-full md:w-auto'>GMAIL: gaggahgideon@gmail.com</Link>
        </div>
        {/* About & WhatWeDo Section */}
        <div className="flex flex-col items-center justify-center text-center p-4 space-y-4 w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-orange-700">About Us</h1>
          <p>
            <span className='font-bold text-orange-400'>Welcome to GAGA Real Estate Limited</span> — your trusted partner in property and investment solutions.
            <br /><br />
            At <span className='font-bold text-orange-400'>GAGA Real Estate Limited</span>, we are committed to delivering exceptional real estate services across residential, commercial, and investment properties. With a focus on integrity, professionalism, and client satisfaction, we aim to make property ownership and investment simple, secure, and rewarding.
          </p>
          <WhatWeDo />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full">
            <Vision />
            <Mission />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About