import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import { FaHome } from 'react-icons/fa'; // Import Home icon from react-icons

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '' });

  useEffect(() => {
    // Fetch user details from the backend
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:8085/customers/' + sessionStorage.getItem("userid"));
        setUser(response.data);
        setFormData({ username: response.data.username, email: response.data.email });
      } catch (error) {
        console.error('Error fetching user details:', error);
        toast.error('Error fetching user details.');
      }
    };

    fetchUser();
  }, []);

  const handleEdit = async () => {
    if (isEditing) {
      try {
        const userId = sessionStorage.getItem("userid");
        if (userId) {
          // Log the data being sent
          console.log('Updating user with data:', formData);

          const response = await axios.put(`http://localhost:8085/customers/${userId}`, formData);

          // Fetch updated user details
          const updatedResponse = await axios.get(`http://localhost:8085/customers/${userId}`);
          setUser(updatedResponse.data);
          setIsEditing(false);

          // Show success notification
          toast.success('Details updated successfully');
        } else {
          console.error('User ID not found in session storage');
          toast.error('User ID not found.');
        }
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Error updating user details:', error.response.data);
          toast.error('Error updating user details: ' + error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Error with request:', error.request);
          toast.error('Error with request. Please try again.');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error:', error.message);
          toast.error('An error occurred: ' + error.message);
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

  const handleBackToHome = () => {
    navigate('/home'); // Redirect to home page
  };

  if (!user) {
    return <p>Loading...</p>; // Show a loading state or spinner while fetching user data
  }

  const userInitial = user.username.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* User Profile Section */}
      <header className="bg-blue-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">User Profile</h1>
          <p className="text-lg md:text-2xl mb-8">Manage and update your profile details below.</p>
          <button
            onClick={handleBackToHome}
            className="flex items-center text-white bg-blue-500 py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none"
          >
            <FaHome className="mr-2" /> {/* Home icon */}
            Back to Home
          </button>
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

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default UserProfilePage;
