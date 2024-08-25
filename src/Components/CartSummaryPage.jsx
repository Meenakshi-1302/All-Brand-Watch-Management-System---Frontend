//=============================================working code======================================================================================

// import React from 'react';
// import { useCart } from 'react-use-cart';
// import { useNavigate } from 'react-router-dom';
// import { AiOutlineShoppingCart } from 'react-icons/ai'; // Import the cart icon

// const CartSummaryPage = () => {
//   const { items, totalUniqueItems, cartTotal, emptyCart } = useCart();
//   const navigate = useNavigate(); // Use useNavigate 

//   const handleProceedToPay = () => {
//     // Implement redirection to payment page
//     navigate('/payment'); // Use navigate function to change the route
//   };

//   const handleBackToCart = () => {
//     // Navigate back to the cart page
//     navigate('/home'); // Assuming your cart page route is '/cart'
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <main className="p-6">
//         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Cart Summary</h1>
//           {totalUniqueItems === 0 ? (
//             <p className="text-center text-gray-500">Your cart is empty.</p>
//           ) : (
//             <div>
//               <ul className="space-y-4">
//                 {items.map(item => (
//                   <li key={item.id} className="flex justify-between items-center border-b py-4">
//                     <div className="flex items-center space-x-4">
//                       <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
//                       <div>
//                         <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
//                         <p className="text-gray-600">{item.description}</p>
//                         <p className="text-gray-900">${item.price.toFixed(2)}</p>
//                       </div>
//                     </div>
//                     <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-6 flex justify-between items-center border-t pt-4 space-x-4">
//                 <h2 className="text-2xl font-semibold text-gray-800">Total: ${cartTotal.toFixed(2)}</h2>
//                 <div className="flex space-x-4">
//                   <button
//                     onClick={handleBackToCart}
//                     className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out flex items-center"
//                   >
//                     <AiOutlineShoppingCart className="text-xl mr-2" />
//                     Back to Shopping
//                   </button>
//                   <button
//                     onClick={handleProceedToPay}
//                     className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
//                   >
//                     Proceed to Pay
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CartSummaryPage;
//===========================================================trail code====================================================================================
import React from 'react';
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Import the cart icon
import { FaMinus, FaPlus } from 'react-icons/fa'; // Import the minus and plus icons

const CartSummaryPage = () => {
  const { items, totalUniqueItems, cartTotal, updateItemQuantity, removeItem } = useCart(); // Add removeItem to handle item removal
  const navigate = useNavigate(); // Use useNavigate 

  const handleProceedToPay = () => {
    navigate('/payment'); // Redirect to payment page
  };

  const handleBackToCart = () => {
    navigate('/home'); // Assuming your cart page route is '/cart'
  };

  const handleDecreaseQuantity = (itemId, quantity) => {
    if (quantity > 1) {
      updateItemQuantity(itemId, quantity - 1);
    } else {
      removeItem(itemId); // Remove item if quantity is 0
    }
  };

  const handleIncreaseQuantity = (itemId, quantity) => {
    updateItemQuantity(itemId, quantity + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Cart Summary</h1>
          {totalUniqueItems === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <div>
              <ul className="space-y-4">
                {items.map(item => (
                  <li key={item.id} className="flex justify-between items-center border-b py-4">
                    <div className="flex items-center space-x-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-gray-900">${item.price.toFixed(2)}</p>
                        <div className="flex items-center mt-2">
                          <button 
                            onClick={() => handleDecreaseQuantity(item.id, item.quantity)} 
                            className="px-2 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out"
                          >
                            <FaMinus className="text-lg" />
                          </button>
                          <span className="mx-4 text-lg">{item.quantity}</span>
                          <button 
                            onClick={() => handleIncreaseQuantity(item.id, item.quantity)} 
                            className="px-2 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out"
                          >
                            <FaPlus className="text-lg" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-between items-center border-t pt-4 space-x-4">
                <h2 className="text-2xl font-semibold text-gray-800">Total: ${cartTotal.toFixed(2)}</h2>
                <div className="flex space-x-4">
                  <button
                    onClick={handleBackToCart}
                    className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out flex items-center"
                  >
                    <AiOutlineShoppingCart className="text-xl mr-2" />
                    Back to Shopping
                  </button>
                  <button
                    onClick={handleProceedToPay}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CartSummaryPage;

