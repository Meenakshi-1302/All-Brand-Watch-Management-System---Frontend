import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import { FaPlus, FaTrash } from 'react-icons/fa';

const SupplierTable = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Hook to programmatically navigate

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const response = await fetch('http://localhost:8085/supplier/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSuppliers(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchSuppliers();
    }, []);

    const handleUpdate = (id) => {
        if (id) {
            console.log(`Navigating to update page for supplier ID: ${id}`);
            navigate(`/supplier-update/${id}`);
        } else {
            console.error('Invalid Supplier ID for update');
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8085/supplier/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setSuppliers(suppliers.filter(supplier => supplier.supplierId !== id));
        } catch (error) {
            setError(error);
        }
    };

    const handleAdd = () => {
        navigate('/supplier-add'); // Navigate to add supplier page
    };

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-600">Error: {error.message}</p>;

    return (
        <div className="flex flex-col min-h-screen">
            <AdminNavbar />
            <div className="p-6">
                <h1 className="text-2xl font-semibold text-gray-700 mb-4">Supplier Details</h1>

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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {suppliers.map((supplier) => (
                                <tr key={supplier.supplierId}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{supplier.supplierId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{supplier.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{supplier.contactInfo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{supplier.address}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex gap-2">
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                            onClick={() => handleUpdate(supplier.supplierId)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                            onClick={() => handleDelete(supplier.supplierId)}
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

export default SupplierTable;
