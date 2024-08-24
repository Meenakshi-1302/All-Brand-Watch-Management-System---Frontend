import React from 'react';

const WatchCard = ({ watch }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <img 
      src={watch.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image+Available'} 
      alt={watch.name} 
      className="w-full h-auto rounded-lg mb-4"
    />
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{watch.name}</h2>
    <p className="text-lg text-gray-600 mb-2">{watch.description}</p>
    <p className="text-xl font-semibold text-gray-900">${watch.price.toFixed(2)}</p>
    <a 
      href={`/watch-details/${watch.watch_id}`} 
      className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
    >
      View Details
    </a>
  </div>
);

export default WatchCard;
