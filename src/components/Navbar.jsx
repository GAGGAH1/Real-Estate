import { useState} from 'react'
import Logo from '../assets/images/Orange.jpeg'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  // Functionality for the hamburger menu can be added here later
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=' fixed w-full bg-white text-black py-4 px-4 md:px-16 flex justify-between items-center shadow-md z-10'>
        <img className='size-12 rounded-3xl' src={Logo} alt="Orange" />

            {/* Hamburger Icon */}
            <button 
                className='md:hidden flex flex-col justify-center items-center text-2xl focus:outline-none'
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={ menuOpen ? "Close menu" : "Open menu"}
                >
                  {menuOpen ? <AiOutlineClose className='text-black' /> : <GiHamburgerMenu className='text-black' />}
                {/* <GiHamburgerMenu className='text-black' /> */}
            </button>

            {/* Desktop Menu */}
            <ul className='hidden md:flex space-x-4'>
            <li><a href='/' className='hover:text-gray-400'>Home</a></li>
            <li><a href='about' className='hover:text-gray-400'>About Us</a></li>
            <li><a href='services' className='hover:text-gray-400'>Services</a></li>
            <li><a href='contact' className='hover:text-gray-400'>Contact</a></li>
            <li><a href='' className='font-bold text-xl text-orange-400'>08052841581</a></li>
            </ul>

            {/* Mobile Menu */}
            {menuOpen && (
              <ul className='absolute top-full left-0 w-full bg-white text-black flex flex-col items-center space-y-4 py-4 md:hidden animate-fade-in z-20 shadow-md'>
                <li><a href='/' className='hover:text-gray-400' onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href='about' className='hover:text-gray-400' onClick={() => setMenuOpen(false)}>About Us</a></li>
                <li><a href='services' className='hover:text-gray-400' onClick={() => setMenuOpen(false)}>Services</a></li>
                <li><a href='contact' className='hover:text-gray-400' onClick={() => setMenuOpen(false)}>Contact</a></li>
                <li><a href='' className='font-bold text-xl text-orange-400' onClick={() => setMenuOpen(false)}>08052841581</a></li>
              </ul>
            )}
    </nav>
  )
}

export default Navbar
