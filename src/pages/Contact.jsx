import React from 'react'
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
       name: "",
       email: "", 
       message: "" 
      });

      const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // alert("Message sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div className="grid md:grid-cols-2 gap-8 p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className='flex flex-col justify-center rounded-xl shadow-lg p-8'>
            <h2 className='text-2xl font-bold text-orange-700 mb-4'>Contact Information</h2>
            <p className="mb-2 text-gray-700">GAGA Real Estate Limited</p>
            <p className="mb-2 text-gray-700">Email: <a href="mailto:gaggahgideon@gmail.com" className="text-blue-600 underline">gaggahgideon@gmail.com</a></p>
            <p className="mb-2 text-gray-700">Phone: <a href="tel:08052841581" className="text-blue-600 underline">08052841581</a></p>
            <p className="mb-2 text-gray-700">Instagram: <a href="https://instagram.com/officiall_gflow" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">@officiall_gflow</a></p>
            <p className="mt-4 text-gray-500">We respond within 24 hours on business days.</p>
      </div>
        {/* Contact Form */}
          <div className='mt-12 rounded-xl shadow-lg p-8'>
            <h2 className="text-2xl font-semibold text-orange-700 mb-3">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                name="name"
                id='name'
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-orange-300"
                required
              />
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id='email'
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-orange-300"
                required
              />
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id='message'
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-orange-300"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300 font-semibold"
              >
                Send Message
              </button>
              {submitted && (
                <div className="mt-4 text-green-600 font-semibold text-center">
                  Message sent! We will get back to you soon.
                </div>
              )}
            </form>
          </div>
        
    </div>
  )
}

export default Contact
