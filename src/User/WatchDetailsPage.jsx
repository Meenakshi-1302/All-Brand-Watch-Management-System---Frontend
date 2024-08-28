// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useCart } from 'react-use-cart'; // Import react-use-cart hook
// import Header from '../User/Header'; // Adjust the path as necessary
// import WatchCard from '../User/WatchCard.jsx';
// import { FaGift } from 'react-icons/fa'; // Import the gift icon
// import { useNavigate } from 'react-router-dom';

// const WatchDetailsPage = () => {
//   const { id } = useParams();

//   // State to manage watch data
//   const navigate = useNavigate();
//   const [watch, setWatch] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [relatedWatches, setRelatedWatches] = useState([]);
//   const [isGift, setIsGift] = useState(false);
//   const [giftDescription, setGiftDescription] = useState('');
//   const [showPopup, setShowPopup] = useState(false); // State for popup

//   const { addItem } = useCart(); // Use react-use-cart hook
  
//   const handleCheckout = () => {
//     navigate('/checkout'); // Redirect to checkout page
//   };

//   const handleAddProduct = () => {
//     if (!watch) return;

//     const product = {
//       id: watch.productId, // Ensure this matches the structure used in your cart
//       name: watch.name,
//       price: watch.price,
//       quantity: 1,
//       image: watch.image,
//       description: watch.description,
//       gift: isGift ? giftDescription : null,
//     };

//     addItem(product); // Add item to cart
//     setShowPopup(true); // Show popup
//     setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
//   };

//   useEffect(() => {
//     const fetchWatchDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8085/product/${id}`);
//         setWatch(response.data);
//       } catch (error) {
//         setError('Error fetching watch details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchRelatedWatches = async () => {
//       try {
//         const response = await axios.get('http://localhost:8085/product/all');
//         setRelatedWatches(response.data);
//       } catch (error) {
//         console.error('Error fetching related watches', error);
//       }
//     };

//     fetchWatchDetails();
//     fetchRelatedWatches();
//   }, [id]);

//   if (loading) return <p className="text-center text-gray-500">Loading...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;
//   if (!watch) return <p className="text-center text-gray-500">No watch found</p>;

//   return (
//     <div className="min-h-screen bg-gray-100 relative"> {/* Add relative positioning to the container */}
//       <Header /> {/* Include the header at the top */}

//       <main className="p-6">
//         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
//           <div className="flex flex-col md:flex-row md:space-x-6">
//             <div className="flex-shrink-0 w-full md:w-1/2">
//               <img 
//                 src={watch.image || 'https://via.placeholder.com/600x400?text=No+Image+Available'} 
//                 alt={watch.name} 
//                 className="w-full h-auto rounded-lg shadow-md"
//               />
//             </div>
//             <div className="mt-6 md:mt-0 md:w-1/2">
//               <h1 className="text-4xl font-bold text-gray-800 mb-4">{watch.name}</h1>
//               <p className="text-lg text-gray-600 mb-4">{watch.description}</p>
//               <p className="text-2xl font-semibold text-gray-900 mb-6">Rs.{watch.price}</p>

//               <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
//                 <button
//                   className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out flex-1"
//                   onClick={handleAddProduct}
//                 >
//                   Add to Cart
//                 </button>
//                 <button
//                   className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out flex-1"
//                   onClick={handleCheckout}
//                 >
//                   Buy Now
//                 </button>
//               </div>

//               {/* Gift Option Section */}
//               <div className="mt-6 flex items-center space-x-2">
//                 <FaGift className="text-xl text-gray-700" /> {/* Gift icon */}
//                 <label className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     checked={isGift}
//                     onChange={() => setIsGift(!isGift)}
//                     className="form-checkbox"
//                   />
//                   <span className="text-lg text-gray-700">Add as a gift</span>
//                 </label>
//               </div>
//               {isGift && (
//                 <textarea
//                   value={giftDescription}
//                   onChange={(e) => setGiftDescription(e.target.value)}
//                   placeholder="Enter gift description here..."
//                   className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
//                 />
//               )}
//             </div>
//           </div>
//           {/* Related Watches Section */}
//           <div className="mt-8 border-t pt-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">You Might Also Like</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {relatedWatches.map((relatedWatch) => (
//                 <WatchCard key={relatedWatch.productId} watch={relatedWatch} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Popup Message */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-green-500 text-white py-4 px-6 rounded-lg shadow-lg">
//             <p>Added to cart!</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WatchDetailsPage;

//===================redex==============================
// WatchDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addItem } from '../cartSlice'; // Import addItem action
import Header from '../User/Header'; // Adjust the path as necessary
import WatchCard from '../User/WatchCard.jsx';
import { FaGift } from 'react-icons/fa'; // Import the gift icon

const WatchDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch(); // Initialize useDispatch
  const navigate = useNavigate();

  const [watch, setWatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedWatches, setRelatedWatches] = useState([]);
  const [isGift, setIsGift] = useState(false);
  const [giftDescription, setGiftDescription] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleAddProduct = () => {
    if (!watch) return;

    const product = {
      id: watch.productId,
      name: watch.name,
      price: watch.price,
      quantity: 1,
      image: watch.image,
      description: watch.description,
      gift: isGift ? giftDescription : null,
    };

    dispatch(addItem(product)); // Add item to Redux cart
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  useEffect(() => {
    const fetchWatchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8085/product/${id}`);
        setWatch(response.data);
      } catch (error) {
        setError('Error fetching watch details');
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedWatches = async () => {
      try {
        const response = await axios.get('http://localhost:8085/product/all');
        setRelatedWatches(response.data);
      } catch (error) {
        console.error('Error fetching related watches', error);
      }
    };

    fetchWatchDetails();
    fetchRelatedWatches();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!watch) return <p className="text-center text-gray-500">No watch found</p>;

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header />

      <main className="p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-shrink-0 w-full md:w-1/2">
              <img 
                src={watch.image || 'https://via.placeholder.com/600x400?text=No+Image+Available'} 
                alt={watch.name} 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{watch.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{watch.description}</p>
              <p className="text-2xl font-semibold text-gray-900 mb-6">Rs.{watch.price}</p>

              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <button
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out flex-1"
                  onClick={handleAddProduct}
                >
                  Add to Cart
                </button>
                <button
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out flex-1"
                  onClick={handleCheckout}
                >
                  Buy Now
                </button>
              </div>

              {/* Gift Option Section */}
              <div className="mt-6 flex items-center space-x-2">
                <FaGift className="text-xl text-gray-700" />
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isGift}
                    onChange={() => setIsGift(!isGift)}
                    className="form-checkbox"
                  />
                  <span className="text-lg text-gray-700">Add as a gift</span>
                </label>
              </div>
              {isGift && (
                <textarea
                  value={giftDescription}
                  onChange={(e) => setGiftDescription(e.target.value)}
                  placeholder="Enter gift description here..."
                  className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Related Watches Section */}
          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedWatches.map((relatedWatch) => (
                <WatchCard key={relatedWatch.productId} watch={relatedWatch} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-green-500 text-white py-4 px-6 rounded-lg shadow-lg">
            <p>Added to cart!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchDetailsPage;
