// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { FaBox } from "react-icons/fa";
// import { FaClock } from "react-icons/fa6";
// import { FaBoxes } from "react-icons/fa";
// import { IoMdAdd } from 'react-icons/io';
// import { FaPeopleCarry } from "react-icons/fa";
// import { FaChartLine } from "react-icons/fa";
// import { FaSignOutAlt} from "react-icons/fa"

// const salesData = [
//   { month: 'January', sales: 12000 },
//   { month: 'February', sales: 9000 },
//   { month: 'March', sales: 15000 },
//   // Add more data as needed
// ];

// const AdminDashboard = () => {
//   const [watchRecords, setWatchRecords] = useState([]);
//   const [inventoryRecords, setInventoryRecords] = useState([]);
//   const [suppliers, setSuppliers] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState([]);
  
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Fetching data on component mount
//   useEffect(() => { 
//     axios.get("http://localhost:8089/product/all")
//       .then(response => setProducts(response.data))
//       .catch(err => console.log(err));
      
//     axios.get("http://localhost:8089/watch/all")
//       .then(response => setWatchRecords(response.data))
//       .catch(err => console.log(err));

//     axios.get("http://localhost:8089/inventory/all")
//       .then(response => setInventoryRecords(response.data))
//       .catch(err => console.log(err));
      
//     axios.get("http://localhost:8089/supplier/all")
//       .then(response => setSuppliers(response.data))
//       .catch(err => console.log(err));
//       axios.get("http://localhost:8089/category/all")
//       .then(response => setCategory(response.data))
//       .catch(err => console.log(err));
//   }, []);

//   // Handle deletion
//   const handleDelete = (type, id) => {
//     const conf = window.confirm(`Do you want to delete this ${type}?`);
//     if (conf) {
//       axios.delete(`http://localhost:8089/${type}/${id}`)
//         .then(() => {
//           alert(`${type.charAt(0).toUpperCase() + type.slice(1)} has been deleted`);
//           // Refresh or update UI instead of reloading
//           switch (type) {
//             case 'product':
//               setProducts(prev => prev.filter(item => item.productId !== id));
//               break;
//             case 'watch':
//               setWatchRecords(prev => prev.filter(item => item.watch_id !== id));
//               break;
//             case 'inventory':
//               setInventoryRecords(prev => prev.filter(item => item.inventoryId !== id));
//               break;
//             case 'supplier':
//               setSuppliers(prev => prev.filter(item => item.supplierId !== id));
//               break;
//               case 'category':
//               setSuppliers(prev => prev.filter(item => item.categoryId !== id));
//               break;
//             default:
//               break;
//           }
//         })
//         .catch(err => {
//           console.error(`Error deleting the ${type}:`, err);
//           alert(`Failed to delete the ${type}`);
//         });
//     }
//   };

//   const handleLogout = () => {
//     console.log('Logging out...');
//     navigate('/');
//   };

//   // Navigation handlers
//   const handleAdd = (path) => navigate(path);

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-900 text-white h-full fixed top-0 left-0 mt-16 shadow-lg rounded-tr-3xl rounded-br-3xl">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
//           <ul>
//             <li className="mb-6">
//               <a href="#products" className="flex items-center p-3 rounded-md hover:bg-blue-700 transition duration-300">
//                 <FaBox className="w-6 h-6 mr-3 text-blue-300" />
//                 <span>Products</span>
//               </a>
//             </li>
//             <li className="mb-6">
//               <a href="#watches" className="flex items-center p-3 rounded-md hover:bg-blue-700 transition duration-300">
//                 <FaClock className="w-6 h-6 mr-3 text-blue-300" />
//                 <span>Watches</span>
//               </a>
//             </li>
//             <li className="mb-6">
//               <a href="#inventory" className="flex items-center p-3 rounded-md hover:bg-blue-700 transition duration-300">
//                 <FaBoxes className="w-6 h-6 mr-3 text-blue-300" />
//                 <span>Inventory</span>
//               </a>
//             </li>
//             <li className="mb-6">
//               <a href="#suppliers" className="flex items-center p-3 rounded-md hover:bg-blue-700 transition duration-300">
//                 <FaPeopleCarry className="w-6 h-6 mr-3 text-blue-300" />
//                 <span>Suppliers</span>
//               </a>
//             </li>
//             <li className="mb-6">
//               <a href="#sales-report" className="flex items-center p-3 rounded-md hover:bg-blue-700 transition duration-300">
//                 <FaChartLine className="w-6 h-6 mr-3 text-blue-300" />
//                 <span>Category</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </aside>

//       <div className="flex-1 ml-64  p-6">
//         {/* Navbar */}
//         <nav className="bg-blue-800 text-white p-4 flex justify-between items-center rounded-b-lg shadow-md">
//           <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//           <div>
//             <button
//               onClick={handleLogout}
//               className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded flex items-center"
//             >
//               <FaSignOutAlt className="mr-2" />
//               Logout
//             </button>
//           </div>
//         </nav>

//         {/* Main content */}
//         <section id="products" className="mb-12">
//           <h2 className="text-3xl font-bold mb-6">Products</h2>
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <button
//               onClick={() => handleAdd('/add-product')}
//               className="bg-blue-500 text-white px-4 py-2 rounded mb-6 flex items-center hover:bg-blue-600"
//             >
//               <IoMdAdd className="mr-2" />
//               Add Product
//             </button>
//             <table className="min divide-y w-full divide-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Watch ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {products.map(product => (
//                   <tr key={product.productId}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.productId}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.watch.watch_id}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.categories.length > 0 ? product.categories[0].categoryId : 'N/A'}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center space-x-2">
//                       <Link
//                         to={`/product-update/${product.productId}`}
//                         className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                       >
//                         Update
//                       </Link>
//                       <button
//                         onClick={() => handleDelete('product', product.productId)}
//                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <section id="watches" className="mb-12">
//           <h2 className="text-3xl font-bold mb-6">Watches</h2>
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <button
//               onClick={() => handleAdd('/add-watch')}
//               className="bg-blue-500 text-white px-4 py-2 rounded mb-6 flex items-center hover:bg-blue-600"
//             >
//               <IoMdAdd className="mr-2" />
//               Add Watch
//             </button>
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-100">
//               <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model Number</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Watch Name</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Quantity</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {watchRecords.map(watch => (
//                   <tr key={watch.watch_id}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{watch.watch_id}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{watch.brand_id}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{watch.model_number}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{watch.name}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{watch.description}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{watch.price}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{watch.stock_quantity}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{watch.category}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                       <Link
//                         to={`/watch-update/${watch.watch_id}`}
//                         className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                       >
//                         Update
//                       </Link>
//                       <button
//                         onClick={() => handleDelete('watch', watch.watch_id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <section id="inventory" className="mb-12">
//           <h2 className="text-3xl font-bold mb-6">Inventory</h2>
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <button
//               onClick={() => handleAdd('/add-inventory')}
//               className="bg-blue-500 text-white px-4 py-2 rounded mb-6 flex items-center hover:bg-blue-600"
//             >
//               <IoMdAdd className="mr-2" />
//               Add Inventory
//             </button>
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Watch ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity Received</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Received At</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {inventoryRecords.map(inventory => (
//                   <tr key={inventory.inventoryId}>
//                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inventory.inventoryId}</td> {/* Ensure this matches your data */}
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inventory.watch.watch_id}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inventory.supplier ? inventory.supplier.supplierId : 'N/A'}</td> {/* Ensure this matches your data */}
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inventory.quantityReceived}</td> {/* Ensure this matches your data */}
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inventory.receivedAt}</td> {/* Ensure this matches your data */}
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">                     
//                      <Link
//                         to={`/inventory-update/${inventory.inventoryId}`}
//                         className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                       >
//                         Update
//                       </Link>
//                       <button
//                         onClick={() => handleDelete('inventory', inventory.inventoryId)}
//                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <section id="suppliers" className="mb-12">
//           <h2 className="text-3xl font-bold mb-6">Suppliers</h2>
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <button
//               onClick={() => handleAdd('/add-supplier')}
//               className="bg-blue-500 text-white px-4 py-2 rounded mb-6 flex items-center hover:bg-blue-600"
//             >
//               <IoMdAdd className="mr-2" />
//               Add Supplier
//             </button>
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {suppliers.map(supplier => (
//                   <tr key={supplier.supplierId}>
//                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{supplier.supplierId}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{supplier.name}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{supplier.contactInfo}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{supplier.address}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                       <Link
//                         to={`/supplier-update/${supplier.supplierId}`}
//                         className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                       >
//                         Update
//                       </Link>
//                       <button
//                         onClick={() => handleDelete('supplier', supplier.supplierId)}
//                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//         <section id="category" className="mb-12">
//           <h2 className="text-3xl font-bold mb-6">Categories</h2>
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <button
//               onClick={() => handleAdd('/add-category')}
//               className="bg-blue-500 text-white px-4 py-2 rounded mb-6 flex items-center hover:bg-blue-600"
//             >
//               <IoMdAdd className="mr-2" />
//               Add Category
//             </button>
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {suppliers.map(supplier => (
//                   <tr key={supplier.supplierId}>
//                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{supplier.supplierId}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{supplier.name}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{supplier.contactInfo}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{supplier.address}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                       <Link
//                         to={`/supplier-update/${supplier.supplierId}`}
//                         className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                       >
//                         Update
//                       </Link>
//                       <button
//                         onClick={() => handleDelete('supplier', supplier.supplierId)}
//                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

       
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
//---------------image trail code---------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaBox, FaClock, FaBoxes, FaPeopleCarry, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
// import { IoMdAdd } from 'react-icons/io';

// const salesData = [
//   { month: 'January', sales: 12000 },
//   { month: 'February', sales: 9000 },
//   { month: 'March', sales: 15000 },
//   // Add more data as needed
// ];

// const AdminDashboard = () => {
//   const [watchRecords, setWatchRecords] = useState([]);
//   const [inventoryRecords, setInventoryRecords] = useState([]);
//   const [suppliers, setSuppliers] = useState([]);
//   const [products, setProducts] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:8089/product/all")
//       .then(response => setProducts(response.data))
//       .catch(err => console.log(err));

//     axios.get("http://localhost:8089/watch/all")
//       .then(response => setWatchRecords(response.data))
//       .catch(err => console.log(err));

//     axios.get("http://localhost:8089/inventory/all")
//       .then(response => setInventoryRecords(response.data))
//       .catch(err => console.log(err));

//     axios.get("http://localhost:8089/supplier/all")
//       .then(response => setSuppliers(response.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleDelete = (type, id) => {
//     const conf = window.confirm(`Do you want to delete this ${type}?`);
//     if (conf) {
//       axios.delete(`http://localhost:8089/${type}/${id}`)
//         .then(() => {
//           alert(`${type.charAt(0).toUpperCase() + type.slice(1)} has been deleted`);
//           switch (type) {
//             case 'product':
//               setProducts(prev => prev.filter(item => item.productId !== id));
//               break;
//             case 'watch':
//               setWatchRecords(prev => prev.filter(item => item.watch_id !== id));
//               break;
//             case 'inventory':
//               setInventoryRecords(prev => prev.filter(item => item.inventoryId !== id));
//               break;
//             case 'supplier':
//               setSuppliers(prev => prev.filter(item => item.supplierId !== id));
//               break;
//             default:
//               break;
//           }
//         })
//         .catch(err => {
//           console.error(`Error deleting the ${type}:`, err);
//           alert(`Failed to delete the ${type}`);
//         });
//     }
//   };

//   const handleLogout = () => {
//     console.log('Logging out...');
//     navigate('/');
//   };

//   const handleAdd = (path) => navigate(path);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-900 text-white h-full fixed top-0 left-0 flex flex-col">
//         <div className="p-6 flex flex-col h-full">
//           <img src="\logo.png" alt="Logo" className="h-24 w-full object-cover mb-8" />
//           <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
//           <ul>
//             {[
//               { href: "#watch", icon: <FaClock />, label: "Watch" },
//               { href: "#inventory", icon: <FaBoxes />, label: "Inventory" },
//               { href: "#suppliers", icon: <FaPeopleCarry />, label: "Suppliers" },
//               { href: "#sales-report", icon: <FaChartLine />, label: "Sales Report" },
//             ].map((item, index) => (
//               <li key={index} className="mb-6">
//                 <a href={item.href} className="flex items-center p-3 rounded-md hover:bg-white-700 transition duration-300">
//                   {item.icon}
//                   <span className="ml-3">{item.label}</span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </aside>

//       <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
//         {/* Navbar */}
//         <nav className="bg-blue-800 text-white p-4 flex justify-between items-center rounded-b-lg shadow-md flex-shrink-0">
//           <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//           <div>
//             <button
//               onClick={handleLogout}
//               className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded flex items-center transition duration-300"
//             >
//               <FaSignOutAlt className="mr-2" />
//               Logout
//             </button>
//           </div>
//         </nav>

//         {/* Main content */}
//         <main className="flex-1 overflow-y-auto p-6">
//           {[
//             { id: "watches", title: "Watches", data: watchRecords, fields: [
//               { label: "ID", key: "watch_id" },
//               { label: "Model Number", key: "model_number" },
//               { label: "Watch Name", key: "name" },
//               { label: "Description", key: "description" },
//               { label: "Price", key: "price" },
//               { label: "Stock Quantity", key: "stock_quantity" },
//               { label: "Actions", key: "actions" },
//             ], link: "/add-watch", type: "watch" },
//             { id: "inventory", title: "Inventory", data: inventoryRecords, fields: [
//               { label: "ID", key: "inventoryId" },
//               { label: "Watch ID", key: "watch.watch_id" },
//               { label: "Supplier ID", key: "supplier.supplierId" },
//               { label: "Quantity Received", key: "quantityReceived" },
//               { label: "Received At", key: "receivedAt" },
//               { label: "Actions", key: "actions" },
//             ], link: "/add-inventory", type: "inventory" },
//             { id: "suppliers", title: "Suppliers", data: suppliers, fields: [
//               { label: "ID", key: "supplierId" },
//               { label: "Name", key: "name" },
//               { label: "Contact", key: "contactInfo" },
//               { label: "Address", key: "address" },
//               { label: "Actions", key: "actions" },
//             ], link: "/add-supplier", type: "supplier" },
//           ].map((section, index) => (
//             <section id={section.id} key={index} className="mb-12">
//               <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
//               <div className="bg-white shadow-lg rounded-lg p-6">
//                 <button
//                   onClick={() => handleAdd(section.link)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded mb-6 flex items-center hover:bg-blue-600 transition duration-300"
//                 >
//                   <IoMdAdd className="mr-2" />
//                   Add {section.title.slice(0, -1)}
//                 </button>
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-100">
//                     <tr>
//                       {section.fields.map((field, idx) => (
//                         <th key={idx} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           {field.label}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {section.data.map((item, index) => (
//                       <tr key={index} className="hover:bg-gray-50 transition duration-300">
//                         {section.fields.map((field, idx) => (
//                           <td key={idx} className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
//                             {field.key === 'actions' ? (
//                               <div className="flex space-x-2">
//                                 <Link
//                                   to={`/${section.type}/${item[`${section.type}Id`]}`}
//                                   className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
//                                 >
//                                   Update
//                                 </Link>
//                                 <button
//                                   onClick={() => handleDelete(section.type, item[`${section.type}Id`])}
//                                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
//                                 >
//                                   Delete
//                                 </button>
//                               </div>
//                             ) : (
//                               field.key.split('.').reduce((acc, part) => acc && acc[part], item) || 'N/A'
//                             )}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>
//           ))}

//           <section id="sales-report" className="mt-12">
//             <h2 className="text-3xl font-bold mb-6">Sales Report</h2>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold mb-4">Monthly Sales</h3>
//               <div className="bg-gray-50 p-4 rounded-lg shadow-md">
//                 <ul className="list-disc list-inside">
//                   {salesData.map((data, index) => (
//                     <li key={index} className="mb-2">
//                       {data.month}: ${data.sales}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

//-------------------------------------version-2 working code------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaBox, FaClock, FaBoxes, FaPeopleCarry, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import { FaUserAlt } from "react-icons/fa";
import { IoMdAdd } from 'react-icons/io';

const salesData = [
  { month: 'January', sales: 12000 },
  { month: 'February', sales: 9000 },
  { month: 'March', sales: 15000 },
  // Add more data as needed
];


const handleLogout = () => {
  sessionStorage.clear();
 
  window.location.href='/';
};
const AdminDashboard = () => {
  const [watchRecords, setWatchRecords] = useState([]);
  const [inventoryRecords, setInventoryRecords] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [products, setProducts] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8089/product/all")
      .then(response => setProducts(response.data))
      .catch(err => console.log(err));
      
    axios.get("http://localhost:8089/watch/all")
      .then(response => setWatchRecords(response.data))
      .catch(err => console.log(err));

    axios.get("http://localhost:8089/inventory/all")
      .then(response => setInventoryRecords(response.data))
      .catch(err => console.log(err));
    
      
    axios.get("http://localhost:8089/supplier/all")
      .then(response => setSuppliers(response.data))
      .catch(err => console.log(err));
  }, []);

  // const handleDelete = (type, id) => {
  //   const conf = window.confirm(`Do you want to delete this ${type}?`);
  //   if (conf) {
  //     axios.delete(`http://localhost:8089/${type}/${id}`)
  //       .then(() => {
  //         alert(`${type.charAt(0).toUpperCase() + type.slice(1)} has been deleted`);
  //         switch (type) {
  //           case 'product':
  //             setProducts(prev => prev.filter(item => item.productId !== id));
  //             break;
  //           case 'watch':
  //             setWatchRecords(prev => prev.filter(item => item.watch_id !== id));
  //             break;
  //           case 'inventory':
  //             setInventoryRecords(prev => prev.filter(item => item.inventoryId !== id));
  //             break;
  //           case 'supplier':
  //             setSuppliers(prev => prev.filter(item => item.supplierId !== id));
  //             break;
  //           default:
  //             break;
  //         }
  //       })
  //       .catch(err => {
  //         console.error(`Error deleting the ${type}:`, err);
  //         alert(`Failed to delete the ${type}`);
  //       });
  //   }
  // };

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/');
  };

  const handleAdd = (path) => navigate(path);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white h-full fixed top-0 left-0 mt-16 shadow-lg rounded-tr-3xl rounded-br-3xl flex flex-col">
      <img src="\logo.png" height="100%"/>
        <div className="p-6 flex-1 overflow-y-auto">
          
          <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
          <ul>
            {[
              // { href: "#products", icon: <FaBox />, label: "Products" },
              { href: "#watch", icon: <FaClock />, label: "Watch" },
              { href: "#inventory", icon: <FaBoxes />, label: "Inventory" },
              { href: "#suppliers", icon: <FaPeopleCarry />, label: "Suppliers" },
              {href: "#users", icon:<FaUserAlt/> , label:"Users"},
              { href: "#sales-report", icon: <FaChartLine />, label: "Sales Report" },
            ].map((item, index) => (
              <li key={index} className="mb-6">
                <a href={item.href} className="flex items-center p-3 rounded-md hover:bg-white-700 transition duration-300">
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        {/* Navbar */}
        <nav className="bg-blue-800 text-white p-4 flex justify-between items-center rounded-b-lg shadow-md flex-shrink-0">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded flex items-center transition duration-300"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          {[
            // { id: "products", title: "Products", data: products, fields: [
            //   { label: "ID", key: "productId" },
            //   { label: "Watch ID", key: "watch.watch_id" },
            //   { label: "Category ID", key: "categories[0].categoryId" },
            //   { label: "Actions", key: "actions" },
            // ], link: "/add-product", type: "product" },
            { id: "watches", title: "Watch", data: watchRecords, fields: [
              { label: "ID", key: "watch_id" },
             // { label: "Brand ID", key: "brand_id" },
              { label: "Model Number", key: "model_number" },
              { label: "Watch Name", key: "name" },
              { label: "Description", key: "description" },
              { label: "Price", key: "price" },
              { label: "Stock Quantity", key: "stock_quantity" },
             // { label: "Category", key: "category" },
              //{label: "Image", key: "imageUrl"},
              { label: "Actions", key: "actions" },
            ], link: "/add-watch", type: "watch" },
            { id: "inventory", title: "Inventory", data: inventoryRecords, fields: [
              { label: "ID", key: "inventoryId" },
              { label: "Watch ID", key: "watch.watch_id" },
              { label: "Supplier ID", key: "supplier.supplierId" },
              { label: "Quantity Received", key: "quantityReceived" },
              { label: "Received At", key: "receivedAt" },
              { label: "Actions", key: "actions" },
            ], link: "/add-inventory", type: "inventory" },
            { id: "suppliers", title: "Suppliers", data: suppliers, fields: [
              { label: "ID", key: "supplierId" },
              { label: "Name", key: "name" },
              { label: "Contact", key: "contactInfo" },
              { label: "Address", key: "address" },
              { label: "Actions", key: "actions" },
            ], link: "/add-supplier", type: "supplier" },
            // {id:"users", title: "Users", data: FormData, fields: [
            //   { label: "ID", key: "customerId" },
            //   { label: "FirstName", key:"fisrtName"},
            //   {label: "LastName", key:"lastName"},
            //   {label: "Email", key:"email"},
            //   {label: "Phone", key:"phone"},
            //   {label: "Address", key:"address"},
            //   {label: "City", key: "city"},
            //   {label: "State", key:"state"},
            //   {label: "ZipCode", key:"zipCode"},
            //   {label: "Username", key:"username"},
            //   {label:"Actions", key: 'actions'},
            // ], link: "/register", type: "users"},
          ].map((section, index) => (
            <section id={section.id} key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <button
                  onClick={() => handleAdd(section.link)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mb-6 flex items-center hover:bg-blue-600 transition duration-300"
                >
                  <IoMdAdd className="mr-2" />
                  Add {section.title}
                </button>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      {section.fields.map((field, idx) => (
                        <th key={idx} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {field.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {section.data.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition duration-300">
                        {section.fields.map((field, idx) => (
                          <td key={idx} className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                            {field.key === 'actions' ? (
                              <div className="flex space-x-2">
                                <Link
                                  to={`/${section.type}/${item[`${section.type}Id`]}`}
                                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
                                >
                                  Update
                                </Link>
                                {/* <button
                                  onClick={() => handleDelete(section.type, item[`${section.type}Id`])}
                                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                                >
                                  Delete
                                </button> */}
                              </div>
                            ) : (
                              field.key.split('.').reduce((acc, part) => acc && acc[part], item) || 'N/A'
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          <section id="sales-report" className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Sales Report</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Monthly Sales</h3>
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <ul className="list-disc list-inside">
                  {salesData.map((data, index) => (
                    <li key={index} className="mb-2">
                      {data.month}: ${data.sales}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
// --------------------------------------------------version-3 trail code-----------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaBox, FaClock, FaBoxes, FaPeopleCarry, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
// import { IoMdAdd } from 'react-icons/io';

// const salesData = [
//   { month: 'January', sales: 12000 },
//   { month: 'February', sales: 9000 },
//   { month: 'March', sales: 15000 },
//   // Add more data as needed
// ];

// const AdminDashboard = () => {
//   const [watchRecords, setWatchRecords] = useState([]);
//   const [inventoryRecords, setInventoryRecords] = useState([]);
//   const [suppliers, setSuppliers] = useState([]);
//   const [products, setProducts] = useState([]);
  
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:8089/product/all")
//       .then(response => setProducts(response.data))
//       .catch(err => console.log(err));
      
//     axios.get("http://localhost:8089/watch/all")
//       .then(response => setWatchRecords(response.data))
//       .catch(err => console.log(err));

//     axios.get("http://localhost:8089/inventory/all")
//       .then(response => setInventoryRecords(response.data))
//       .catch(err => console.log(err));
      
//     axios.get("http://localhost:8089/supplier/all")
//       .then(response => setSuppliers(response.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleDelete = (type, id) => {
//     const conf = window.confirm(`Do you want to delete this ${type}?`);
//     if (conf) {
//       axios.delete(`http://localhost:8089/${type}/${id}`)
//         .then(() => {
//           alert(`${type.charAt(0).toUpperCase() + type.slice(1)} has been deleted`);
//           switch (type) {
//             case 'product':
//               setProducts(prev => prev.filter(item => item.productId !== id));
//               break;
//             case 'watch':
//               setWatchRecords(prev => prev.filter(item => item.watch_id !== id));
//               break;
//             case 'inventory':
//               setInventoryRecords(prev => prev.filter(item => item.inventoryId !== id));
//               break;
//             case 'supplier':
//               setSuppliers(prev => prev.filter(item => item.supplierId !== id));
//               break;
//             default:
//               break;
//           }
//         })
//         .catch(err => {
//           console.error(`Error deleting the ${type}:`, err);
//           alert(`Failed to delete the ${type}`);
//         });
//     }
//   };

//   const handleLogout = () => {
//     console.log('Logging out...');
//     navigate('/');
//   };

//   const handleAdd = (path) => navigate(path);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-900 text-white h-full fixed top-0 left-0 mt-16 shadow-lg rounded-tr-3xl rounded-br-3xl flex flex-col">
//         <div className="p-6 flex-1 overflow-y-auto">
//           <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
//           <ul>
//             {[
//               { href: "#products", icon: <FaBox />, label: "Products" },
//               { href: "#watches", icon: <FaClock />, label: "Watches" },
//               { href: "#inventory", icon: <FaBoxes />, label: "Inventory" },
//               { href: "#suppliers", icon: <FaPeopleCarry />, label: "Suppliers" },
//               { href: "#sales-report", icon: <FaChartLine />, label: "Sales Report" },
//             ].map((item, index) => (
//               <li key={index} className="mb-6">
//                 <a href={item.href} className="flex items-center p-3 rounded-md hover:bg-blue-700 transition duration-300">
//                   {item.icon}
//                   <span className="ml-3">{item.label}</span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </aside>

//       <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
//         {/* Navbar */}
//         <nav className="bg-blue-800 text-white p-4 flex justify-between items-center rounded-b-lg shadow-md flex-shrink-0">
//           <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//           <div>
//             <button
//               onClick={handleLogout}
//               className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded flex items-center transition duration-300"
//             >
//               <FaSignOutAlt className="mr-2" />
//               Logout
//             </button>
//           </div>
//         </nav>

//         {/* Main content */}
//         <main className="flex-1 overflow-y-auto p-6">
//           {[
//             { id: "products", title: "Products", data: products, fields: [
//               { label: "ID", key: "productId" },
//               { label: "Watch ID", key: "watch.watch_id" },
//               { label: "Category ID", key: "categories[0].categoryId" },
//               { label: "Actions", key: "actions" },
//             ], link: "/add-product", type: "product", updatePath: "/product-update" },
//             { id: "watches", title: "Watches", data: watchRecords, fields: [
//               { label: "ID", key: "watch_id" },
//               { label: "Brand ID", key: "brand_id" },
//               { label: "Model Number", key: "model_number" },
//               { label: "Watch Name", key: "name" },
//               { label: "Description", key: "description" },
//               { label: "Price", key: "price" },
//               { label: "Stock Quantity", key: "stock_quantity" },
//               { label: "Category", key: "category" },
//               { label: "Actions", key: "actions" },
//             ], link: "/add-watch", type: "watch", updatePath: "/watch-update" },
//             { id: "inventory", title: "Inventory", data: inventoryRecords, fields: [
//               { label: "ID", key: "inventoryId" },
//               { label: "Watch ID", key: "watch.watch_id" },
//               { label: "Supplier ID", key: "supplier.supplierId" },
//               { label: "Quantity Received", key: "quantityReceived" },
//               { label: "Received At", key: "receivedAt" },
//               { label: "Actions", key: "actions" },
//             ], link: "/add-inventory", type: "inventory", updatePath: "/inventory-update" },
//             { id: "suppliers", title: "Suppliers", data: suppliers, fields: [
//               { label: "ID", key: "supplierId" },
//               { label: "Name", key: "name" },
//               { label: "Contact", key: "contactInfo" },
//               { label: "Address", key: "address" },
//               { label: "Actions", key: "actions" },
//             ], link: "/add-supplier", type: "supplier", updatePath: "/supplier-update" },
//           ].map((section, index) => (
//             <section id={section.id} key={index} className="mb-12">
//               <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
//               <div className="bg-white shadow-lg rounded-lg p-6">
//                 <button
//                   onClick={() => handleAdd(section.link)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded mb-6 flex items-center hover:bg-blue-600 transition duration-300"
//                 >
//                   <IoMdAdd className="mr-2" />
//                   Add {section.title.slice(0, -1)}
//                 </button>
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-100">
//                     <tr>
//                       {section.fields.map((field, idx) => (
//                         <th key={idx} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           {field.label}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {section.data.map((item, index) => (
//                       <tr key={index} className="hover:bg-gray-50 transition duration-300">
//                         {section.fields.map((field, idx) => (
//                           <td key={idx} className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
//                             {field.key === 'actions' ? (
//                               <div className="flex space-x-2">
//                                 <Link
//                                   to={`${section.updatePath}/${item[`${section.type}Id`]}`}
//                                   className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
//                                 >
//                                   View
//                                 </Link>
//                                 <button
//                                   onClick={() => handleDelete(section.type, item[`${section.type}Id`])}
//                                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
//                                 >
//                                   Delete
//                                 </button>
//                               </div>
//                             ) : (
//                               field.key.split('.').reduce((o, i) => o[i], item) || 'N/A'
//                             )}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>
//           ))}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaBox, FaClock, FaBoxes, FaPeopleCarry, FaTags, FaSignOutAlt } from 'react-icons/fa';
// import { IoMdAdd } from 'react-icons/io';

// const AdminDashboard = () => {
//   const [watchRecords, setWatchRecords] = useState([]);
//   const [inventoryRecords, setInventoryRecords] = useState([]);
//   const [suppliers, setSuppliers] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
  
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:8089/product/all")
//       .then(response => setProducts(response.data))
//       .catch(err => console.log(err));
      
//     axios.get("http://localhost:8089/watch/all")
//       .then(response => setWatchRecords(response.data))
//       .catch(err => console.log(err));

//     axios.get("http://localhost:8089/inventory/all")
//       .then(response => setInventoryRecords(response.data))
//       .catch(err => console.log(err));
      
//     axios.get("http://localhost:8089/supplier/all")
//       .then(response => setSuppliers(response.data))
//       .catch(err => console.log(err));
      
//     axios.get("http://localhost:8089/category/all") // Added for categories
//       .then(response => setCategories(response.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleDelete = (type, id) => {
//     const conf = window.confirm(`Do you want to delete this ${type}?`);
//     if (conf) {
//       axios.delete(`http://localhost:8089/${type}/${id}`)
//         .then(() => {
//           alert(`${type.charAt(0).toUpperCase() + type.slice(1)} has been deleted`);
//           switch (type) {
//             case 'product':
//               setProducts(prev => prev.filter(item => item.productId !== id));
//               break;
//             case 'watch':
//               setWatchRecords(prev => prev.filter(item => item.watch_id !== id));
//               break;
//             case 'inventory':
//               setInventoryRecords(prev => prev.filter(item => item.inventoryId !== id));
//               break;
//             case 'supplier':
//               setSuppliers(prev => prev.filter(item => item.supplierId !== id));
//               break;
//             case 'category': // Added case for categories
//               setCategories(prev => prev.filter(item => item.categoryId !== id));
//               break;
//             default:
//               break;
//           }
//         })
//         .catch(err => {
//           console.error(`Error deleting the ${type}:`, err);
//           alert(`Failed to delete the ${type}`);
//         });
//     }
//   };

//   const handleLogout = () => {
//     console.log('Logging out...');
//     navigate('/');
//   };

//   const handleAdd = (path) => navigate(path);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-900 text-white h-full fixed top-0 left-0 mt-16 shadow-lg rounded-tr-3xl rounded-br-3xl flex flex-col">
//         <div className="p-6 flex-1 overflow-y-auto">
//           <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
//           <ul>
//             {[
//               { href: "#products", icon: <FaBox />, label: "Products" },
//               { href: "#watchs", icon: <FaClock />, label: "Watchs" },
//               { href: "#inventory", icon: <FaBoxes />, label: "Inventory" },
//               { href: "#suppliers", icon: <FaPeopleCarry />, label: "Suppliers" },
//               { href: "#categories", icon: <FaTags />, label: "Categories" }, // Added Categories
//             ].map((item, index) => (
//               <li key={index} className="mb-6">
//                 <a href={item.href} className="flex items-center p-3 rounded-md hover:bg-blue-700 transition duration-300">
//                   {item.icon}
//                   <span className="ml-3">{item.label}</span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </aside>

//       <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
//         {/* Navbar */}
//         <nav className="bg-blue-800 text-white p-4 flex justify-between items-center rounded-b-lg shadow-md flex-shrink-0">
//           <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//           <div>
//             <button
//               onClick={handleLogout}
//               className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded flex items-center transition duration-300"
//             >
//               <FaSignOutAlt className="mr-2" />
//               Logout
//             </button>
//           </div>
//         </nav>

//         {/* Main content */}
//         <main className="flex-1 overflow-y-auto p-6">
//           {[
//             { id: "products", title: "Products", data: products, fields: [
//               { label: "ID", key: "productId" },
//               { label: "Watch ID", key: "watch.watch_id" },
//               { label: "Category ID", key: "categories[0].categoryId" },
//               { label: "Actions", key: "actions" },
//             ], link: "/add-product", type: "product" },
//             { id: "watches", title: "Watches", data: watchRecords, fields: [
//               { label: "ID", key: "watch_id" },
//               { label: "Brand ID", key: "brand_id" },
//               { label: "Model Number", key: "model_number" },
//               { label: "Watch Name", key: "name" },
//               { label: "Description", key: "description" },
//               { label: "Price", key: "price" },
//               { label: "Stock Quantity", key: "stock_quantity" },
//               { label: "Category", key: "category" },
//               { label: "Actions", key: "actions" },
//             ], link: "/add-watch", type: "watch" },
//             { id: "inventory", title: "Inventory", data: inventoryRecords, fields: [
//               { label: "ID", key: "inventoryId" },
//               { label: "Watch ID", key: "watch.watch_id" },
//               { label: "Supplier ID", key: "supplier.supplierId" },
//               { label: "Quantity Received", key: "quantityReceived" },
//               { label: "Received At", key: "receivedAt" },
//               { label: "Actions", key: "actions" },
//             ], link: "/add-inventory", type: "inventory" },
//             { id: "suppliers", title: "Suppliers", data: suppliers, fields: [
//               { label: "ID", key: "supplierId" },
//               { label: "Name", key: "name" },
//               { label: "Contact", key: "contactInfo" },
//               { label: "Address", key: "address" },
//               { label: "Actions", key: "actions" },
//             ], link: "/add-supplier", type: "supplier" },
//             { id: "categories", title: "Categories", data: categories, fields: [
//               { label: "ID", key: "categoryId" },
//               { label: "Name", key: "name" },
//               { label: "Description", key: "description" },
//               { label: "Actions", key: "product Id" },
//               { label: "Actions", key: "actions" },
//             ], link: "/add-category", type: "category" }, // Added Categories
//           ].map((section, index) => (
//             <section id={section.id} key={index} className="mb-12">
//               <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
//               <div className="bg-white shadow-lg rounded-lg p-6">
//                 <button
//                   onClick={() => handleAdd(section.link)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded mb-6 flex items-center hover:bg-blue-600 transition duration-300"
//                 >
//                   <IoMdAdd className="mr-2" />
//                   Add {section.title.slice(0, -1)}
//                 </button>
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-100">
//                     <tr>
//                       {section.fields.map((field, idx) => (
//                         <th key={idx} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           {field.label}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {section.data.map((item, index) => (
//                       <tr key={index} className="hover:bg-gray-50 transition duration-300">
//                         {section.fields.map((field, idx) => (
//                           <td key={idx} className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
//                             {field.key === 'actions' ? (
//                               <div className="flex space-x-2">
//                                 <Link
//                                   to={`/${section.type}/${item[`${section.type}Id`]}`}
//                                   className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
//                                 >
//                                   View
//                                 </Link>
//                                 <button
//                                   onClick={() => handleDelete(section.type, item[`${section.type}Id`])}
//                                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
//                                 >
//                                   Delete
//                                 </button>
//                               </div>
//                             ) : (
//                               field.key.split('.').reduce((acc, part) => acc && acc[part], item) || 'N/A'
//                             )}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>
//           ))}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;




