import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const InventoryUpdate = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        axios
            .get(`http://localhost:8085/inventory/${id}`)
            .then((response) => setData(response.data))
            .catch((err) => console.error(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8085/inventory", data)
            .then(() => {
                alert("Inventory data updated successfully");
                navigate("/");
            })
            .catch((err) => console.error(err));
    };
  
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-6 text-center">Update Inventory Data</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="inventoryId" className="block text-sm font-medium text-gray-700">ID:</label>
                        <input
                            type="text"
                            disabled
                            name="inventoryId"
                            id="inventoryId"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            value={data.inventoryId || ''}
                        />
                    </div>

                    <div>
                        <label htmlFor="quantityReceived" className="block text-sm font-medium text-gray-700">Quantity Received:</label>
                        <input
                            type="text"
                            name="quantityReceived"
                            id="quantityReceived"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            value={data.quantityReceived || ''}
                            onChange={(e) => setData({ ...data, quantityReceived: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="receivedAt" className="block text-sm font-medium text-gray-700">Received At:</label>
                        <input
                            type="text"
                            name="receivedAt"
                            id="receivedAt"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            value={data.receivedAt || ''}
                            onChange={(e) => setData({ ...data, receivedAt: e.target.value })}
                        />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InventoryUpdate;
