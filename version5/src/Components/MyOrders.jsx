import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from session storage or backend
    const fetchOrders = async () => {
      try {
        const orderDetails = sessionStorage.getItem('orderDetails');
        if (orderDetails) {
          // Here you might want to fetch order history from backend
          // For demo purposes, using the stored order
          setOrders([JSON.parse(orderDetails)]);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">My Orders</h1>
          <div className="space-y-6">
            {orders.length === 0 ? (
              <p className="text-gray-600">You have no orders yet.</p>
            ) : (
              orders.map((order, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order {index + 1}</h2>
                  <ul className="space-y-4">
                    {order.items.map(item => (
                      <li key={item.id} className="flex justify-between items-center border-b py-4">
                        <div className="flex items-center space-x-4">
                          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                          <div>
                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                        <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex justify-between items-center border-t pt-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Total: ${order.cartTotal.toFixed(2)}</h2>
                    <p className="text-gray-600">Address: {order.address}</p>
                    <p className="text-gray-600">Payment Method: {order.paymentMethod}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyOrders;
