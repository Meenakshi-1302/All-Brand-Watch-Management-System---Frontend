// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const UserProfilePage = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Handle logout logic here (e.g., clear auth tokens, redirect to login page)
//     console.log('User logged out');
//     navigate('/login'); // Redirect to login page after logout
//   };

//   const handleEdit = () => {
//     // Handle edit logic here (e.g., show a form to update user details)
//     console.log('Edit user profile');
//   };

//   // Dummy user data
//   const userName = "John Doe";
//   const userInitial = userName.charAt(0).toUpperCase();

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <a href="/home" className="text-white text-2xl font-bold">WatchMania</a>
//           <ul className="flex space-x-6">
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
//           <div className="flex items-center space-x-4">
//             <button 
//               onClick={() => navigate('/userprofile-page')} 
//               className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl hover:bg-blue-600 focus:outline-none"
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

//       {/* User Profile Section */}
//       <header className="bg-blue-800 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">User Profile</h1>
//           <p className="text-lg md:text-2xl mb-8">Manage and update your profile details below.</p>
//         </div>
//       </header>

//       {/* Profile Details */}
//       <main className="container mx-auto py-12 px-4 md:px-6">
//         <div className="bg-white p-8 rounded-lg shadow-lg">
//           <h2 className="text-3xl font-bold mb-6 text-center">Profile Details</h2>
//           <div className="mb-6">
//             <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
//             <input 
//               type="text" 
//               id="name" 
//               value="John Doe" // Replace with dynamic user name
//               className="w-full p-3 border border-gray-300 rounded-lg" 
//               readOnly
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
//             <input 
//               type="email" 
//               id="email" 
//               value="john.doe@example.com" // Replace with dynamic user email
//               className="w-full p-3 border border-gray-300 rounded-lg" 
//               readOnly
//             />
//           </div>
//           {/* Add more profile fields as needed */}
//           <div className="text-center">
//             <button 
//               onClick={handleEdit} 
//               className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600"
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
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

// export default UserProfilePage;
//---------------------------version-2----------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '' });

  useEffect(() => {
    // Fetch user details from the backend
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:8089/customers/' + sessionStorage.getItem("userid"));
        setUser(response.data);
        setFormData({ username: response.data.username, email: response.data.email });
      } catch (error) {
        console.error('Error fetching user details:', error);
        // Handle error, maybe show a message to the user
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear auth tokens, redirect to login page)
    console.log('User logged out');
    navigate('/login'); // Redirect to login page after logout
  };

  const handleEdit = async () => {
    if (isEditing) {
      try {
        const userId = sessionStorage.getItem("userid");
        await axios.put(`http://localhost:8089/customers/${userId}`, formData);
        
        // Fetch updated user details
        const response = await axios.get(`http://localhost:8089/customers/${userId}`);
        setUser(response.data);
        setIsEditing(false);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Error updating user details:', error.response.data);
          console.error('Status code:', error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Error with request:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error:', error.message);
        }
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!user) {
    return <p>Loading...</p>; // Show a loading state or spinner while fetching user data
  }

  const userInitial = user.username.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/home" className="text-white text-2xl font-bold">WatchMania</a>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => navigate('/home')}
                className="text-white font-semibold hover:text-gray-300 focus:outline-none"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/watch-category')}
                className="text-white font-semibold hover:text-gray-300 focus:outline-none"
              >
                Watches
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/about-page')}
                className="text-white font-semibold hover:text-gray-300 focus:outline-none"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/contact-page')}
                className="text-white font-semibold hover:text-gray-300 focus:outline-none"
              >
                Contact
              </button>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/userprofile-page')}
              className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl hover:bg-blue-600 focus:outline-none"
              aria-label="User Profile"
            >
              {userInitial}
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 focus:outline-none"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* User Profile Section */}
      <header className="bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">User Profile</h1>
          <p className="text-lg md:text-2xl mb-8">Manage and update your profile details below.</p>
        </div>
      </header>

      {/* Profile Details */}
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Profile Details</h2>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="username"
              value={formData.username}
              className="w-full p-3 border border-gray-300 rounded-lg"
              readOnly={!isEditing}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              className="w-full p-3 border border-gray-300 rounded-lg"
              readOnly={!isEditing}
              onChange={handleChange}
            />
          </div>
          {/* Add more profile fields as needed */}
          <div className="text-center">
            <button
              onClick={handleEdit}
              className={`bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 ${isEditing ? 'bg-green-500 hover:bg-green-600' : ''}`}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </div>
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

export default UserProfilePage;


