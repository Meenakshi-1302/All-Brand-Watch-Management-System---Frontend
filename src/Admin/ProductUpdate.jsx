// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import axios
// import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate

// const ProductUpdate = () => {
//     const { productId } = useParams(); // Get productId from URL params
//     const navigate = useNavigate(); // Hook for navigation

//     // State to store form data
//     const [formData, setFormData] = useState({
//         productId: '',
//         name: '',
//         price: '',
//         modelName: '',
//         description: '',
//         quantity: '',
//         image: ''
//     });

//     // State to handle submission status
//     const [status, setStatus] = useState(null);

//     useEffect(() => {
//         // Fetch product data based on productId
//         const fetchProduct = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8085/product/${productId}`);
//                 setFormData(response.data);
//             } catch (error) {
//                 setStatus(`Error fetching product: ${error.message}`);
//             }
//         };

//         fetchProduct();
//     }, [productId]);

//     // Handle form input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.put(`http://localhost:8085/product/${productId}`, formData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             if (response.status === 200) {
//                 setStatus('Product updated successfully!');
//             } else {
//                 throw new Error('Unexpected response status');
//             }
//         } catch (error) {
//             setStatus(`Error: ${error.message}`);
//         }
//     };

//     // Handle delete
//     const handleDelete = async () => {
//         try {
//             const response = await axios.delete(`http://localhost:8085/product/${productId}`);
            
//             if (response.status === 200) {
//                 setStatus('Product deleted successfully!');
//                 setTimeout(() => {
//                     navigate('/product-view'); // Redirect to ProductView page
//                 }, 2000);
//             } else {
//                 throw new Error('Unexpected response status');
//             }
//         } catch (error) {
//             setStatus(`Error: ${error.message}`);
//         }
//     };

//     return (
//         <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold text-gray-700 mb-4">Update Product</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700" htmlFor="price">Price</label>
//                     <input
//                         type="number"
//                         id="price"
//                         name="price"
//                         value={formData.price}
//                         onChange={handleChange}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700" htmlFor="modelName">Model Name</label>
//                     <input
//                         type="text"
//                         id="modelName"
//                         name="modelName"
//                         value={formData.modelName}
//                         onChange={handleChange}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700" htmlFor="description">Description</label>
//                     <textarea
//                         id="description"
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                         rows="4"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700" htmlFor="quantity">Quantity</label>
//                     <input
//                         type="number"
//                         id="quantity"
//                         name="quantity"
//                         value={formData.quantity}
//                         onChange={handleChange}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700" htmlFor="image">Image URL</label>
//                     <input
//                         type="text"
//                         id="image"
//                         name="image"
//                         value={formData.image}
//                         onChange={handleChange}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     />
//                 </div>

//                 <div className="flex items-center justify-between mb-4">
//                     <button
//                         type="submit"
//                         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                     >
//                         Update Product
//                     </button>
//                     <button
//                         type="button"
//                         onClick={handleDelete}
//                         className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                     >
//                         Delete Product
//                     </button>
//                 </div>

//                 {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
//             </form>
//         </div>
//     );
// };

// export default ProductUpdate;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductUpdate() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get("http://localhost:8085/product/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, [id]);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8085/product", data).then((res) => {
      alert("Watch Updated Successfully");
      navigate("/product-view");
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold mb-6 text-center">Update Watch Data</h1>

          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 font-medium mb-2">ID:</label>
            <input
              type="text"
              disabled
              name="productId"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.productId || ''}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.name || ''}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-medium mb-2">Price:</label>
            <input
              type="number"
              name="price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.price || ''}
              onChange={(e) => setData({ ...data, price: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="modelName" className="block text-gray-700 font-medium mb-2">Model Name:</label>
            <input
              type="text"
              name="modelName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.modelName || ''}
              onChange={(e) => setData({ ...data, modelName: e.target.value })}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description:</label>
            <input
              type="text"
              name="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.description || ''}
              onChange={(e) => setData({ ...data, description: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">Quantity:</label>
            <input
              type="text"
              name="quantity"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.quantity || ''}
              onChange={(e) => setData({ ...data, quantity: e.target.value })}
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductUpdate;
