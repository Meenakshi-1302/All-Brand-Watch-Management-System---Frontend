// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { FaTrashAlt } from 'react-icons/fa';
// import { increaseQuantity, decreaseQuantity, removeFromCart } from '../cartSlice'; // Import necessary actions
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//   const cart = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   // Calculate total price
//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-blue-800 text-white p-4 shadow-md">
//         <div className="max-w-4xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Your Cart</h1>
//           <Link to="/" className="text-blue-300 hover:underline">Continue Shopping</Link>
//         </div>
//       </header>

//       <main className="p-6">
//         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
//           {cart.length === 0 ? (
//             <p className="text-center text-gray-500">Your cart is empty</p>
//           ) : (
//             <>
//               <div className="space-y-6">
//                 {cart.map((item) => (
//                   <div key={item.watch_id} className="flex items-center justify-between border-b py-4">
//                     <div className="flex items-center">
//                       <img 
//                         src={item.imageUrl || 'https://via.placeholder.com/100x100?text=No+Image+Available'} 
//                         alt={item.name} 
//                         className="w-24 h-24 object-cover rounded-lg shadow-md"
//                       />
//                       <div className="ml-4">
//                         <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
//                         <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                         <div className="flex items-center mt-2">
//                           <button 
//                             onClick={() => dispatch(decreaseQuantity(item.watch_id))}
//                             className="px-3 py-1 bg-gray-300 text-gray-800 font-semibold rounded-l"
//                           >
//                             -
//                           </button>
//                           <span className="px-4 py-1 bg-gray-200 text-gray-800">{item.quantity}</span>
//                           <button 
//                             onClick={() => dispatch(increaseQuantity(item.watch_id))}
//                             className="px-3 py-1 bg-gray-300 text-gray-800 font-semibold rounded-r"
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                     <button 
//                       onClick={() => dispatch(removeFromCart(item.watch_id))}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <FaTrashAlt className="w-6 h-6" />
//                     </button>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-6 flex justify-between items-center border-t pt-6">
//                 <h2 className="text-2xl font-semibold text-gray-800">Total Price: ${totalPrice.toFixed(2)}</h2>
//                 <button 
//                   className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
//                 >
//                   Proceed to Checkout
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CartPage;

import React from 'react';
import { useCart } from 'react-use-cart'; // Import useCart hook
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {

    const navigate = useNavigate(); // Use useNavigate 
  const {
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    cartTotal,
  } = useCart(); // Destructure the needed functions and values from useCart
  const handleProceedToPay = () => {
    // Implement redirection to payment page
    navigate('/checkout'); // Use navigate function to change the route
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white p-4 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <Link to="/home" className="text-blue-300 hover:underline">Continue Shopping</Link>
        </div>
      </header>

      <main className="p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          {totalItems === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b py-4">
                    <div className="flex items-center">
                      <img 
                        src={item.image || 'https://via.placeholder.com/100x100?text=No+Image+Available'} 
                        alt={item.name} 
                        className="w-24 h-24 object-cover rounded-lg shadow-md"
                      />
                      <div className="ml-4">
                        <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                        <div className="flex items-center mt-2">
                          <button 
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 bg-gray-300 text-gray-800 font-semibold rounded-l"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 bg-gray-200 text-gray-800">{item.quantity}</span>
                          <button 
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 bg-gray-300 text-gray-800 font-semibold rounded-r"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt className="w-6 h-6" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center border-t pt-6">
                <h2 className="text-2xl font-semibold text-gray-800">Total Price: ${cartTotal.toFixed(2)}</h2>
                <button 
                 onClick={handleProceedToPay}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default CartPage;

