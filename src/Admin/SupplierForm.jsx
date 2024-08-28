import React, { useState } from 'react';
import axios from 'axios';

const SupplierForm = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        contactInfo: '',
        address: ''
    });

    // State to handle submission status
    const [status, setStatus] = useState('');

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8085/supplier', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200 || response.status === 201) {
                setStatus('Supplier added successfully!');
                // Optionally, reset the form data after successful submission
                setFormData({
                    name: '',
                    contactInfo: '',
                    address: ''
                });
            } else {
                throw new Error('Unexpected response status');
            }
        } catch (error) {
            setStatus(`Error: ${error.message}`);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Supplier</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="contactInfo">Contact Info</label>
                    <input
                        type="text"
                        id="contactInfo"
                        name="contactInfo"
                        value={formData.contactInfo}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Supplier
                    </button>
                </div>

                {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
            </form>
        </div>
    );
};

export default SupplierForm;
