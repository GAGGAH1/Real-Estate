import { useState, useRef } from "react"

const WhatWeDo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const cards = [
    { title: "Property Sales & Rentals", content: "We help individuals and businesses find, buy, or lease the perfect property that fits their needs and budget." },
    { title: "Property Management", content: "Our team manages properties on behalf of owners, ensuring smooth operations, tenant satisfaction, and asset value growth." },
    { title: "Real Estate Consultancy", content: "We offer professional advice on market trends, investment opportunities, and property valuations to guide informed decision-making." },
    { title: "Land Acquisition & Development", content: "We facilitate land sourcing, due diligence, and development planning for residential and commercial projects." },
    
  ];

  const visibleCards = isOpen ? cards : cards.slice(0, 4);

  return (
    <div
      ref={contentRef}
      className="p-6 bg-white mt-2 rounded-lg **shadow-md max-h-[80vh] overflow-y-auto"
    >
      <h2 className="text-2xl font-bold mb-6 text-orange-700 text-center">What We Do</h2>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {visibleCards.map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-transform duration-300 transform hover:scale-105">
            <h3 className="text-lg font-semibold mb-2 text-orange-400">{card.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatWeDo
