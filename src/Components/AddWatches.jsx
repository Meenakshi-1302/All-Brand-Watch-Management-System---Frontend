//-------------------working code--------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// const AddWatchForm = () => {
//   // State to manage the form data
//   const [watch, setWatch] = useState({
//     watchId: '',
//     brand_id: '',
//     model_number: '',
//     name: '',
//     description: '',
//     price: '',
//     stock_quantity: '',
//     category: '',
//     imageUrl: null // Added ImageUrl field
//   });

//   // State to manage loading records (if needed)
//   const [records, setRecords] = useState([]);
//   const [error, setError] = useState(''); // State for error messages

//   // Fetch data on component mount
//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8089/watch');
//       setRecords(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setWatch((prevWatch) => ({
//       ...prevWatch,
//       [name]: value
//     }));
//   };

//   const navigate = useNavigate();

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Post watch data to the backend
//       const response = await axios.post('http://localhost:8089/watch', watch);
//       console.log('Watch added successfully:', response.data);
//       setError(''); // Clear previous error if any
//       // Show success alert
//       alert('Data added successfully');
//       navigate("/admin-dashboard");
//       // Optionally, reset form data or redirect user
//       setWatch({
//         watchId: '',
//         brand_id: '',
//         model_number: '',
//         name: '',
//         description: '',
//         price: '',
//         stock_quantity: '',
//         category: '',
//         ImageUrl: ''
//       });
//     } catch (error) {
//       console.error('Error adding watch:', error);
//       setError('Error adding watch. Please try again.'); // Display error message
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Watch</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Brand ID */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="brand_id">Brand ID</label>
//             <input
//               type="text"
//               id="brand_id"
//               name="brand_id"
//               value={watch.brand_id}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Model Number */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="model_number">Model Number</label>
//             <input
//               type="text"
//               id="model_number"
//               name="model_number"
//               value={watch.model_number}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Watch Name */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="name">Watch Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={watch.name}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Description */}
//           <div className="md:col-span-2 flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="description">Description</label>
//             <textarea
//               id="description"
//               name="description"
//               value={watch.description}
//               onChange={handleChange}
//               rows="4"
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Price */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="price">Price</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={watch.price}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               step="0.01"
//               required
//             />
//           </div>

//           {/* Stock Quantity */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="stock_quantity">Stock Quantity</label>
//             <input
//               type="number"
//               id="stock_quantity"
//               name="stock_quantity"
//               value={watch.stock_quantity}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Category */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="category">Category</label>
//             <input
//               type="text"
//               id="category"
//               name="category"
//               value={watch.category}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Image URL */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="ImageUrl">Image URL</label>
//             <input
//               type="file"
//               id="ImageUrl"
//               name="ImageUrl"
//               accept="imageUrl/*"
//               //value={watch.imageUrl}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             {/* Display the image preview */}
//             {watch.imageUrl && (
//               <div className="mt-4">
//                 <img
//                   src={watch.imageUrl}
//                   // src={`data:image/jpeg;base64,${watch.imageUrl}`}
//                   alt="Watch preview"
//                   className="w-full h-64 object-cover rounded-lg border border-gray-300"
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Error Message */}
//         {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Add Watch
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddWatchForm;

//----------------image trail code--------------------------------------------------
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddWatchForm = () => {
  // State to manage the form data
  const [watch, setWatch] = useState({
    watchId: '',
    brand_id: '',
    model_number: '',
    name: '',
    description: '',
    price: '',
    stock_quantity: '',
    category: '',
    imageUrl: '' // Changed to text input for image URL
  });

  // State for error messages
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWatch((prevWatch) => ({
      ...prevWatch,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post watch data to the backend
      const response = await axios.post('http://localhost:8089/watch', watch, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Watch added successfully:', response.data);
      setError(''); // Clear previous error if any
      // Show success alert
      alert('Data added successfully');
      navigate("/admin-dashboard");
      // Optionally, reset form data
      setWatch({
        watchId: '',
        brand_id: '',
        model_number: '',
        name: '',
        description: '',
        price: '',
        stock_quantity: '',
        category: '',
        imageUrl: ''
      });
    } catch (error) {
      console.error('Error adding watch:', error);
      setError('Error adding watch. Please try again.'); // Display error message
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Watch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Brand ID */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 font-semibold" htmlFor="brand_id">Brand ID</label>
            <input
              type="text"
              id="brand_id"
              name="brand_id"
              value={watch.brand_id}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Model Number */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 font-semibold" htmlFor="model_number">Model Number</label>
            <input
              type="text"
              id="model_number"
              name="model_number"
              value={watch.model_number}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Watch Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 font-semibold" htmlFor="name">Watch Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={watch.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-gray-700 mb-2 font-semibold" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={watch.description}
              onChange={handleChange}
              rows="4"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 font-semibold" htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={watch.price}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              step="0.01"
              required
            />
          </div>

          {/* Stock Quantity */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 font-semibold" htmlFor="stock_quantity">Stock Quantity</label>
            <input
              type="number"
              id="stock_quantity"
              name="stock_quantity"
              value={watch.stock_quantity}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 font-semibold" htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={watch.category}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2 font-semibold" htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={watch.imageUrl}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {/* Display the image preview */}
            {watch.imageUrl && (
              <div className="mt-4">
                <img
                  src={watch.imageUrl}
                  alt="Watch preview"
                  className="w-full h-64 object-cover rounded-lg border border-gray-300"
                />
              </div>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Watch
        </button>
      </form>
    </div>
  );
};

export default AddWatchForm;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AddWatchForm = () => {
//   // State to manage the form data
//   const [watch, setWatch] = useState({
//     watch_id: '',
//     brand_id: '',
//     model_number: '',
//     name: '',
//     description: '',
//     price: '',
//     stock_quantity: '',
//     category: '',
//     imageUrl: null // Changed to imageUrl to match your use
//   });

//   // State to manage loading records (if needed)
//   const [records, setRecords] = useState([]);
//   const [error, setError] = useState(''); // State for error messages

//   const navigate = useNavigate();

//   // Fetch data on component mount
//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8089/watch');
//       setRecords(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setWatch((prevWatch) => ({
//       ...prevWatch,
//       [name]: type === 'file' ? files[0] : value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       for (const key in watch) {
//         formData.append(key, watch[key]);
//       }

//       const response = await axios.post('http://localhost:8089/watch', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       console.log('Watch added successfully:', response.data);
//       setError(''); // Clear previous error if any
//       alert('Data added successfully');
//       navigate('/admin-dashboard');

//       // Optionally, reset form data
//       setWatch({
//         watch_id: '',
//         brand_id: '',
//         model_number: '',
//         name: '',
//         description: '',
//         price: '',
//         stock_quantity: '',
//         category: '',
//         imageUrl: null
//       });
//     } catch (error) {
//       console.error('Error adding watch:', error);
//       setError('Error adding watch. Please try again.'); // Display error message
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto mt-8 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Watch</h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Brand ID */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="brand_id">Brand ID</label>
//             <input
//               type="text"
//               id="brand_id"
//               name="brand_id"
//               value={watch.brand_id}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Model Number */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="model_number">Model Number</label>
//             <input
//               type="text"
//               id="model_number"
//               name="model_number"
//               value={watch.model_number}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Watch Name */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="name">Watch Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={watch.name}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Description */}
//           <div className="md:col-span-2 flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="description">Description</label>
//             <textarea
//               id="description"
//               name="description"
//               value={watch.description}
//               onChange={handleChange}
//               rows="4"
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Price */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="price">Price</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={watch.price}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               step="0.01"
//               required
//             />
//           </div>

//           {/* Stock Quantity */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="stock_quantity">Stock Quantity</label>
//             <input
//               type="number"
//               id="stock_quantity"
//               name="stock_quantity"
//               value={watch.stock_quantity}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Category */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="category">Category</label>
//             <input
//               type="text"
//               id="category"
//               name="category"
//               value={watch.category}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Image URL */}
//           <div className="flex flex-col">
//             <label className="text-gray-700 mb-2 font-semibold" htmlFor="imageUrl">Image</label>
//             <input
//               type="file"
//               id="imageUrl"
//               name="imageUrl"
//               accept="image/*"
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             {/* Display the image preview */}
//             {watch.imageUrl && (
//               <div className="mt-4">
//                 <img
//                   src={URL.createObjectURL(watch.imageUrl)}
//                   alt="Watch preview"
//                   className="w-full h-64 object-cover rounded-lg border border-gray-300"
//                 />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Error Message */}
//         {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Add Watch
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddWatchForm;

