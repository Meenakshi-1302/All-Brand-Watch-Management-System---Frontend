import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import { FaPlus, FaTrash } from 'react-icons/fa';

const ProductTable = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8085/product/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleUpdate = (id) => {
        if (id) {
            console.log(`Navigating to update page for product ID: ${id}`);
            navigate(`/product-update/${id}`);
        } else {
            console.error('Invalid product ID for update');
        }
    };

    const handleDelete = async (id) => {
        try {
            if (id) {
                const response = await fetch(`http://localhost:8085/product/${id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Update the product list after deletion
                setProducts(products.filter(product => product.productId !== id));
            } else {
                console.error('Invalid product ID for delete');
            }
        } catch (error) {
            setError(error);
        }
    };

    const handleAdd = () => {
        navigate('/add-product');
    };

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-600">Error: {error.message}</p>;

    return (
        <div className="flex flex-col min-h-screen">
            <AdminNavbar />
            <div className="p-6">
                <h1 className="text-2xl font-semibold text-gray-700 mb-4">Product Details</h1>

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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {products.map((product) => (
                                <tr key={product.productId}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.productId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        ${product.price ? product.price.toFixed(2) : 'N/A'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.modelName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.description}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.quantity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.image}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex gap-2">
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                            onClick={() => handleUpdate(product.productId)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                            onClick={() => handleDelete(product.productId)}
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

export default ProductTable;
