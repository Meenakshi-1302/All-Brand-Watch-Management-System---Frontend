import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const WatchCatalogPage = () => {
  const [watches, setWatches] = useState([]);
  const [cart, setCart] = useState([]);
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
        const response = await axios.get('http://localhost:8085/product/all');
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

  const handleViewDetails = (productId) => {
    navigate(`/watch-details/${productId}`);
  };

  const filteredWatches = watches.filter(watch => {
    const isPriceMatch = (minPrice === '' || watch.price >= parseFloat(minPrice)) &&
                          (maxPrice === '' || watch.price <= parseFloat(maxPrice));
    const isNameMatch = searchTerm === '' || watch.name.toLowerCase().includes(searchTerm.toLowerCase());

    return isPriceMatch && isNameMatch;
  });

  const cartCount = cart.length;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <Header/>

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
            <label className="block text-gray-700 font-semibold mb-2">Min Price</label>
            <input 
              type="number" 
              value={minPrice} 
              onChange={(e) => setMinPrice(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              placeholder="Min Price" 
            />
          </div>
          <div className="mb-4 md:mb-0">
            <label className="block text-gray-700 font-semibold mb-2">Max Price</label>
            <input 
              type="number" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              placeholder="Max Price" 
            />
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
                <img src={watch.image || '/default_image.jpg'} alt={watch.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
                  <p className="text-gray-700 mb-4">{watch.description}</p>
                  <p className="text-gray-900 text-lg font-bold">${watch.price.toFixed(2)}</p>
                  <div className="mt-4 flex justify-between">
                    {/* Uncomment the button below if you want to enable Add to Cart functionality */}
                    {/* <button 
                      onClick={() => handleAddToCart(watch)} 
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                      Add to Cart
                    </button> */}
                    <button 
                      onClick={() => handleViewDetails(watch.productId)} 
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
