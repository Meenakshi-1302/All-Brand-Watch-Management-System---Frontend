import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-2xl font-bold" role="about">WatchMania</a>
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

      {/* About Section */}
      <header className="bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About WatchMania</h1>
          <p className="text-lg md:text-2xl mb-8">Our mission is to provide a seamless experience for watch enthusiasts to manage and explore their favorite timepieces.</p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Founded in 2024, WatchMania was created with a passion for horology and a dedication to exceptional customer service. We started as a small team of watch enthusiasts and have grown into a leading platform for managing and discovering exquisite watches. Our team is committed to curating the finest selection of watches and offering a platform that enhances the watch experience for collectors and enthusiasts.
          </p>
          <p className="text-gray-700 mb-6">
            At WatchMania, we believe that every watch tells a story, and we are here to help you discover and cherish those stories. From classic timepieces to modern innovations, our platform offers comprehensive information, reviews, and management tools for all your watch-related needs.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-12 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-700">
                We prioritize the highest standards of quality in every watch we feature, ensuring that our customers receive only the best.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-700">
                Our customers are at the heart of everything we do. We strive to provide an exceptional experience and are always here to assist you.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We embrace innovation and continuously seek to enhance our platform with new features and technologies to improve your watch management experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Have questions or feedback? We’d love to hear from you! Feel free to reach out to us through the contact form or email us directly at <a href="mailto:support@watchmania.com" className="text-blue-500 hover:underline">support@watchmania.com</a>.
          </p>
          <a href="/contact-page" className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600">Contact Us</a>
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

export default AboutPage;
//-------------------------------------------jest modified------------------------------------------------------------
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AboutPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <a href="/" className="text-white text-2xl font-bold" role="link-home">WatchMania</a>
//           <ul className="flex space-x-6">
//             <li>
//               <button 
//                 onClick={() => navigate('/home')} 
//                 className="bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-800 focus:outline-none"
//                 role="button-home"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => navigate('/watch-category')} 
//                 className="bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-800 focus:outline-none"
//                 role="button-watches"
//               >
//                 Watches
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => navigate('/about-page')} 
//                 className="bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-800 focus:outline-none"
//                 role="button-about"
//               >
//                 About
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => navigate('/contact-page')} 
//                 className="bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-800 focus:outline-none"
//                 role="button-contact"
//               >
//                 Contact
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* About Section */}
//       <header className="bg-blue-800 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4" role="about-heading">About WatchMania</h1>
//           <p className="text-lg md:text-2xl mb-8" role="about-description">
//             Our mission is to provide a seamless experience for watch enthusiasts to manage and explore their favorite timepieces.
//           </p>
//         </div>
//       </header>

//       {/* Our Story Section */}
//       <section className="container mx-auto py-12 px-4 md:px-6">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold mb-6" role="story-heading">Our Story</h2>
//           <p className="text-gray-700 mb-6" role="story-description">
//             Founded in 2024, WatchMania was created with a passion for horology and a dedication to exceptional customer service. We started as a small team of watch enthusiasts and have grown into a leading platform for managing and discovering exquisite watches. Our team is committed to curating the finest selection of watches and offering a platform that enhances the watch experience for collectors and enthusiasts.
//           </p>
//           <p className="text-gray-700 mb-6" role="story-description-2">
//             At WatchMania, we believe that every watch tells a story, and we are here to help you discover and cherish those stories. From classic timepieces to modern innovations, our platform offers comprehensive information, reviews, and management tools for all your watch-related needs.
//           </p>
//         </div>
//       </section>

//       {/* Our Values Section */}
//       <section className="bg-white py-12 px-4 md:px-6">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6" role="values-heading">Our Values</h2>
//           <div className="flex flex-col md:flex-row md:justify-center md:space-x-8">
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 md:mb-0" role="value-quality">
//               <h3 className="text-xl font-semibold mb-2">Quality</h3>
//               <p className="text-gray-700">
//                 We prioritize the highest standards of quality in every watch we feature, ensuring that our customers receive only the best.
//               </p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 md:mb-0" role="value-customer-satisfaction">
//               <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
//               <p className="text-gray-700">
//                 Our customers are at the heart of everything we do. We strive to provide an exceptional experience and are always here to assist you.
//               </p>
//             </div>
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg" role="value-innovation">
//               <h3 className="text-xl font-semibold mb-2">Innovation</h3>
//               <p className="text-gray-700">
//                 We embrace innovation and continuously seek to enhance our platform with new features and technologies to improve your watch management experience.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="container mx-auto py-12 px-4 md:px-6">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold mb-6" role="contact-heading">Get in Touch</h2>
//           <p className="text-gray-700 mb-4" role="contact-description">
//             Have questions or feedback? We’d love to hear from you! Feel free to reach out to us through the contact form or email us directly at <a href="mailto:support@watchmania.com" className="text-blue-500 hover:underline">support@watchmania.com</a>.
//           </p>
//           <a href="/contact-page" className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600" role="contact-link">Contact Us</a>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 WatchMania. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AboutPage;

