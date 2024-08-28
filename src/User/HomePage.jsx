import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../User/Header';

const HomePage = () => {
  const navigate = useNavigate();
  const [watches, setWatches] = useState([]);
  const [filteredWatches, setFilteredWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  useEffect(() => {
    // Fetch watch data from backend
    const fetchWatches = async () => {
      try {
        const response = await axios.get('http://localhost:8085/product/all'); // Replace with your backend endpoint
        setWatches(response.data);
        setFilteredWatches(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  useEffect(() => {
    // Filter watches whenever search term changes
    const filterWatches = () => {
      const filtered = watches.filter(watch => {
        const isNameMatch = watch.name.toLowerCase().includes(searchTerm.toLowerCase());
        return isNameMatch;
      });
      setFilteredWatches(filtered);
    };

    filterWatches();
  }, [searchTerm, watches]);

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear auth tokens, redirect to login page)
    console.log('User logged out');
    navigate('/'); // Redirect to home page after logout
  };

  const handleUserProfile = () => {
    navigate('/userprofile-page'); // Redirect to user profile page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <header className="bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to WatchMania</h1>
          <p className="text-lg md:text-2xl mb-8">Discover and manage your favorite watches with ease.</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/watch-catelog" 
              className="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 inline-block"
            >
              Explore Watches
            </a>
            {/* <a 
              href="/watch-category" 
              className="bg-green-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-600 inline-block"
            >
              Watch Categories
            </a> */}
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="container mx-auto py-8 px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Search Watches</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <label className="block text-gray-700 font-semibold mb-2 text-center">Search by Name</label>
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter watch name..."
            />
          </div>
        </div>
      </section>

      {/* Watches Grid */}
      <main className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">Error: {error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWatches.length > 0 ? (
              filteredWatches.map(watch => (
                <div key={watch.productId} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
                  <img 
                    src={watch.image} 
                    alt={watch.name} 
                    className="w-full h-60 object-cover"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=No+Image+Available'} // Fallback image
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
                    <p className="text-gray-700 mb-4">{watch.description}</p>
                    <a 
                      href={`/watch-details/${watch.productId}`} 
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 inline-block"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-600">No watches found</div>
            )}
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
