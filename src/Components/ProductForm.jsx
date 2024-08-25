import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ProductForm = () => {
  const [watchRecords, setWatchRecords] = useState([]);
  const [categoryRecords, setCategoryRecords] = useState([]);
  const [inputData, setInputData] = useState({
    watch: {},
    categories: {},
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchWatchRecords = async () => {
      try {
        const response = await axios.get("http://localhost:8089/watch/all");
        setWatchRecords(response.data);
      } catch (err) {
        console.error("Error fetching watch records:", err);
      }
    };
    fetchWatchRecords();
  }, []);

  useEffect(() => {
    const fetchCategoryRecords = async () => {
      try {
        const response = await axios.get("http://localhost:8089/category/all");
        setCategoryRecords(response.data);
      } catch (err) {
        console.error("Error fetching category records:", err);
      }
    };
    fetchCategoryRecords();
  }, []);

  const handleSelectChangeWatch = async (e) => {
    const watchId = e.target.value;
    console.log(`Selected watch ID: ${watchId}`);
    try {
      const response = await axios.get(`http://localhost:8089/watch/${watchId}`);
      console.log('Watch data fetched:', response.data);
      setInputData(prevState => ({
        ...prevState,
        watch: response.data // Merge the fetched watch data into inputData
      }));
    } catch (err) {
      console.error("Error fetching watch data:", err);
    }
  };

  const handleSelectChangeCategory = async (e) => {
    const categoryId = e.target.value;
    console.log(`Selected category ID: ${categoryId}`);
    try {
      const response = await axios.get(`http://localhost:8089/category/${categoryId}`);
      console.log('Category data fetched:', response.data);
      setInputData(prevState => ({
        ...prevState,
        categories: response.data
      }));
    } catch (err) {
      console.error("Error fetching category data:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8089/product", inputData);
      alert("Data added successfully");
      console.log(inputData);
      navigate("/admin-dashboard");
    } catch (err) {
      console.error("Error adding product data:", err);
      alert("Error adding product data. Please check the console for more details.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">Add Product Data</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Watch ID:</label>
            <select
              name="selectedWatchId"
              value={inputData.watch_id}
              onChange={handleSelectChangeWatch}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select watch</option>
              {watchRecords.map((watch) => (
                <option key={watch.watch_id} value={watch.watch_id}>{watch.watch_id}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Category ID:</label>
            <select
              name="selectedCategoryId"
              value={inputData.category}
              onChange={handleSelectChangeCategory}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              {categoryRecords.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>{category.categoryId}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;

//------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// const ProductForm = () => {
//   const [watchRecords, setWatchRecords] = useState([]);
//   const [categoryRecords, setCategoryRecords] = useState([]);
//   const [inputData, setInputData] = useState({
//     watch: {
//       watch_id: "",
//       brand_id: "",
//       model_number: "",
//       name: "",
//       description: "",
//       price: "",
//       stock_quantity: "",
//       category: ""
//     },
//     categories: {
//       categoryId: "",
//       name: "",
//       description: ""
//     }
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchWatchRecords = async () => {
//       try {
//         const response = await axios.get("http://localhost:8089/watch/all");
//         setWatchRecords(response.data || []);
//       } catch (err) {
//         console.error("Error fetching watch records:", err);
//       }
//     };
//     fetchWatchRecords();
//   }, []);

//   useEffect(() => {
//     const fetchCategoryRecords = async () => {
//       try {
//         const response = await axios.get("http://localhost:8089/category/all");
//         setCategoryRecords(response.data || []);
//       } catch (err) {
//         console.error("Error fetching category records:", err);
//       }
//     };
//     fetchCategoryRecords();
//   }, []);

//   const handleSelectChangeWatch = async (e) => {
//     const watchId = e.target.value;
//     console.log(`Selected watch ID: ${watchId}`);
//     if (!watchId) return; // Avoid fetching if no ID is selected
//     try {
//       const response = await axios.get(`http://localhost:8089/watch/${watchId}`);
//       console.log('Watch data fetched:', response.data);
//       setInputData(prevState => ({
//         ...prevState,
//         watch: {
//           ...response.data,
//           watch_id: watchId
//         }
//       }));
//     } catch (err) {
//       console.error("Error fetching watch data:", err);
//     }
//   };

//   const handleSelectChangeCategory = async (e) => {
//     const categoryId = e.target.value;
//     console.log(`Selected category ID: ${categoryId}`);
//     if (!categoryId) return; // Avoid fetching if no ID is selected
//     try {
//       const response = await axios.get(`http://localhost:8089/category/${categoryId}`);
//       console.log('Category data fetched:', response.data);
//       setInputData(prevState => ({
//         ...prevState,
//         categories: {
//           ...response.data,
//           categoryId: categoryId
//         }
//       }));
//     } catch (err) {
//       console.error("Error fetching category data:", err);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!inputData.watch.watch_id || !inputData.categories.categoryId) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     try {
//       const productData = {
//         watch_id: inputData.watch.watch_id,
//         category_id: inputData.categories.categoryId,
//         // Add other necessary fields here, ensuring they are populated
//       };
//       await axios.post("http://localhost:8089/product", productData);
//       alert("Data added successfully");
//       navigate("/admin-dashboard");
//     } catch (err) {
//       console.error("Error adding product data:", err);
//       alert("Error adding product data. Please check the console for more details.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 space-y-6">
//         <h1 className="text-2xl font-bold text-center text-gray-800">Add Product Data</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Watch ID:</label>
//             <select
//               name="selectedWatchId"
//               value={inputData.watch.watch_id}
//               onChange={handleSelectChangeWatch}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select watch</option>
//               {watchRecords.map((watch) => (
//                 <option key={watch.watch_id} value={watch.watch_id}>{watch.watch_id}</option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Category ID:</label>
//             <select
//               name="selectedCategoryId"
//               value={inputData.categories.categoryId}
//               onChange={handleSelectChangeCategory}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select category</option>
//               {categoryRecords.map((category) => (
//                 <option key={category.categoryId} value={category.categoryId}>{category.categoryId}</option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProductForm;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ProductForm = () => {
//   const [product, setProduct] = useState({
//     name: '',
//     categoryId: '',
//     price: '',
//     // Add other fields as necessary
//   });

//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct(prevProduct => ({
//       ...prevProduct,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Adjust URL and data format as necessary
//       const response = await axios.post('http://localhost:8089/product', product);
//       console.log('Product added:', response.data);
//       navigate('/products');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Error adding product data');
//       console.error('Error adding product data:', err);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Add Product</h1>
//       {error && <div className="bg-red-500 text-white p-4 rounded mb-4">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={product.name}
//             onChange={handleChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Category ID</label>
//           <input
//             type="text"
//             name="categoryId"
//             value={product.categoryId}
//             onChange={handleChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Price</label>
//           <input
//             type="number"
//             name="price"
//             value={product.price}
//             onChange={handleChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProductForm;


