import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Orange.jpeg'
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    
    <footer className="bg-slate-950 text-white px-6 py-10">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 gap-y-8">
           {/* Logo and Mission */}
           <div className="md:col-span-2 text-center md:text-left mx-auto md:mx-0">
             <img
               src={Logo} 
               alt="Logo"
               className="w-20 mb-4 mx-auto md:mx-0 rounded-full shadow-lg"
             />
             <h2 className="text-2xl font-bold mb-2">
               GAGA REAL ESTATE LIMITED 
             </h2>
             <p className="text-sm text-gray-300 mb-4 leading-relaxed">
               GAGA Real Estate Limited is a trusted real estate company offering property sales, rentals, management, and investment advisory services. We connect clients with the right properties and ensure seamless real estate transactions with professionalism and integrity.
             </p>
           </div>
   
           {/* Footer Links */}
           <div>
             <ul className="space-y-2 text-sm">
               <li><Link to="/" className='cursor-pointer underline'>Home</Link></li>
               <li><Link to="/about" className='cursor-pointer underline' >About</Link></li>
               <li><Link to="/services" className='cursor-pointer underline' >Services</Link></li>
               <li><Link to="/contact" className='cursor-pointer underline' >Contact</Link></li>
             </ul>
           </div>
   
           <div>
             <ul className="space-y-2 text-sm">
               <li>FAQs</li>
               <li>Terms and Conditions</li>
               <li>Privacy Policy</li>
               <li>Blog</li>
             </ul>
           </div>
   
           <div>
             <ul className="space-y-2 text-sm">
               <li>Properties</li>
               <li>Team</li>
               <li>Assets</li>
               <li>News</li>
               <li>Partnership</li>
             </ul>
           </div>
   
           {/* Social Icons */}
           <div className='flex flex-col items-center justify-center'>
             <h3 className="text-gray-300 font-semibold mb-4">Follow Social Media</h3>
             <div className="flex gap-4 mb-4 justify-center md:justify-start">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF className="text-xl" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="text-xl" /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaXTwitter className="text-xl" /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube className="text-xl" /></a>
              </div>
           </div>
         </div>
   
         {/* Divider */}
         <hr className="my-2 border-gray-700" />
   
         {/* Bottom Links */}
         <div className=" mx-auto text-xs text-gray-400 ">
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
         </div>
       </footer> 
  )
}

export default Footer
