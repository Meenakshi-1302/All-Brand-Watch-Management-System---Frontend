
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LandingPage = () => {
  const [watches, setWatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch watches data from backend
    const fetchWatches = async () => {
      try {
        const response = await axios.get('http://localhost:8085/product/all');
        setWatches(response.data);
      } catch (err) {
        setError('Failed to load watches.');
        console.error(err);
      }
    };

    fetchWatches();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <img src="/logo.png" alt="WatchMania Logo" className="h-10" />
            <a href="#home" className="text-white text-2xl font-bold no-underline">WatchMania</a>
          </div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-white font-semibold hover:text-gray-300 no-underline">Home</a></li>
            <li><a href="#watches" className="text-white font-semibold hover:text-gray-300 no-underline">Watches</a></li>
            <li><a href="#about" className="text-white font-semibold hover:text-gray-300 no-underline">About</a></li>
            <li><a href="#contact" className="text-white font-semibold hover:text-gray-300 no-underline">Contact</a></li>
          </ul>
          <div className="flex items-center space-x-4">
            <a href="/login" className="bg-gray-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 no-underline">Login</a>
            <a href="/register" className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-600 no-underline">Sign Up</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Perfect Watch</h1>
          <p className="text-lg md:text-2xl mb-8">Explore our exclusive collection of luxury and everyday timepieces.</p>
          <a href="/login" className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 no-underline">Shop Now</a>
        </div>
      </header>

      {/* Featured Watches Section */}
      <section id="watches" className="container mx-auto py-12 px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Watches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {watches.length > 0 ? (
            watches.map((watch) => (
              <div key={watch.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                <img src={watch.image} alt={watch.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
                  <p className="text-gray-700 mb-4">{watch.description}</p>
                  <p className="text-lg font-bold mb-4">${watch.price}</p>
                  <a href="/login" className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 no-underline">View Details</a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700">No featured watches available.</p>
          )}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-gray-200 py-12 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-6">At WatchMania, we are passionate about providing the best selection of watches to suit every style and occasion. Our team is dedicated to curating a collection that meets the highest standards of quality and craftsmanship.</p>
          <a href="#contact" className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 no-underline">Contact Us</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-6">Have questions or need support? Feel free to reach out to us through the form below or visit our store.</p>
          <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded-lg" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 WatchMania. All rights reserved.</p>
          <div className="mt-4">
            <a href="#home" className="text-gray-400 hover:text-gray-300 no-underline">Home</a> | 
            <a href="#watches" className="text-gray-400 hover:text-gray-300 no-underline">Watches</a> | 
            <a href="/about-page" className="text-gray-400 hover:text-gray-300 no-underline">About</a> | 
            <a href="#contact" className="text-gray-400 hover:text-gray-300 no-underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
