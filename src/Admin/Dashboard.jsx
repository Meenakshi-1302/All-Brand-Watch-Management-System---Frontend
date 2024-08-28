import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../index.css'; // Import your Tailwind CSS file
import SideBar from './SideBar';

const Dashboard = () => {
    const [userCount, setUserCount] = useState(0); // State to store user count
    const [productCount, setProductCount] = useState(0); // State to store product count
    const [supplierCount, setSupplierCount] = useState(0); // State to store supplier count
    const [inventoryCount, setInventoryCount] = useState(0); // State to store inventory count
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    const navigate = useNavigate(); // Initialize navigate function

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await fetch('http://localhost:8085/customers/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserCount(data.length); // Assuming data is an array of customers
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserCount();

        const fetchProductCount = async () => {
            try {
                const response = await fetch('http://localhost:8085/product/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProductCount(data.length); // Assuming data is an array of products
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductCount();

        const fetchSupplierCount = async () => {
            try {
                const response = await fetch('http://localhost:8085/supplier/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSupplierCount(data.length); // Assuming data is an array of suppliers
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchSupplierCount();

        const fetchInventoryCount = async () => {
            try {
                const response = await fetch('http://localhost:8085/inventory/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setInventoryCount(data.length); // Assuming data is an array of inventory items
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchInventoryCount();
        
    }, []);

    const handleLogout = () => {
        // Perform logout actions if necessary
        // Redirect to the home page
        navigate('/');
    };

    return (
        <div className="flex flex-col md:flex-row max-h-screen bg-gray-100">
            {/* Sidebar */}
            <SideBar className="hidden md:block fixed w-64 h-full bg-white shadow-md" />

            {/* Main Content */}
            <div className="flex-1 md:ml-64 p-6">
                {/* Header */}
                <header className="bg-white shadow-md w-full p-4 flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-700">Admin Dashboard</h1>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={handleLogout} // Attach handleLogout function
                    >
                        Logout
                    </button>
                </header>

                {/* Banner Image */}
                <div className="mb-6">
                    <img 
                        src="/watch_banner.jpg" 
                        alt="Dashboard Banner" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Cards */}
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-64 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-50">
                        <h2 className="text-xl font-medium text-gray-800">Users</h2>
                        {loading ? (
                            <p className="text-lg font-semibold text-gray-600">Loading...</p>
                        ) : error ? (
                            <p className="text-lg font-semibold text-red-600">Error: {error.message}</p>
                        ) : (
                            <p className="text-4xl font-bold text-gray-600">{userCount}</p>
                        )}
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-64 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-50">
                        <h2 className="text-xl font-medium text-gray-800">Inventory</h2>
                        {loading ? (
                            <p className="text-lg font-semibold text-gray-600">Loading...</p>
                        ) : error ? (
                            <p className="text-lg font-semibold text-red-600">Error: {error.message}</p>
                        ) : (
                            <p className="text-4xl font-bold text-gray-600">{inventoryCount}</p>
                        )}
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-64 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-50">
                        <h2 className="text-xl font-medium text-gray-800">Watches</h2>
                        {loading ? (
                            <p className="text-lg font-semibold text-gray-600">Loading...</p>
                        ) : error ? (
                            <p className="text-lg font-semibold text-red-600">Error: {error.message}</p>
                        ) : (
                            <p className="text-4xl font-bold text-gray-600">{productCount}</p>
                        )}
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-64 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-50">
                        <h2 className="text-xl font-medium text-gray-800">Suppliers</h2>
                        {loading ? (
                            <p className="text-lg font-semibold text-gray-600">Loading...</p>
                        ) : error ? (
                            <p className="text-lg font-semibold text-red-600">Error: {error.message}</p>
                        ) : (
                            <p className="text-4xl font-bold text-gray-600">{supplierCount}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
