import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';

const CustomersTable = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await fetch('http://localhost:8085/customers/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCustomers(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCustomers();
    }, []);

    if (loading) return <p className="text-center text-gray-600 text-lg">Loading...</p>;
    if (error) return <p className="text-center text-red-600 text-lg">Error: {error.message}</p>;

    return (
        <div className="p-6">
            <AdminNavbar/>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Customer Details</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 bg-white shadow-lg rounded-lg">
                    <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                        <tr>
                            <th className="px-6 py-3 text-left">ID</th>
                            <th className="px-6 py-3 text-left">Email</th>
                            <th className="px-6 py-3 text-left">Phone</th>
                            <th className="px-6 py-3 text-left">Address</th>
                            <th className="px-6 py-3 text-left">City</th>
                            <th className="px-6 py-3 text-left">State</th>
                            <th className="px-6 py-3 text-left">Zip Code</th>
                            <th className="px-6 py-3 text-left">Country</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm">
                        {customers.map((customer) => (
                            <tr key={customer.customerId} className="hover:bg-gray-50 transition-colors duration-200">
                                <td className="px-6 py-4 whitespace-nowrap">{customer.customerId}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.address}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.city}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.state}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.zipCode}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{customer.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomersTable;
