import React, { useEffect, useState } from 'react';

const MyOrdersPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userid");
    const storedProducts = JSON.parse(sessionStorage.getItem(`products_${userId}`));
    setProducts(storedProducts || []);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">My Orders</h1>
          {products.length === 0 ? (
            <p className="text-center text-gray-500">You have no orders yet.</p>
          ) : (
            <ul className="space-y-4">
              {products.map((product) => (
                <li key={product.id} className="flex justify-between items-center border-b py-4">
                  <div className="flex items-center space-x-4">
                    <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-900">${(product.price * product.quantity).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyOrdersPage;
