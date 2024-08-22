import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-2xl font-bold">WatchMania</a>
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={() => navigate('/home')} 
                className="bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-800 focus:outline-none"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate('/watch-category')} 
                className="bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-800 focus:outline-none"
              >
                Watches
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate('/about-page')} 
                className="bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-800 focus:outline-none"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate('/contact-page')} 
                className="bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-800 focus:outline-none"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contact Section */}
      <header className="bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-2xl mb-8">We'd love to hear from you. Get in touch with us using the form below.</p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 WatchMania. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
