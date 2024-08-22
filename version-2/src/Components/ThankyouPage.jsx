import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; // Import icons from react-icons

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-2xl w-full text-center">
        {/* Hero Image or Graphic */}
        <div className="mb-6">
          <img 
            src="\cart_logo.png" 
            alt="Thank You"
            className="mx-auto mb-4 w-24 h-24"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Thanks for Shopping with Us!
        </h1>

        {/* Personalized Message */}
        <p className="text-lg text-gray-600 mb-6">
          We truly appreciate your business and hope you enjoyed your shopping experience with us.
        </p>
        
        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Order Summary</h2>
          <p className="text-gray-600">Your order is being processed and will be shipped shortly.</p>
          {/* Example of order details */}
          <ul className="list-disc list-inside text-left mt-4">
            <li>Order ID: <span className="font-semibold">#123456789</span></li>
            <li>Estimated Delivery: <span className="font-semibold">5-7 business days</span></li>
            <li>Shipping Method: <span className="font-semibold">Standard Shipping</span></li>
          </ul>
        </div>
        
        {/* Additional Content */}
        <p className="text-md text-gray-500 mb-8">
          You will receive an email confirmation with tracking details soon. If you have any questions or need assistance, please don't hesitate to <a href="/contact" className="text-blue-500 hover:underline">contact us</a>.
        </p>

        {/* Social Media and Special Offer */}
        <div className="mb-6">
          <p className="text-gray-600 mb-4">Stay connected with us:</p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800"><FaShoppingCart size={24} /></a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600"><FaHeart size={24} /></a>
            <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700"><FaHeart size={24} /></a>
          </div>
          <p className="text-md text-gray-700">
            <span className="font-semibold">Special Offer:</span> Use code <span className="font-bold text-blue-600">THANKYOU10</span> for 10% off your next purchase!
          </p>
        </div>

        {/* Return to Home Button */}
        <a 
          href="/home" 
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYouPage;
