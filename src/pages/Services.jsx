import React from 'react';

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
  }
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
      </div>
    </section>
  );
};

export default Services;
