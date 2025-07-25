import React from 'react'
import Logo from '../assets/images/Orange.jpeg'

const Navbar = () => {
  return (
    <div className=' fixed w-full bg-white text-black py-4 px-16 flex justify-between items-center shadow-md z-10'>
        <img className='size-12 rounded-3xl' src={Logo} alt="Orange" />
        
            <ul className='flex space-x-4'>
            <li><a href='/' className='hover:text-gray-400'>Home</a></li>
            <li><a href='about' className='hover:text-gray-400'>About Us</a></li>
            <li><a href='services' className='hover:text-gray-400'>Services</a></li>
            <li><a href='contact' className='hover:text-gray-400'>Contact</a></li>
            <li><a href='' className='font-bold text-xl text-orange-400'>08052841581</a></li>
            </ul>
    </div>
  )
}

export default Navbar
