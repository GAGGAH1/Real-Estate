import { useState, useEffect } from 'react';
import Hero1 from '../assets/images/Hero1.jpg';
import Hero2 from '../assets/images/Hero2.jpg';
import { Link } from 'react-router-dom'


const Hero = () => {
    const images = [Hero1, Hero2];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);
  return (
    <div className='w-full h-screen relative'>
        {images.map((image, index) => (
            <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            />
        ))}
        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 p-3 rounded-lg shadow-lg flex flex-col items-center'>
            <h1 className='text-3xl font-bold text-center'>Welcome to GAGA REAL ESTATE LIMITED</h1>
            <p className='text-center mt-2'>Discover the wonders of the Real Estate with us.</p>
            <Link to="/contact"><button className='bg-blue-600 font-semibold text-white p-2 border-solid rounded-xl text-center mt-2'>CONTACT US</button></Link>
        </div>
    </div>

    
  );
};

export default Hero
