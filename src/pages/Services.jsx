import React from 'react';
import Image1 from '../assets/images/image1.jpeg';
import Image2 from '../assets/images/image2.jpeg';
import Image3 from '../assets/images/image3.jpeg';
import Image4 from '../assets/images/image4.jpeg';
import Image5 from '../assets/images/image5.jpeg';
import Image6 from '../assets/images/Image6.jpeg';
import Image7 from '../assets/images/Image7.jpeg';
import Image8 from '../assets/images/Image8.jpeg';
import Image9 from '../assets/images/Image9.jpeg';
import Image10 from '../assets/images/Image10.jpeg';
import Image11 from '../assets/images/Image11.jpeg';
import Image12 from '../assets/images/Image12.jpeg';
import Image13 from '../assets/images/Image13.jpeg';
import Image14 from '../assets/images/Image14.jpeg';
import VideoUpload from '../components/VideoUpload';



const services = [
  {
    title: "Office Spaces",
    desc: "Modern, flexible office spaces for businesses of all sizes. Prime locations, secure environments, and tailored leasing options.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Residential Properties",
    desc: "Comfortable and stylish homes, apartments, and condos. Find your dream residence with our expert guidance.",
    img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Land Spaces",
    desc: "Verified plots and land for development, investment, or agriculture. Secure documentation and advisory support.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Land Spaces",
    desc: "Verified plots and land for development and secure documentation.",
    img: Image1
  },
  {
    title: "Land Spaces",
    desc: "Verified plots and land for development and secure documentation.",
    img: Image2
  },
  {
    title: "Land Spaces",
    desc: "Verified plots and land for development and secure documentation.",
    img: Image3
  },
  {
    title: "Land Spaces",
    desc: "Verified plots and land for development and secure documentation.",
    img: Image4
  },
  {
    title: "Residential Properties",
    desc: "Verified uncompleted house, land for development and secure documentation.",
    img: Image5
  },
  {
    title: "Residential Properties",
    desc: "Verified completed house, land for development and secure documentation.",
    img: Image6
  },
  {
    title: "Residential Properties",
    desc: "Verified completed house, land for development and secure documentation.",
    img: Image7
  },
  {
    title: "Residential Properties",
    desc: "Verified completed house, land for development and secure documentation.",
    img: Image8
  },
  {
    title: "Residential Properties",
    desc: "Verified completed house, land for development and secure documentation.",
    img: Image9
  },
  {
    title: "Residential Properties",
    desc: "Verified completed house, land for development and secure documentation.",
    img: Image10
  },
  {
    title: "Residential Properties",
    desc: "Verified completed house, land for development and secure documentation.",
    img: Image11
  },
  {
    title: "Residential Properties",
    desc: "Verified completed house, land for development and secure documentation.",
    img: Image12
  },
  {
    title: "Residential Properties",
    desc: "Verified completed house, land for development and secure documentation.",
    img: Image13
  },
  {
    title: "Residential Properties",
    desc: "Verified completed house, land for development and secure documentation.",
    img: Image14
  },
];

const Services = () => {
  return (
    <section className="min-h-screen pt-24 px-4 py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-700">Our Services</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Explore the diverse property solutions we offer at GAGA Real Estate Limited.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-6 hover:scale-[1.03]"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-2xl font-semibold text-orange-600 mb-2">{service.title}</h2>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
        <VideoUpload />
      </div>
    </section>
  );
};

export default Services;
