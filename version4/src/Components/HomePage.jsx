// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const HomePage = () => {
// //   const navigate = useNavigate();
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [watches, setWatches] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     // Fetch watch data from backend
// //     const fetchWatches = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8089/watch/all'); // Replace with your backend endpoint
// //         // Process and handle image URLs here if necessary
// //         const processedWatches = response.data.map(watch => ({
// //           ...watch,
// //           imageUrl: watch.imageUrl ? `http://localhost:8089/$(watch_id)/${watch.imageUrl}` : 'https://via.placeholder.com/300x200?text=No+Image+Available'
// //         }));
// //         setWatches(processedWatches);
// //       } catch (error) {
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchWatches();
// //   }, []);

// //   const handleLogout = () => {
// //     // Handle logout logic here (e.g., clear auth tokens, redirect to login page)
// //     console.log('User logged out');
// //     navigate('/'); // Redirect to login page after logout
// //   };

// //   const handleUserProfile = () => {
// //     navigate('/userprofile-page'); // Redirect to user profile page
// //   };

// //   const handleSearch = () => {
// //     // Handle search logic here, e.g., redirect to a search results page
// //     console.log('Search for:', searchQuery);
// //     navigate(`/search-page?query=${encodeURIComponent(searchQuery)}`); // Example search result redirection
// //   };

// //   // Dummy user data
// //   const userName = "John Doe";
// //   const userInitial = userName.charAt(0).toUpperCase();

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       {/* Navigation Bar */}
// //       <nav className="bg-blue-600 p-4">
// //         <div className="container mx-auto flex items-center justify-between">
// //           {/* Logo */}
// //           <a href="/home" className="text-white text-2xl font-bold">WatchMania</a>

// //           {/* Navigation Links */}
// //           <ul className="hidden md:flex space-x-6 items-center">
// //             <li>
// //               <button 
// //                 onClick={() => navigate('/home')} 
// //                 className="text-white font-semibold hover:text-gray-300 focus:outline-none"
// //               >
// //                 Home
// //               </button>
// //             </li>
// //             <li>
// //               <button 
// //                 onClick={() => navigate('/watch-category')} 
// //                 className="text-white font-semibold hover:text-gray-300 focus:outline-none"
// //               >
// //                 Watches
// //               </button>
// //             </li>
// //             <li>
// //               <button 
// //                 onClick={() => navigate('/about-page')} 
// //                 className="text-white font-semibold hover:text-gray-300 focus:outline-none"
// //               >
// //                 About
// //               </button>
// //             </li>
// //             <li>
// //               <button 
// //                 onClick={() => navigate('/contact-page')} 
// //                 className="text-white font-semibold hover:text-gray-300 focus:outline-none"
// //               >
// //                 Contact
// //               </button>
// //             </li>
// //           </ul>

// //           {/* Search Bar
// //           <div className="flex-1 max-w-md mx-4">
// //             <div className="relative">
// //               <input 
// //                 type="text" 
// //                 value={searchQuery} 
// //                 onChange={(e) => setSearchQuery(e.target.value)} 
// //                 placeholder="Search..." 
// //                 className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
// //               />
// //               <button 
// //                 onClick={handleSearch} 
// //                 className="absolute right-0 top-0 bottom-0 bg-yellow-500 text-black py-2 px-4 rounded-r-lg font-semibold hover:bg-yellow-600 focus:outline-none"
// //               >
// //                 Search
// //               </button>
// //             </div>
// //           </div> */}

// //           {/* User Profile and Logout Buttons */}
// //           <div className="flex items-center space-x-4">
// //             <button 
// //               onClick={handleUserProfile} 
// //               className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl hover:bg-green-600 focus:outline-none"
// //               aria-label="User Profile"
// //             >
// //               {userInitial}
// //             </button>
// //             <button 
// //               onClick={handleLogout} 
// //               className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 focus:outline-none"
// //             >
// //               Logout
// //             </button>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <header className="bg-blue-800 text-white py-20">
// //         <div className="container mx-auto text-center">
// //           <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to WatchMania</h1>
// //           <p className="text-lg md:text-2xl mb-8">Discover and manage your favorite watches with ease.</p>
// //           <a href="/watch-catelog" className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 inline-block">Explore Watches</a>
// //         </div>
// //       </header>

// //       {/* Watches Grid */}
// //       <main className="container mx-auto py-12">
// //         <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
// //         {loading ? (
// //           <div className="text-center">Loading...</div>
// //         ) : error ? (
// //           <div className="text-center text-red-500">Error: {error}</div>
// //         ) : (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {watches.map(watch => (
// //               <div key={watch.watch_id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
// //                 <img src={`watch:image/jpeg;base64,${watch.imageUrl}`} alt={watch.name}
                  
// //                   className="w-full h-auto object-cover"
// //                 />

// //  {/* className="w-full h-60 object-cover" /> */}
// //                 <div className="p-6">
// //                   <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
// //                   <p className="text-gray-700 mb-4">{watch.description}</p>
// //                   <a 
// //                     href={`/watch-details/${watch.watch_id}`} 
// //                     className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 inline-block"
// //                   >
// //                     View Details
// //                   </a>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-gray-800 text-white py-6">
// //         <div className="container mx-auto text-center">
// //           <p>&copy; 2024 WatchMania. All rights reserved.</p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default HomePage;
// //-----------------------------------------------version-2 working version----------------------------------------------------------------------
// //------------------------------------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Header from './Header';

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [watches, setWatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch watch data from backend
//     const fetchWatches = async () => {
//       try {
//         const response = await axios.get('http://localhost:8089/watch/all'); // Replace with your backend endpoint
//         const processedWatches = response.data.map(watch => ({
//           ...watch,
//           imageUrl: watch.imageUrl ? `http://localhost:8089/watch/images/${watch.imageUrl}` : 'https://via.placeholder.com/300x200?text=No+Image+Available'
//         }));
//         setWatches(processedWatches);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWatches();
//   }, []);

//   const handleLogout = () => {
//     // Handle logout logic here (e.g., clear auth tokens, redirect to login page)
//     console.log('User logged out');
//     navigate('/'); // Redirect to login page after logout
//   };

//   const handleUserProfile = () => {
//     navigate('/userprofile-page'); // Redirect to user profile page
//   };

//   const handleSearch = () => {
//     // Handle search logic here, e.g., redirect to a search results page
//     console.log('Search for:', searchQuery);
//     navigate(`/search-page?query=${encodeURIComponent(searchQuery)}`); // Example search result redirection
//   };

//   // // Dummy user data
//   // const userName = "John Doe";
//   // const userInitial = userName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header/>
//       {/* Navigation Bar */}
//       {/* <nav className="bg-blue-600 p-4">
//         <div className="container mx-auto flex items-center justify-between">
//           {/* Logo */}
//           {/* <a href="/home" className="text-white text-2xl font-bold">WatchMania</a> */} *

//           {/* Navigation Links */}
//           {/* <ul className="hidden md:flex space-x-6 items-center">
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
//           </ul> */}

//           {/* Search Bar */}
//           {/* <div className="flex-1 max-w-md mx-4">
//             <div className="relative">
//               <input 
//                 type="text" 
//                 value={searchQuery} 
//                 onChange={(e) => setSearchQuery(e.target.value)} 
//                 placeholder="Search..." 
//                 className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//               <button 
//                 onClick={handleSearch} 
//                 className="absolute right-0 top-0 bottom-0 bg-yellow-500 text-black py-2 px-4 rounded-r-lg font-semibold hover:bg-yellow-600 focus:outline-none"
//               >
//                 Search
//               </button>
//             </div>
//           </div> */}

//           {/* User Profile and Logout Buttons */}
//           {/* <div className="flex items-center space-x-4">
//             <button 
//               onClick={handleUserProfile} 
//               className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl hover:bg-green-600 focus:outline-none"
//               aria-label="User Profile"
//             >
//               {userInitial}
//             </button>
//             <button 
//               onClick={handleLogout} 
//               className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 focus:outline-none"
//             >
//               Logout
//             </button>
//           </div> */}
//         {/* </div>
//       </nav> */}

//       {/* Hero Section */}
//       <header className="bg-blue-800 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to WatchMania</h1>
//           <p className="text-lg md:text-2xl mb-8">Discover and manage your favorite watches with ease.</p>
//           <a href="/watch-catelog" className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 inline-block">Explore Watches</a>
//         </div>
//       </header>

//       {/* Watches Grid */}
//       <main className="container mx-auto py-12">
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
//         {loading ? (
//           <div className="text-center">Loading...</div>
//         ) : error ? (
//           <div className="text-center text-red-500">Error: {error}</div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {watches.map(watch => (
//               <div key={watch.watch_id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
//                 <img 
//                   src={watch.imageUrl} 
//                   alt={watch.name} 
//                   className="w-full h-60 object-cover" 
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
//                   <p className="text-gray-700 mb-4">{watch.description}</p>
//                   <a 
//                     href={`/watch-details/${watch.watch_id}`} 
//                     className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 inline-block"
//                   >
//                     View Details
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 WatchMania. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
//-----------------------trail code-------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Header from './Header';

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [watches, setWatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch watch data from backend
//     const fetchWatches = async () => {
//       try {
//         const response = await axios.get('http://localhost:8089/watch/all'); // Replace with your backend endpoint
//         const processedWatches = response.data.map(watch => ({
//           ...watch,
//           imageUrl: watch.imageUrl ? `http://localhost:8089/watch/images/${encodeURIComponent(watch.imageUrl)}` : 'https://via.placeholder.com/300x200?text=No+Image+Available'
//         }));
//         setWatches(processedWatches);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWatches();
//   }, []);

//   const handleLogout = () => {
//     // Handle logout logic here (e.g., clear auth tokens, redirect to login page)
//     console.log('User logged out');
//     navigate('/'); // Redirect to login page after logout
//   };

//   const handleUserProfile = () => {
//     navigate('/userprofile-page'); // Redirect to user profile page
//   };

//   const handleSearch = () => {
//     // Handle search logic here, e.g., redirect to a search results page
//     console.log('Search for:', searchQuery);
//     navigate(`/search-page?query=${encodeURIComponent(searchQuery)}`); // Example search result redirection
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header/>

//       {/* Hero Section */}
//       <header className="bg-blue-800 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to WatchMania</h1>
//           <p className="text-lg md:text-2xl mb-8">Discover and manage your favorite watches with ease.</p>
//           <a href="/watch-catelog" className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 inline-block">Explore Watches</a>
//         </div>
//       </header>

//       {/* Watches Grid */}
//       <main className="container mx-auto py-12">
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
//         {loading ? (
//           <div className="text-center">Loading...</div>
//         ) : error ? (
//           <div className="text-center text-red-500">Error: {error}</div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {watches.map(watch => (
//               <div key={watch.watch_id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
//                 <img 
//                   src={watch.imageUrl} 
//                   alt={watch.name} 
//                   className="w-full h-60 object-cover"
//                   onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=No+Image+Available'} // Fallback image
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
//                   <p className="text-gray-700 mb-4">{watch.description}</p>
//                   <a 
//                     href={`/watch-details/${watch.watch_id}`} 
//                     className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 inline-block"
//                   >
//                     View Details
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 WatchMania. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
//----------------------------------------------------------------------------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch watch data from backend
    const fetchWatches = async () => {
      try {
        const response = await axios.get('http://localhost:8089/watch/all'); // Replace with your backend endpoint
        const baseURL = 'http://localhost:8089/watch/images/'; // Base URL for image access

        // Process watches to include full image URL
        const processedWatches = response.data.map(watch => ({
          ...watch,
          imageUrl: watch.imageUrl ? `${baseURL}${encodeURIComponent(watch.imageUrl)}` : 'https://via.placeholder.com/300x200?text=No+Image+Available'
        }));
        setWatches(processedWatches);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear auth tokens, redirect to login page)
    console.log('User logged out');
    navigate('/'); // Redirect to login page after logout
  };

  const handleUserProfile = () => {
    navigate('/userprofile-page'); // Redirect to user profile page
  };

  const handleSearch = () => {
    // Handle search logic here, e.g., redirect to a search results page
    console.log('Search for:', searchQuery);
    navigate(`/search-page?query=${encodeURIComponent(searchQuery)}`); // Example search result redirection
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <header className="bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to WatchMania</h1>
          <p className="text-lg md:text-2xl mb-8">Discover and manage your favorite watches with ease.</p>
          <a href="/watch-catelog" className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 inline-block">Explore Watches</a>
        </div>
      </header>

      {/* Watches Grid */}
      <main className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">Error: {error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {watches.map(watch => (
              <div key={watch.watch_id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img 
                  src={watch.imageUrl} 
                  alt={watch.name} 
                  className="w-full h-60 object-cover"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=No+Image+Available'} // Fallback image
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
                  <p className="text-gray-700 mb-4">{watch.description}</p>
                  <a 
                    href={`/watch-details/${watch.watch_id}`} 
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 inline-block"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 WatchMania. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [watches, setWatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch watch data from backend
//     const fetchWatches = async () => {
//       try {
//         // Fetch watch data
//         const response = await axios.get('http://localhost:8089/watch/all'); // Replace with your backend endpoint
//         const watchesWithBlobUrls = await Promise.all(response.data.map(async (watch) => {
//           let imageUrl = 'https://via.placeholder.com/300x200?text=No+Image+Available'; // Default placeholder image
//           if (watch.imageUrl) {
//             try {
//               // Fetch the image as a Blob
//               const imageResponse = await axios.get(`http://localhost:8089/watch/images/${watch.imageUrl}`, {
//                 responseType: 'blob' // Important to specify the response type as blob
//               });
//               // Create a URL for the Blob
//               imageUrl = URL.createObjectURL(imageResponse.data);
//             } catch (imageError) {
//               console.error('Error fetching image:', imageError);
//             }
//           }
//           return { ...watch, imageUrl };
//         }));
//         setWatches(watchesWithBlobUrls);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWatches();
//   }, []);

//   const handleLogout = () => {
//     // Handle logout logic here (e.g., clear auth tokens, redirect to login page)
//     console.log('User logged out');
//     navigate('/'); // Redirect to login page after logout
//   };

//   const handleUserProfile = () => {
//     navigate('/userprofile-page'); // Redirect to user profile page
//   };

//   const handleSearch = () => {
//     // Handle search logic here, e.g., redirect to a search results page
//     console.log('Search for:', searchQuery);
//     navigate(`/search-page?query=${encodeURIComponent(searchQuery)}`); // Example search result redirection
//   };

//   // Dummy user data
//   const userName = "John Doe";
//   const userInitial = userName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 p-4">
//         <div className="container mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <a href="/home" className="text-white text-2xl font-bold">WatchMania</a>

//           {/* Navigation Links */}
//           <ul className="hidden md:flex space-x-6 items-center">
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

//           {/* Search Bar */}
//           <div className="flex-1 max-w-md mx-4">
//             <div className="relative">
//               <input 
//                 type="text" 
//                 value={searchQuery} 
//                 onChange={(e) => setSearchQuery(e.target.value)} 
//                 placeholder="Search..." 
//                 className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//               <button 
//                 onClick={handleSearch} 
//                 className="absolute right-0 top-0 bottom-0 bg-yellow-500 text-black py-2 px-4 rounded-r-lg font-semibold hover:bg-yellow-600 focus:outline-none"
//               >
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* User Profile and Logout Buttons */}
//           <div className="flex items-center space-x-4">
//             <button 
//               onClick={handleUserProfile} 
//               className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xl hover:bg-green-600 focus:outline-none"
//               aria-label="User Profile"
//             >
//               {userInitial}
//             </button>
//             <button 
//               onClick={handleLogout} 
//               className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 focus:outline-none"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="bg-blue-800 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to WatchMania</h1>
//           <p className="text-lg md:text-2xl mb-8">Discover and manage your favorite watches with ease.</p>
//           <a href="/watch-catelog" className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 inline-block">Explore Watches</a>
//         </div>
//       </header>

//       {/* Watches Grid */}
//       <main className="container mx-auto py-12">
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
//         {loading ? (
//           <div className="text-center">Loading...</div>
//         ) : error ? (
//           <div className="text-center text-red-500">Error: {error}</div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {watches.map(watch => (
//               <div key={watch.watch_id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
//                 <img 
//                   src={watch.imageUrl} 
//                   alt={watch.name} 
//                   className="w-full h-60 object-cover" 
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
//                   <p className="text-gray-700 mb-4">{watch.description}</p>
//                   <a 
//                     href={`/watch-details/${watch.watch_id}`} 
//                     className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 inline-block"
//                   >
//                     View Details
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 WatchMania. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


