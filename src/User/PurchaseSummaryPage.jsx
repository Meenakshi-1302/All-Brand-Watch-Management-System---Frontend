import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PurchaseSummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  if (!state || !state.paymentDetails) {
    return <p>No payment details available.</p>;
  }

  const { items, totalAmount, timeOfPurchase } = state.paymentDetails;

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You for Your Purchase!</h1>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Purchase Summary</h2>
            <div className="bg-gray-200 p-4 rounded-lg">
              <p className="font-medium text-gray-700">Time of Purchase:</p>
              <p className="text-gray-600">{new Date(timeOfPurchase).toLocaleString()}</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4">Products Purchased:</h3>
              <ul className="space-y-4 mt-2">
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between items-center border-b py-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-gray-900">${item.price.toFixed(2)}</p>
                        <p className="text-gray-700">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-4">Total Amount:</h3>
              <p className="text-gray-900">${totalAmount.toFixed(2)}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thank You!</h2>
            <p className="text-gray-600">We appreciate your business. Your order will be processed shortly.</p>
          </section>

          {/* Return to Home Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/home')}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Return to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PurchaseSummaryPage;
