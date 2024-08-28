import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import AdminNavbar from './AdminNavbar';
import { FaPlus, FaTrash } from 'react-icons/fa'; // Importing react-icons for the plus and trash icons

const InventoryTable = () => {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Hook to programmatically navigate

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await fetch('http://localhost:8085/inventory/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setInventory(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchInventory();
    }, []);

    const handleUpdate = (id) => {
        navigate(`/inventory-update/${id}`); // Navigate to the InventoryUpdate page with the item ID
    };

    const handleDelete = (id) => {
        console.log(`Delete item with id: ${id}`);
        // Add your delete logic here
    };

    const handleAdd = () => {
        navigate('/inventory-add'); // Navigate to the InventoryForm page
    };

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-600">Error: {error.message}</p>;

    return (
        <div className="flex flex-col min-h-screen">
            <AdminNavbar />
            <div className="p-6">
                <h1 className="text-2xl font-semibold text-gray-700 mb-4">Inventory Details</h1>

                {/* Add button */}
                <div className="mb-4 flex justify-end">
                    <button
                        className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 flex items-center gap-2"
                        onClick={handleAdd}
                    >
                        <FaPlus size={20} />
                        Add
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Received At</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {inventory.map((item) => (
                                <tr key={item.inventoryId}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.inventoryId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.product.productId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {item.supplier ? item.supplier.name : 'N/A'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {item.receivedAt ? new Date(item.receivedAt).toLocaleDateString() : 'N/A'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex gap-2">
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                            onClick={() => handleUpdate(item.inventoryId)} // Pass the inventoryId to handleUpdate
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                            onClick={() => handleDelete(item.inventoryId)} // Pass the inventoryId to handleDelete
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InventoryTable;
