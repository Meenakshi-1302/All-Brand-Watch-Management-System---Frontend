//---------------------------code without seperate validation-------------------------------------------------------------------------
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const RegistrationForm = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: '',
//     username: '',
//     passwordHash: '',
//     confirmPassword: '',
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.passwordHash !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:8089/customers', {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         phone: formData.phone,
//         address: formData.address,
//         city: formData.city,
//         state: formData.state,
//         zipCode: formData.zipCode,
//         country: formData.country,
//         username: formData.username,
//         passwordHash: formData.passwordHash,
//         role: 'user',
//       });

//       setSuccess('Registration successful');
//       setError('');
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         address: '',
//         city: '',
//         state: '',
//         zipCode: '',
//         country: '',
//         username: '',
//         passwordHash: '',
//         confirmPassword: '',
//       });

//       // Redirect to login page
//       navigate('/login');
//     } catch (error) {
//       setError('Registration failed. Please try again.');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">
//       <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-8">
//         <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
//         {error && (
//           <div className="mb-4 p-3 bg-red-100 text-red-800 border-l-4 border-red-500 rounded-lg">
//             {error}
//           </div>
//         )}
//         {success && (
//           <div className="mb-4 p-3 bg-green-100 text-green-800 border-l-4 border-green-500 rounded-lg">
//             {success}
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="mb-4">
//               <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
//               <input
//                 type="text"
//                 id="state"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-2">Zip Code</label>
//               <input
//                 type="text"
//                 id="zipCode"
//                 name="zipCode"
//                 value={formData.zipCode}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country</label>
//               <input
//                 type="text"
//                 id="country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//               />
//             </div>
//             <div className="mb-4 col-span-2">
//               <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                 required
//               />
//             </div>
//             <div className="mb-4 col-span-2">
//               <label htmlFor="passwordHash" className="block text-gray-700 font-medium mb-2">Password</label>
//               <input
//                 type="password"
//                 id="passwordHash"
//                 name="passwordHash"
//                 value={formData.passwordHash}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                 required
//               />
//             </div>
//             <div className="mb-4 col-span-2">
//               <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200"
//                 required
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;

//------------------------------------------------code with validation--------------------------------------------------------------

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    username: '',
    passwordHash: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
        if (value.trim() === '') {
          return 'First name is required';
        }
        break;
      case 'lastName':
        if (value.trim() === '') {
          return 'Last name is required';
        }
        break;
      case 'email':
        if (value.trim() === '') {
          return 'Email is required';
        }
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          return 'Invalid email address';
        }
        break;
      case 'phone':
        if (value.trim() === '') {
          return 'Phone number is required';
        }
        if (!value.match(/^\d{10}$/)) {
          return 'Phone number must be exactly 10 digits';
        }
        break;
      case 'address':
        if (value.trim() === '') {
          return 'Address is required';
        }
        break;
      case 'city':
        if (value.trim() === '') {
          return 'City is required';
        }
        break;
      case 'state':
        if (value.trim() === '') {
          return 'State is required';
        }
        break;
      case 'zipCode':
        if (value.trim() === '') {
          return 'Zip Code is required';
        }
        if (!value.match(/^\d{6}$/)) {
          return 'Zip Code must be exactly 6 digits';
        }
        break;
      case 'country':
        if (value.trim() === '') {
          return 'Country is required';
        }
        break;
      case 'username':
        if (value.trim() === '') {
          return 'Username is required';
        }
        if (!value.match(/^[a-zA-Z0-9_]+$/)) {
          return 'Username can only contain letters, numbers, and underscores';
        }
        break;
      case 'passwordHash':
        if (value.trim() === '') {
          return 'Password is required';
        }
        if (!/[A-Z]/.test(value)) {
          return 'Password must contain at least one uppercase letter';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.passwordHash) {
          return 'Passwords do not match';
        }
        break;
      default:
        break;
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errorMessage = validateField(name, value);

    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    for (const [name, value] of Object.entries(formData)) {
      const errorMessage = validateField(name, value);
      if (errorMessage) {
        newErrors[name] = errorMessage;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post('http://localhost:8089/customers', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
        username: formData.username,
        passwordHash: formData.passwordHash,
        role: 'user',
      });

      setSuccess('Registration successful');
      setErrors({});
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        username: '',
        passwordHash: '',
        confirmPassword: '',
      });

      navigate('/login');
    } catch (error) {
      setErrors({ general: 'Registration failed. Please try again.' });
      setSuccess('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        {errors.general && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 border-l-4 border-red-500 rounded-lg">
            {errors.general}
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 border-l-4 border-green-500 rounded-lg">
            {success}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${errors.firstName ? 'border-red-500' : ''}`}
                required
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${errors.lastName ? 'border-red-500' : ''}`}
                required
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${errors.email ? 'border-red-500' : ''}`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${errors.phone ? 'border-red-500' : ''}`}
                required
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${errors.address ? 'border-red-500' : ''}`}
                required
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${errors.city ? 'border-red-500' : ''}`}
                required
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${errors.state ? 'border-red-500' : ''}`}
                required
              />
              {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-2">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${errors.zipCode ? 'border-red-500' : ''}`}
                required
              />
              {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${errors.country ? 'border-red-500' : ''}`}
                required
              />
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>
            <div className="mb-4 col-span-2">
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${errors.username ? 'border-red-500' : ''}`}
                required
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>
            <div className="mb-4 col-span-2">
              <label htmlFor="passwordHash" className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                id="passwordHash"
                name="passwordHash"
                value={formData.passwordHash}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${errors.passwordHash ? 'border-red-500' : ''}`}
                required
              />
              {errors.passwordHash && <p className="text-red-500 text-sm">{errors.passwordHash}</p>}
            </div>
            <div className="mb-4 col-span-2">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                required
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;


