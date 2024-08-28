// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaHome, FaUser, FaShoppingCart, FaPhone, FaSignOutAlt, FaInfoCircle, FaListAlt } from 'react-icons/fa'; // Import the About and Orders icons

// const Header = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Handle logout logic here (e.g., clear auth tokens, redirect to login page)
//     console.log('User logged out');
//     navigate('/'); // Redirect to home page after logout
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <header className="bg-blue-800 text-white py-4 px-6 flex justify-between items-center shadow-md">
//       <div className="flex items-center space-x-6"> {/* Increased spacing between items */}
//         {/* Home Icon */}
//         <button
//           onClick={() => handleNavigation('/home')}
//           className="flex items-center space-x-2 hover:text-gray-400"
//         >
//           <FaHome className="text-xl" />
//           <span className="hidden md:inline">Home</span>
//         </button>

//         {/* User Profile Icon */}
//         <button
//           onClick={() => handleNavigation('/userprofile-page')}
//           className="flex items-center space-x-2 hover:text-gray-400"
//         >
//           <FaUser className="text-xl" />
//           <span className="hidden md:inline">Profile</span>
//         </button>

//         {/* Cart Icon */}
//         <button
//           onClick={() => handleNavigation('/cart')}
//           className="flex items-center space-x-2 hover:text-gray-400"
//         >
//           <FaShoppingCart className="text-xl" />
//           <span className="hidden md:inline">Cart</span>
//         </button>

//         {/* Contact Icon */}
//         <button
//           onClick={() => handleNavigation('/contact')}
//           className="flex items-center space-x-2 hover:text-gray-400"
//         >
//           <FaPhone className="text-xl" />
//           <span className="hidden md:inline">Contact</span>
//         </button>

//         {/* About Icon */}
//         <button
//           onClick={() => handleNavigation('/about')}
//           className="flex items-center space-x-2 hover:text-gray-400"
//         >
//           <FaInfoCircle className="text-xl" />
//           <span className="hidden md:inline">About</span>
//         </button>
        
//         {/* Your Orders Icon */}
//         <button
//           onClick={() => handleNavigation('/orders')}
//           className="flex items-center space-x-2 hover:text-gray-400"
//         >
//           <FaListAlt className="text-xl" />
//           <span className="hidden md:inline">Your Orders</span>
//         </button>
//       </div>

//       {/* Logout Button */}
//       <button
//         onClick={handleLogout}
//         className="flex items-center space-x-2 hover:text-gray-400"
//       >
//         <FaSignOutAlt className="text-xl" />
//         <span className="hidden md:inline">Logout</span>
//       </button>
//     </header>
//   );
// };

// export default Header;
//=====================================redex trail code=========================================
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHome, FaUser, FaShoppingCart, FaPhone, FaSignOutAlt, FaInfoCircle, FaListAlt } from 'react-icons/fa'; // Import the About and Orders icons

const Header = () => {
  const navigate = useNavigate();
  const { totalItems } = useSelector((state) => state.cart); // Get cart item count from Redux
  const id = sessionStorage.getItem('userid');

  useEffect(() => {
      if(id==null){
        navigate('/');
      }
  })

const handleLogout = () => {
  localStorage.removeItem('cartState');
  sessionStorage.clear();
  navigate('/');
};


  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="bg-blue-800 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-6">
        {/* Home Icon */}
        <button onClick={() => handleNavigation('/home')} className="flex items-center space-x-2 hover:text-gray-400">
          <FaHome className="text-xl" />
          <span className="hidden md:inline">Home</span>
        </button>

        {/* User Profile Icon */}
        <button onClick={() => handleNavigation('/userprofile-page')} className="flex items-center space-x-2 hover:text-gray-400">
          <FaUser className="text-xl" />
          <span className="hidden md:inline">Profile</span>
        </button>

        {/* Cart Icon */}
        <button onClick={() => handleNavigation('/cart')} className="flex items-center space-x-2 hover:text-gray-400">
          <FaShoppingCart className="text-xl" />
          <span className="hidden md:inline">Cart ({totalItems})</span> {/* Display totalItems */}
        </button>

        {/* Contact Icon */}
        <button onClick={() => handleNavigation('/contact')} className="flex items-center space-x-2 hover:text-gray-400">
          <FaPhone className="text-xl" />
          <span className="hidden md:inline">Contact</span>
        </button>

        {/* About Icon */}
        <button onClick={() => handleNavigation('/about')} className="flex items-center space-x-2 hover:text-gray-400">
          <FaInfoCircle className="text-xl" />
          <span className="hidden md:inline">About</span>
        </button>
        
        {/* Your Orders Icon */}
        <button onClick={() => handleNavigation('/orders')} className="flex items-center space-x-2 hover:text-gray-400">
          <FaListAlt className="text-xl" />
          <span className="hidden md:inline">Your Orders</span>
        </button>
      </div>

      {/* Logout Button */}
      <button onClick={handleLogout} className="flex items-center space-x-2 hover:text-gray-400">
        <FaSignOutAlt className="text-xl" />
        <span className="hidden md:inline">Logout</span>
      </button>
    </header>
  );
};

export default Header;



