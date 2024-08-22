// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';

// // Dummy data for watches
// const watches = [
//   { id: 1, name: 'Timex Watch', price: 99.99, category: 'Casual', brand: 'BrandA', description: 'Perfect for everyday wear', image: '/casual_watch.webp' },
//   { id: 2, name: 'Sports Watch', price: 129.99, category: 'Sports', brand: 'BrandB', description: 'Durable and functional', image: '/sports_watch.jpg' },
//   { id: 3, name: 'Vintage Watch', price: 149.99, category: 'Vintage', brand: 'BrandC', description: 'A nod to classic styles', image: '/vintage_watch.jpg' },
//   { id: 4, name: 'Luxury Watch', price: 499.99, category: 'Luxury', brand: 'BrandD', description: 'Exquisite craftsmanship', image: '/luxury_watch.webp' },
//   { id: 5, name: 'Couple Watch', price: 199.99, category: 'Couple', brand: 'BrandE', description: 'Elegant matching timepieces designed for couples.', image: '/couple_watch.webp' },
// ];

// const brands = ['All', 'BrandA', 'BrandB', 'BrandC', 'BrandD', 'BrandE'];
// const categories = ['All', 'Casual', 'Sports', 'Vintage', 'Luxury', 'Couple'];

// const WatchCatalogPage = () => {
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedBrand, setSelectedBrand] = useState('All');
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const navigate = useNavigate();

//   const handleAddToCart = (watch) => {
//     setCart([...cart, watch]);
//     setPopupMessage(`${watch.name} added to cart!`);
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
//   };

//   const handleViewDetails = (watchId) => {
//     navigate(`/watch-details/${watchId}`);
//   };

//   const filteredWatches = watches.filter(watch => {
//     return (selectedCategory === 'All' || watch.category === selectedCategory) &&
//            (selectedBrand === 'All' || watch.brand === selectedBrand) &&
//            (minPrice === '' || watch.price >= parseFloat(minPrice)) &&
//            (maxPrice === '' || watch.price <= parseFloat(maxPrice));
//   });

//   const cartCount = cart.length;

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <a href="/home" className="text-white text-2xl font-bold">WatchMania</a>
//           <ul className="flex space-x-6">
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/home')}>Home</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/watches')}>Watches</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/about-page')}>About</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/contact-page')}>Contact</button></li>
//           </ul>
//           <div className="flex items-center space-x-4">
//             <button className="relative flex items-center" onClick={() => navigate('/cart')}>
//               <FaShoppingCart className="text-white text-2xl" />
//               {cartCount > 0 && (
//                 <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">{cartCount}</span>
//               )}
//             </button>
//             <button className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl hover:bg-green-600 focus:outline-none" aria-label="User Profile">JD</button>
//             <button className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 focus:outline-none">Logout</button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-blue-800 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Watch Catalog</h1>
//           <p className="text-lg md:text-2xl mb-8">Find your perfect watch from our extensive collection.</p>
//         </div>
//       </header>

//       {/* Filter Section */}
//       <section className="container mx-auto py-8 px-4 md:px-6">
//         <h2 className="text-2xl font-bold mb-6 text-center">Filter Watches</h2>
//         <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Category</label>
//             <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg">
//               {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
//             </select>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Brand</label>
//             <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg">
//               {brands.map((brand) => (<option key={brand} value={brand}>{brand}</option>))}
//             </select>
//           </div>
//           <div className="flex flex-col md:flex-row md:space-x-4 mb-4 md:mb-0">
//             <div className="w-full md:w-1/2 mb-4 md:mb-0">
//               <label className="block text-gray-700 font-semibold mb-2">Min Price</label>
//               <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Min Price" />
//             </div>
//             <div className="w-full md:w-1/2">
//               <label className="block text-gray-700 font-semibold mb-2">Max Price</label>
//               <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Max Price" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Watch Cards */}
//       <section className="container mx-auto py-12 px-4 md:px-6">
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Watches</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {filteredWatches.map((watch) => (
//             <div key={watch.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer" onClick={() => handleViewDetails(watch.id)}>
//               <img src={watch.image} alt={watch.name} className="w-full h-64 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
//                 <p className="text-gray-700 mb-4">{watch.description}</p>
//                 <p className="text-lg font-bold mb-4">${watch.price.toFixed(2)}</p>
//                 <button onClick={(e) => { e.stopPropagation(); handleAddToCart(watch); }} className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none w-full">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Popup Notification */}
//       {showPopup && (
//         <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
//           {popupMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WatchCatalogPage;
//------------------------------------------anthother version--------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------ 
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';
// import axios from 'axios';

// // Define brands and categories for filtering
// const brands = ['All', 'BrandA', 'BrandB', 'BrandC', 'BrandD', 'BrandE'];
// const categories = ['All', 'Casual', 'Sports', 'Vintage', 'Luxury', 'Couple'];

// const WatchCatalogPage = () => {
//   const [watches, setWatches] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedBrand, setSelectedBrand] = useState('All');
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch watches from backend
//     const fetchWatches = async () => {
//       try {
//         const response = await axios.get('http://localhost:8089/watch/all');
//         console.log(JSON.stringify(response.data,null,2));
//         setWatches(response.data);
//       } catch (error) {
//         console.error('Error fetching watches:', error);
//       }
//     };

//     fetchWatches();
//   }, []);

//   const handleAddToCart = (watch) => {
//     setCart([...cart, watch]);
//     setPopupMessage(`${watch.name} added to cart!`);
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
//   };

//   const handleViewDetails = (watchId) => {
//     navigate(`/watch-details/${watchId}`);
//   };

//   const filteredWatches = watches.filter(watch => {
//     return (selectedCategory === 'All' || watch.category === selectedCategory) &&
//            (selectedBrand === 'All' || watch.brand === selectedBrand) &&
//            (minPrice === '' || watch.price >= parseFloat(minPrice)) &&
//            (maxPrice === '' || watch.price <= parseFloat(maxPrice));
//   });

//   const cartCount = cart.length;

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <a href="/home" className="text-white text-2xl font-bold">WatchMania</a>
//           <ul className="flex space-x-6">
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/home')}>Home</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/watches')}>Watches</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/about-page')}>About</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/contact-page')}>Contact</button></li>
//           </ul>
//           <div className="flex items-center space-x-4">
//             {/* <button className="relative flex items-center" onClick={() => navigate('/cart')}>
//               <FaShoppingCart className="text-white text-2xl" />
//               {cartCount > 0 && (
//                 <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">{cartCount}</span>
//               )}
//             </button> */}
//             <button className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl hover:bg-green-600 focus:outline-none" aria-label="User Profile">JD</button>
//             <button className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 focus:outline-none">Logout</button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-blue-800 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Watch Catalog</h1>
//           <p className="text-lg md:text-2xl mb-8">Find your perfect watch from our extensive collection.</p>
//         </div>
//       </header>

//       {/* Filter Section */}
//       <section className="container mx-auto py-8 px-4 md:px-6">
//         <h2 className="text-2xl font-bold mb-6 text-center">Filter Watches</h2>
//         <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Category</label>
//             <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg">
//               {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
//             </select>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Brand</label>
//             <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg">
//               {brands.map((brand) => (<option key={brand} value={brand}>{brand}</option>))}
//             </select>
//           </div>
//           <div className="flex flex-col md:flex-row md:space-x-4 mb-4 md:mb-0">
//             <div className="w-full md:w-1/2 mb-4 md:mb-0">
//               <label className="block text-gray-700 font-semibold mb-2">Min Price</label>
//               <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Min Price" />
//             </div>
//             <div className="w-full md:w-1/2">
//               <label className="block text-gray-700 font-semibold mb-2">Max Price</label>
//               <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Max Price" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Watch Cards */}
//       <section className="container mx-auto py-12 px-4 md:px-6">
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Watches</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {filteredWatches.map((watch) => (
//             <div key={watch.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer" onClick={() => handleViewDetails(watch.id)}>
//               <img src={watch.image} alt={watch.name} className="w-full h-64 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
//                 <p className="text-gray-700 mb-4">{watch.description}</p>
//                 <p className="text-lg font-bold mb-4">${watch.price.toFixed(2)}</p>
//                 <button 
//                 href={`/watch-details/${watch.watch_id}`} 
//                  className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none w-full">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Popup Notification */}
//       {showPopup && (
//         <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
//           {popupMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WatchCatalogPage;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaShoppingCart, FaHome } from 'react-icons/fa';

// const WatchCatalogPage = () => {
//   const [watches, setWatches] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch watches from the backend
//     const fetchWatches = async () => {
//       try {
//         const response = await axios.get('http://localhost:8089/watch/all');
//         setWatches(response.data);
//       } catch (error) {
//         console.error('Error fetching watches:', error);
//         // Handle error, maybe show a message to the user
//       }
//     };

//     fetchWatches();
//   }, []);

//   const handleAddToCart = (watch) => {
//     setCart([...cart, watch]);
//     setPopupMessage(`${watch.name} added to cart!`);
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
//   };

//   const handleViewDetails = (watchId) => {
//     navigate(`/watch-details/${watchId}`);
//   };

//   const filteredWatches = watches.filter(watch => {
//     const isCategoryMatch = selectedCategory === 'All' || watch.category === selectedCategory;
//     const isPriceMatch = (minPrice === '' || watch.price >= parseFloat(minPrice)) &&
//                           (maxPrice === '' || watch.price <= parseFloat(maxPrice));
//     const isNameMatch = searchTerm === '' || watch.name.toLowerCase().includes(searchTerm.toLowerCase());

//     return isCategoryMatch && isPriceMatch && isNameMatch;
//   });

//   const cartCount = cart.length;

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <a href="/home" className="text-white text-2xl font-bold">WatchMania</a>
//           <ul className="flex space-x-6">
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/home')}>Home</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/watches')}>Watches</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/about-page')}>About</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/contact-page')}>Contact</button></li>
//           </ul>
//           <div className="flex items-center space-x-4">
//             <button className="relative flex items-center" onClick={() => navigate('/cart')}>
//             <FaShoppingCart className="w-6 h-6 mr-3 text-blue-300" />
//               <span className="text-white font-semibold"></span>
//               {cartCount > 0 && (
//                 <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">{cartCount}</span>
//               )}
//             </button>
//             <button className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl hover:bg-green-600 focus:outline-none" aria-label="User Profile">JD</button>
//             <button className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 focus:outline-none">Logout</button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-blue-800 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Watch Catalog</h1>
//           <p className="text-lg md:text-2xl mb-8">Find your perfect watch from our extensive collection.</p>
//         </div>
//       </header>

//       {/* Filter Section */}
//       <section className="container mx-auto py-8 px-4 md:px-6">
//         <h2 className="text-2xl font-bold mb-6 text-center">Filter Watches</h2>
//         <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Category</label>
//             <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg">
//               <option value="All">All</option>
//               {Array.from(new Set(watches.map(watch => watch.category))).map(cat => (
//                 <option key={cat} value={cat}>{cat}</option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Min Price</label>
//             <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Min Price" />
//           </div>
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Max Price</label>
//             <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Max Price" />
//           </div>
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Search by Name</label>
//             <input 
//               type="text" 
//               value={searchTerm} 
//               onChange={(e) => setSearchTerm(e.target.value)} 
//               className="w-full p-2 border border-gray-300 rounded-lg" 
//               placeholder="Search by name" 
//             />
//           </div>
//         </div>
//       </section>

//       {/* Watches Listing Section */}
//       <section className="container mx-auto py-12 px-4 md:px-6">
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Watches</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {filteredWatches.length > 0 ? (
//             filteredWatches.map((watch) => (
//               <div key={watch.watch_id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
//                 <img src={watch.imageUrl || '/default_image.jpg'} alt={watch.name} className="w-full h-64 object-cover" />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
//                   <p className="text-gray-700 mb-4">{watch.description}</p>
//                   <p className="text-gray-900 text-lg font-bold">${watch.price.toFixed(2)}</p>
//                   <div className="mt-4 flex justify-between">
//                     <button 
//                       onClick={() => handleAddToCart(watch)} 
//                       className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//                     >
//                       Add to Cart
//                     </button>
//                     <button 
//                       onClick={() => handleViewDetails(watch.watch_id)} 
//                       className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
//                     >
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="col-span-full text-center text-gray-700">No watches found.</p>
//           )}
//         </div>
//       </section>

//       {/* Popup Message */}
//       {showPopup && (
//         <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
//           {popupMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WatchCatalogPage;
//---------------------------version-4------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const WatchCatalogPage = () => {
//   const [watches, setWatches] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch watches from backend or use sample data
//     const fetchWatches = async () => {
//       try {
//         const response = await axios.get('http://localhost:8089/watch/all');
//         setWatches(response.data);
//       } catch (error) {
//         console.error('Error fetching watches:', error);
//         // Load sample data in case of an error
//         const sampleData = [
//           {
//             watch_id: 1,
//             name: 'Elegant Watch',
//             description: 'An elegant watch for formal occasions.',
//             category: 'Luxury',
//             brand: 'BrandA',
//             price: 1200.00,
//             imageUrl: '/images/elegant_watch.jpg'
//           },
//           {
//             watch_id: 2,
//             name: 'Sporty Watch',
//             description: 'A sporty watch for your active lifestyle.',
//             category: 'Sports',
//             brand: 'BrandB',
//             price: 300.00,
//             imageUrl: '/images/sporty_watch.jpg'
//           },
//           // Add more sample data as needed
//         ];
//         setWatches(sampleData);
//       }
//     };

//     fetchWatches();
//   }, []);

//   const handleAddToCart = (watch) => {
//     setCart([...cart, watch]);
//     setPopupMessage(`${watch.name} added to cart!`);
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
//   };

//   const handleViewDetails = (watchId) => {
//     navigate(`/watch-details/${watchId}`);
//   };

//   const filteredWatches = watches.filter(watch => {
//     const isCategoryMatch = selectedCategory === 'All' || watch.category === selectedCategory;
//     const isPriceMatch = (minPrice === '' || watch.price >= parseFloat(minPrice)) &&
//                           (maxPrice === '' || watch.price <= parseFloat(maxPrice));
//     const isNameMatch = searchTerm === '' || watch.name.toLowerCase().includes(searchTerm.toLowerCase());

//     return isCategoryMatch && isPriceMatch && isNameMatch;
//   });

//   const cartCount = cart.length;

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <a href="/home" className="text-white text-2xl font-bold">WatchMania</a>
//           <ul className="flex space-x-6">
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/home')}>Home</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/watches')}>Watches</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/about-page')}>About</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/contact-page')}>Contact</button></li>
//           </ul>
//           <div className="flex items-center space-x-4">
//             <button className="relative flex items-center" onClick={() => navigate('/cart')}>
//               <span className="text-white font-semibold">Cart</span>
//               {cartCount > 0 && (
//                 <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">{cartCount}</span>
//               )}
//             </button>
//             <button className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl hover:bg-green-600 focus:outline-none" aria-label="User Profile">JD</button>
//             <button className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 focus:outline-none">Logout</button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-blue-800 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Watch Catalog</h1>
//           <p className="text-lg md:text-2xl mb-8">Find your perfect watch from our extensive collection.</p>
//         </div>
//       </header>

//       {/* Filter Section */}
//       <section className="container mx-auto py-8 px-4 md:px-6">
//         <h2 className="text-2xl font-bold mb-6 text-center">Filter Watches</h2>
//         <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Category</label>
//             <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg">
//               <option value="All">All</option>
//               {Array.from(new Set(watches.map(watch => watch.category))).map(cat => (
//                 <option key={cat} value={cat}>{cat}</option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Min Price</label>
//             <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Min Price" />
//           </div>
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Max Price</label>
//             <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Max Price" />
//           </div>
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Search by Name</label>
//             <input 
//               type="text" 
//               value={searchTerm} 
//               onChange={(e) => setSearchTerm(e.target.value)} 
//               className="w-full p-2 border border-gray-300 rounded-lg" 
//               placeholder="Search by name" 
//             />
//           </div>
//         </div>
//       </section>

//       {/* Watches Listing Section */}
//       <section className="container mx-auto py-12 px-4 md:px-6">
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Watches</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {filteredWatches.length > 0 ? (
//             filteredWatches.map((watch) => (
//               <div key={watch.watch_id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
//                 <img src={watch.imageUrl || '/default_image.jpg'} alt={watch.name} className="w-full h-64 object-cover" />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
//                   <p className="text-gray-700 mb-4">{watch.description}</p>
//                   <p className="text-gray-900 text-lg font-bold">${watch.price.toFixed(2)}</p>
//                   <div className="mt-4 flex justify-between">
//                     <button 
//                       onClick={() => handleAddToCart(watch)} 
//                       className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//                     >
//                       Add to Cart
//                     </button>
//                     <button 
//                       onClick={() => handleViewDetails(watch.watch_id)} 
//                       className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
//                     >
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="col-span-full text-center text-gray-700">No watches found.</p>
//           )}
//         </div>
//       </section>

//       {/* Popup Message */}
//       {showPopup && (
//         <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
//           {popupMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WatchCatalogPage;
//------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const WatchCatalogPage = () => {
//   const [watches, setWatches] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedBrand, setSelectedBrand] = useState('All');
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch watches from backend or use sample data
//     const fetchWatches = async () => {
//       try {
//         const response = await axios.get('http://localhost:8089/watch/all');
//         setWatches(response.data);
//       } catch (error) {
//         console.error('Error fetching watches:', error);
//         // Load sample data in case of an error
//         const sampleData = [
//           {
//             watch_id: 1,
//             name: 'Elegant Watch',
//             description: 'An elegant watch for formal occasions.',
//             category: 'Luxury',
//             brand: 'BrandA',
//             price: 1200.00,
//             imageUrl: '/images/elegant_watch.jpg'
//           },
//           {
//             watch_id: 2,
//             name: 'Sporty Watch',
//             description: 'A sporty watch for your active lifestyle.',
//             category: 'Sports',
//             brand: 'BrandB',
//             price: 300.00,
//             imageUrl: '/images/sporty_watch.jpg'
//           },
//           // Add more sample data as needed
//         ];
//         setWatches(sampleData);
//       }
//     };

//     fetchWatches();
//   }, []);

//   const handleAddToCart = (watch) => {
//     setCart([...cart, watch]);
//     setPopupMessage(`${watch.name} added to cart!`);
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
//   };

//   const handleViewDetails = (watchId) => {
//     navigate(`/watch-details/${watchId}`);
//   };

//   const filteredWatches = watches.filter(watch => {
//     const isCategoryMatch = selectedCategory === 'All' || watch.category === selectedCategory;
//     const isBrandMatch = selectedBrand === 'All' || watch.brand === selectedBrand;
//     const isPriceMatch = (minPrice === '' || watch.price >= parseFloat(minPrice)) &&
//                           (maxPrice === '' || watch.price <= parseFloat(maxPrice));
//     const isNameMatch = searchTerm === '' || watch.name.toLowerCase().includes(searchTerm.toLowerCase());

//     return isCategoryMatch && isBrandMatch && isPriceMatch && isNameMatch;
//   });

//   const cartCount = cart.length;

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <a href="/home" className="text-white text-2xl font-bold">WatchMania</a>
//           <ul className="flex space-x-6">
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/home')}>Home</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/watches')}>Watches</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/about-page')}>About</button></li>
//             <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/contact-page')}>Contact</button></li>
//           </ul>
//           <div className="flex items-center space-x-4">
//             <button className="relative flex items-center" onClick={() => navigate('/cart')}>
//               <span className="text-white font-semibold">Cart</span>
//               {cartCount > 0 && (
//                 <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">{cartCount}</span>
//               )}
//             </button>
//             <button className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl hover:bg-green-600 focus:outline-none" aria-label="User Profile">JD</button>
//             <button className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 focus:outline-none">Logout</button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-blue-800 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Watch Catalog</h1>
//           <p className="text-lg md:text-2xl mb-8">Find your perfect watch from our extensive collection.</p>
//         </div>
//       </header>

//       {/* Filter Section */}
//       <section className="container mx-auto py-8 px-4 md:px-6">
//         <h2 className="text-2xl font-bold mb-6 text-center">Filter Watches</h2>
//         <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Category</label>
//             <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg">
//               <option value="All">All</option>
//               {Array.from(new Set(watches.map(watch => watch.category))).map(cat => (
//                 <option key={cat} value={cat}>{cat}</option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Brand</label>
//             <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg">
//               <option value="All">All</option>
//               {Array.from(new Set(watches.map(watch => watch.brand))).map(brand => (
//                 <option key={brand} value={brand}>{brand}</option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Min Price</label>
//             <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Min Price" />
//           </div>
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Max Price</label>
//             <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Max Price" />
//           </div>
//           <div className="mb-4 md:mb-0">
//             <label className="block text-gray-700 font-semibold mb-2">Search by Name</label>
//             <input 
//               type="text" 
//               value={searchTerm} 
//               onChange={(e) => setSearchTerm(e.target.value)} 
//               className="w-full p-2 border border-gray-300 rounded-lg" 
//               placeholder="Search by name" 
//             />
//           </div>
//         </div>
//       </section>

//       {/* Watches Listing Section */}
//       <section className="container mx-auto py-12 px-4 md:px-6">
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Watches</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {filteredWatches.length > 0 ? (
//             filteredWatches.map((watch) => (
//               <div key={watch.watch_id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
//                 <img src={watch.imageUrl || '/default_image.jpg'} alt={watch.name} className="w-full h-64 object-cover" />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
//                   <p className="text-gray-700 mb-4">{watch.description}</p>
//                   <p className="text-gray-900 text-lg font-bold">${watch.price.toFixed(2)}</p>
//                   <div className="mt-4 flex justify-between">
//                     <button 
//                       onClick={() => handleAddToCart(watch)} 
//                       className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//                     >
//                       Add to Cart
//                     </button>
//                     <button 
//                       onClick={() => handleViewDetails(watch.watch_id)} 
//                       className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
//                     >
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="col-span-full text-center text-gray-700">No watches found.</p>
//           )}
//         </div>
//       </section>

//       {/* Popup Message */}
//       {showPopup && (
//         <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
//           {popupMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WatchCatalogPage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const WatchCatalogPage = () => {
  const [watches, setWatches] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch watches from the backend
    const fetchWatches = async () => {
      try {
        const response = await axios.get('http://localhost:8089/watch/all');
        setWatches(response.data);
      } catch (error) {
        console.error('Error fetching watches:', error);
        // Handle error, maybe show a message to the user
      }
    };

    fetchWatches();
  }, []);

  const handleAddToCart = (watch) => {
    setCart([...cart, watch]);
    setPopupMessage(`${watch.name} added to cart!`);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  const handleViewDetails = (watchId) => {
    navigate(`/watch-details/${watchId}`);
  };

  const filteredWatches = watches.filter(watch => {
    const isCategoryMatch = selectedCategory === 'All' || watch.category === selectedCategory;
    const isPriceMatch = (minPrice === '' || watch.price >= parseFloat(minPrice)) &&
                          (maxPrice === '' || watch.price <= parseFloat(maxPrice));
    const isNameMatch = searchTerm === '' || watch.name.toLowerCase().includes(searchTerm.toLowerCase());

    return isCategoryMatch && isPriceMatch && isNameMatch;
  });

  const cartCount = cart.length;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/home" className="text-white text-2xl font-bold">WatchMania</a>
          <ul className="flex space-x-6">
            <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/home')}>Home</button></li>
            <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/watches')}>Watches</button></li>
            <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/about-page')}>About</button></li>
            <li><button className="text-white font-semibold hover:text-gray-300 focus:outline-none" onClick={() => navigate('/contact-page')}>Contact</button></li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="relative flex items-center" onClick={() => navigate('/cart')}>
              <span className="text-white font-semibold">Cart</span>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">{cartCount}</span>
              )}
            </button>
            <button className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl hover:bg-green-600 focus:outline-none" aria-label="User Profile">JD</button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 focus:outline-none">Logout</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Watch Catalog</h1>
          <p className="text-lg md:text-2xl mb-8">Find your perfect watch from our extensive collection.</p>
        </div>
      </header>

      {/* Filter Section */}
      <section className="container mx-auto py-8 px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Filter Watches</h2>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
          <div className="mb-4 md:mb-0">
            <label className="block text-gray-700 font-semibold mb-2">Category</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg">
              <option value="All">All</option>
              {Array.from(new Set(watches.map(watch => watch.category))).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="mb-4 md:mb-0">
            <label className="block text-gray-700 font-semibold mb-2">Min Price</label>
            <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Min Price" />
          </div>
          <div className="mb-4 md:mb-0">
            <label className="block text-gray-700 font-semibold mb-2">Max Price</label>
            <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Max Price" />
          </div>
          <div className="mb-4 md:mb-0">
            <label className="block text-gray-700 font-semibold mb-2">Search by Name</label>
            <input 
              type="text" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              placeholder="Search by name" 
            />
          </div>
        </div>
      </section>

      {/* Watches Listing Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Watches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredWatches.length > 0 ? (
            filteredWatches.map((watch) => (
              <div key={watch.watch_id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                <img src={watch.imageUrl || '/default_image.jpg'} alt={watch.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
                  <p className="text-gray-700 mb-4">{watch.description}</p>
                  <p className="text-gray-900 text-lg font-bold">${watch.price.toFixed(2)}</p>
                  <div className="mt-4 flex justify-between">
                    <button 
                      onClick={() => handleAddToCart(watch)} 
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => handleViewDetails(watch.watch_id)} 
                      className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-700">No watches found.</p>
          )}
        </div>
      </section>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default WatchCatalogPage;




