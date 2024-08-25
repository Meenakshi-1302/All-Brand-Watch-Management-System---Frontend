// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// // Dummy data for watch categories
// const watchCategories = [
//   { name: 'Casual Watch', description: 'Perfect for everyday wear', image: '/casual_watch.webp' },
//   { name: 'Sports Watch', description: 'Durable and functional', image: '/sports_watch.jpg' },
//   { name: 'Vintage Watch', description: 'A nod to classic styles', image: '/vintage_watch.jpg' },
//   { name: 'Luxury Watch', description: 'Exquisite craftsmanship', image: '/luxury_watch.webp' },
//   { name: 'Couple Watch', description: 'Elegant matching timepieces designed for couples to celebrate their bond with a coordinated style.', image: '/couple_watch.webp' },
// ];

// // Gallery images
// const galleryImages = [
//   "/Fastrack_banner.avif",
//   "/sonata banner.jpg",
//   "/titan_banner.png",
//   "/casio_banner.jpg",
//   "/timex_banner.webp"
// ];

// const WatchCategoryPage = () => {
//   const navigate = useNavigate();

//   const handleUserProfile = () => {
//     navigate('/userprofile-page'); // Redirect to user profile page
//   };

//   const handleLogout = () => {
//     // Handle logout logic here (e.g., clear auth tokens, redirect to login page)
//     console.log('User logged out');
//     navigate('/login'); // Redirect to login page after logout
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <a href="/home" className="text-white text-2xl font-bold">WatchMania</a>
//           <ul className="flex space-x-6">
//             <li>
//               <button 
//                 onClick={() => navigate('/home')} 
//                 className="text-white font-semibold hover:text-gray-300 focus:outline-none"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => navigate('/watch-category')} 
//                 className="text-white font-semibold hover:text-gray-300 focus:outline-none"
//               >
//                 Watches
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => navigate('/about-page')} 
//                 className="text-white font-semibold hover:text-gray-300 focus:outline-none"
//               >
//                 About
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => navigate('/contact-page')} 
//                 className="text-white font-semibold hover:text-gray-300 focus:outline-none"
//               >
//                 Contact
//               </button>
//             </li>
//           </ul>
//           <div className="flex items-center space-x-4">
//             <button 
//               onClick={handleUserProfile} 
//               className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl hover:bg-green-600 focus:outline-none"
//               aria-label="User Profile"
//             >
//               JD
//             </button>
//             <button 
//               onClick={handleLogout} 
//               className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 focus:outline-none"
//             >
//               Logout
//             </button>
//             <div className="relative">
//               <input 
//                 type="text" 
//                 placeholder="Search..." 
//                 className="py-2 px-4 rounded-lg bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button 
//                 className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
//                 type="button"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                   <path fillRule="evenodd" d="M13.292 11.292a5.5 5.5 0 1 1-1.414-1.414l3.5 3.5a1 1 0 0 0 1.414-1.414l-3.5-3.5zM15 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-blue-800 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore Our Watch Categories</h1>
//           <p className="text-lg md:text-2xl mb-8">Discover the perfect watch for every occasion and style.</p>
//         </div>
//       </header>

//       {/* Watch Categories */}
//       <section className="container mx-auto py-12 px-4 md:px-6">
//         <h2 className="text-3xl font-bold mb-8 text-center">Watch Categories</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {watchCategories.map((category, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
//               <img src={category.image} alt={category.name} className="w-full h-64 object-cover"/>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
//                 <p className="text-gray-700 mb-4">{category.description}</p>
//                 <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 inline-block">View More</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Image Gallery */}
//       <section className="py-12 px-4 md:px-6">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-center">Brand We Collaborate</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {galleryImages.map((src, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={src}
//                   alt={`Gallery Image ${index + 1}`}
//                   className="w-full h-80 object-cover rounded-lg shadow-md transform transition-transform hover:scale-105"
//                 />
//               </div>
//             ))}
//           </div>
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

// export default WatchCategoryPage;/

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// // Dummy data for watch categories
// const watchCategories = [
//   { name: 'Casual Watch', description: 'Perfect for everyday wear', image: '/casual_watch.webp' },
//   { name: 'Sports Watch', description: 'Durable and functional', image: '/sports_watch.jpg' },
//   { name: 'Vintage Watch', description: 'A nod to classic styles', image: '/vintage_watch.jpg' },
//   { name: 'Luxury Watch', description: 'Exquisite craftsmanship', image: '/luxury_watch.webp' },
//   { name: 'Couple Watch', description: 'Elegant matching timepieces designed for couples to celebrate their bond with a coordinated style.', image: '/couple_watch.webp' },
// ];

// // Gallery images
// const galleryImages = [
//   "/Fastrack_banner.avif",
//   "/sonata banner.jpg",
//   "/titan_banner.png",
//   "/casio_banner.jpg",
//   "/timex_banner.webp"
// ];

// const WatchCategoryPage = () => {
//   const navigate = useNavigate();

//   const handleUserProfile = () => {
//     navigate('/userprofile-page'); // Redirect to user profile page
//   };

//   const handleLogout = () => {
//     // Handle logout logic here (e.g., clear auth tokens, redirect to login page)
//     console.log('User logged out');
//     navigate('/login'); // Redirect to login page after logout
//   };

//   const handleViewMore = (categoryName) => {
//     navigate(`/category-details/${encodeURIComponent(categoryName)}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <a href="/home" className="text-white text-2xl font-bold">WatchMania</a>
//           <ul className="flex space-x-6">
//             <li>
//               <button 
//                 onClick={() => navigate('/home')} 
//                 className="text-white font-semibold hover:text-gray-300 focus:outline-none"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => navigate('/watch-category')} 
//                 className="text-white font-semibold hover:text-gray-300 focus:outline-none"
//               >
//                 Watches
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => navigate('/about-page')} 
//                 className="text-white font-semibold hover:text-gray-300 focus:outline-none"
//               >
//                 About
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => navigate('/contact-page')} 
//                 className="text-white font-semibold hover:text-gray-300 focus:outline-none"
//               >
//                 Contact
//               </button>
//             </li>
//           </ul>
//           <div className="flex items-center space-x-4">
//             <button 
//               onClick={handleUserProfile} 
//               className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl hover:bg-green-600 focus:outline-none"
//               aria-label="User Profile"
//             >
//               J
//             </button>
//             <button 
//               onClick={handleLogout} 
//               className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 focus:outline-none"
//             >
//               Logout
//             </button>
//             {/* <div className="relative">
//               <input 
//                 type="text" 
//                 placeholder="Search..." 
//                 className="py-2 px-4 rounded-lg bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button 
//                 className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
//                 type="button"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                   <path fillRule="evenodd" d="M13.292 11.292a5.5 5.5 0 1 1-1.414-1.414l3.5 3.5a1 1 0 0 0 1.414-1.414l-3.5-3.5zM15 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </div> */}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-blue-800 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore Our Watch Categories</h1>
//           <p className="text-lg md:text-2xl mb-8">Discover the perfect watch for every occasion and style.</p>
//         </div>
//       </header>

//       {/* Watch Categories */}
//       <section className="container mx-auto py-12 px-4 md:px-6">
//         <h2 className="text-3xl font-bold mb-8 text-center">Watch Categories</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {watchCategories.map((category, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
//               <img src={category.image} alt={category.name} className="w-full h-64 object-cover"/>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
//                 <p className="text-gray-700 mb-4">{category.description}</p>
//                 <button
//                   onClick={() => handleViewMore(category.name)}
//                   className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 inline-block"
//                 >
//                   View More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Image Gallery */}
//       <section className="py-12 px-4 md:px-6">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold mb-8 text-center">Brands We Collaborate</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {galleryImages.map((src, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={src}
//                   alt={`Gallery Image ${index + 1}`}
//                   className="w-full h-80 object-cover rounded-lg shadow-md transform transition-transform hover:scale-105"
//                 />
//               </div>
//             ))}
//           </div>
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

// export default WatchCategoryPage;
//===========================================================================================================================
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

// Dummy data for watch categories
const watchCategories = [
  { name: 'Casual Watch', description: 'Perfect for everyday wear', image: '/casual_watch.webp' },
  { name: 'Sports Watch', description: 'Durable and functional', image: '/sports_watch.jpg' },
  { name: 'Vintage Watch', description: 'A nod to classic styles', image: '/vintage_watch.jpg' },
  { name: 'Luxury Watch', description: 'Exquisite craftsmanship', image: '/luxury_watch.webp' },
  { name: 'Couple Watch', description: 'Elegant matching timepieces designed for couples to celebrate their bond with a coordinated style.', image: '/couple_watch.webp' },
];

// Gallery images
const galleryImages = [
  "/Fastrack_banner.avif",
  "/sonata banner.jpg",
  "/titan_banner.png",
  "/casio_banner.jpg",
  "/timex_banner.webp"
];

const WatchCategoryPage = () => {
  const navigate = useNavigate();

  const handleUserProfile = () => {
    navigate('/userprofile-page'); // Redirect to user profile page
  };

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear auth tokens, redirect to login page)
    console.log('User logged out');
    navigate('/login'); // Redirect to login page after logout
  };

  const handleViewMore = (categoryName) => {
    navigate(`/category-details/${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Header/>
      {/* Hero Section */}
      <header className="bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore Our Watch Categories</h1>
          <p className="text-lg md:text-2xl mb-8">Discover the perfect watch for every occasion and style.</p>
        </div>
      </header>

      {/* Watch Categories */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Watch Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {watchCategories.map((category, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img src={category.image} alt={category.name} className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-700 mb-4">{category.description}</p>
                <button
                  onClick={() => handleViewMore(category.name)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 inline-block"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Brands We Collaborate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative">
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg shadow-md transform transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
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

export default WatchCategoryPage;


