import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MdArrowBack } from 'react-icons/md'; // Import the back icon

const CategoryDetailsPage = () => {
  const { categoryName } = useParams();
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use navigate hook

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8089/watch/all');
        const data = response.data;

        // Group watches by category
        const groupedWatches = data.reduce((acc, watch) => {
          if (!acc[watch.category]) {
            acc[watch.category] = [];
          }
          acc[watch.category].push(watch);
          return acc;
        }, {});

        setWatches(groupedWatches[categoryName] || []);
      } catch (err) {
        setError('Failed to fetch watch details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWatches();
  }, [categoryName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (watches.length === 0) {
    return <div>No watches found for this category</div>;
  }

  const handleAddToCart = (watchId) => {
    console.log(`Adding watch ${watchId} to cart`);
    // Implement the logic for adding the watch to the cart
  };

  const handleViewDetails = (watchId) => {
    navigate(`/watch-details/${watchId}`); // Use navigate to redirect
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center relative">
          <button 
            onClick={handleGoBack} 
            className="absolute top-4 left-4 flex items-center text-white hover:text-gray-300 focus:outline-none"
          >
            <MdArrowBack className="text-2xl" />
            <span className="ml-2 text-lg">Back</span>
          </button>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{categoryName}</h1>
          <p className="text-lg md:text-2xl mb-8">Explore our collection of {categoryName}</p>
        </div>
      </header>

      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <div key={watch.watch_id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img src={watch.imageUrl} alt={watch.name} className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
                <p className="text-gray-700 mb-4">{watch.description}</p>
                <p className="text-gray-900 font-semibold mb-4">Price: ${watch.price.toFixed(2)}</p>
                <div className="flex space-x-4">
                  {/* Uncomment and implement this if needed
                  <button
                    onClick={() => handleAddToCart(watch.watch_id)}
                    className="bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 focus:outline-none"
                  >
                    Add to Cart
                  </button> 
                  */}
                  <button
                    onClick={() => handleViewDetails(watch.watch_id)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryDetailsPage;
