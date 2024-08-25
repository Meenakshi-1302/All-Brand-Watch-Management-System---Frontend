import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'; // Import Gmail icon

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any previous error messages
    setError('');

    try {
      // Send email and password in the request body
      const response = await axios.post('http://localhost:8089/login', {
        email,
        password
      });

      if (response.data) {
        const userData = response.data;
        setUser(userData);

        // Set session storage items based on the user role
        switch (userData.role) {
          case 'admin':
            sessionStorage.setItem('adminid', userData.adminUserId); // Store admin ID
            navigate('/admin-dashboard');
            break;
          
          case 'user':
            sessionStorage.setItem('userid', userData.customerId); // Store user ID
            navigate('/home');
            break;
          default:
            setError('Unknown role');
            navigate('/register'); // Optional: Navigate to register page or show an error
            break;
        }
      } else {
        setError('Login failed: Invalid email or password');
        navigate('/register'); // Navigate to register page on failure
      }
    } catch (error) {
      setError('Login failed: Invalid email or password');
      navigate('/register'); // Navigate to register page on failure
    }
  };

  const handleGmailLogin = () => {
    window.location.href = 'https://accounts.google.co.in'; // Redirect to Gmail
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" style={{ backgroundImage: 'url(/path-to-your-watch-background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-md w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Login
          </button>
          {/* Social Media Login Section */}
          <div className="flex flex-col items-center mt-6">
            <p className="text-sm text-gray-600">Or login with:</p>
            <div className="mt-4 flex items-center space-x-4">
              <button 
                type="button"
                onClick={handleGmailLogin}
                className="flex items-center px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <FaGoogle className="mr-2 text-xl" />
                Gmail
              </button>
              {/* Add other social media login buttons here */}
            </div>
          </div>
          {/* Additional Links Section */}
          <div className="mt-6 flex flex-col items-center">
            <p className="text-sm text-gray-600">New user? <a href="/register" className="text-indigo-600 hover:text-indigo-700">Sign Up</a></p>
            {/* <a href="/forgot-password" className="text-indigo-600 hover:text-indigo-700 mt-2">Forgot Password?</a> */}
          </div>
          {user && (
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">Welcome, {user.email}</h3>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
