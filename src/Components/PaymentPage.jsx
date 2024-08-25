// import React, { useState, useEffect } from 'react';
// import { useCart } from 'react-use-cart';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const PaymentPage = () => {
//   const { items, cartTotal } = useCart();
//   const [user, setUser] = useState(null);
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     address: '',
//     paymentMethod: 'credit_card', // Default payment method
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch user details from backend
//     const fetchUserDetails = async () => {
//       try {
//         const response = await axios.get('http://localhost:8089/customers/1'); // Adjust the URL as necessary
//         setUser(response.data);
//         setForm({
//           ...form,
//           name: response.data.username,
//           email: response.data.email,
//           address: response.data.address,
//         });
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!form.name) newErrors.name = 'Name is required';
//     if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
//     if (!form.address) newErrors.address = 'Address is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       // Here you would send payment details to your backend
//       // For example: await axios.post('http://localhost:8089/payment', { ...form, items });
//       alert('Payment successful!');
//       navigate('/confirmation'); // Redirect to a confirmation page after successful payment
//     } catch (error) {
//       console.error('Error processing payment:', error);
//       alert('Payment failed. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <main className="p-6">
//         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Order Summary */}
//             <div className="bg-gray-50 p-4 rounded-lg shadow-md">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
//               <ul className="space-y-4">
//                 {items.map(item => (
//                   <li key={item.id} className="flex justify-between items-center border-b py-4">
//                     <div className="flex items-center space-x-4">
//                       <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
//                       <div>
//                         <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
//                         <p className="text-gray-600">{item.description}</p>
//                         <p className="text-gray-900">${item.price.toFixed(2)}</p>
//                       </div>
//                     </div>
//                     <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-6 flex justify-between items-center border-t pt-4">
//                 <h2 className="text-2xl font-semibold text-gray-800">Total: ${cartTotal.toFixed(2)}</h2>
//               </div>
//             </div>

//             {/* Payment Form */}
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h2>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-gray-700">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.email ? 'border-red-500' : ''}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-gray-700">Address</label>
//                   <textarea
//                     name="address"
//                     value={form.address}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.address ? 'border-red-500' : ''}`}
//                   />
//                   {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-gray-700">Payment Method</label>
//                   <select
//                     name="paymentMethod"
//                     value={form.paymentMethod}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                   >
//                     <option value="credit_card">Credit Card</option>
//                     <option value="paypal">PayPal</option>
//                     <option value="bank_transfer">Bank Transfer</option>
//                   </select>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
//                 >
//                   Complete Payment
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PaymentPage;
///-----------------version 2--------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { useCart } from 'react-use-cart';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaCreditCard, FaPaypal, FaBank } from 'react-icons/fa'; // Import icons for payment methods

// const PaymentPage = () => {
//   const { items, cartTotal } = useCart();
//   const [user, setUser] = useState(null);
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     address: '',
//     paymentMethod: 'credit_card', // Default payment method
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     paypalEmail: '',
//     bankAccount: '',
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch user details from backend
//     const fetchUserDetails = async () => {
//       try {
//         const response = await axios.get('http://localhost:8089/customers/1'); // Adjust the URL as necessary
//         setUser(response.data);
//         setForm({
//           ...form,
//           name: response.data.username,
//           email: response.data.email,
//           address: response.data.address,
//         });
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!form.name) newErrors.name = 'Name is required';
//     if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
//     if (!form.address) newErrors.address = 'Address is required';

//     // Payment method specific validations
//     if (form.paymentMethod === 'credit_card') {
//       if (!form.cardNumber) newErrors.cardNumber = 'Card number is required';
//       if (!form.expiryDate) newErrors.expiryDate = 'Expiry date is required';
//       if (!form.cvv) newErrors.cvv = 'CVV is required';
//     } else if (form.paymentMethod === 'paypal') {
//       if (!form.paypalEmail || !/\S+@\S+\.\S+/.test(form.paypalEmail)) newErrors.paypalEmail = 'Valid PayPal email is required';
//     } else if (form.paymentMethod === 'bank_transfer') {
//       if (!form.bankAccount) newErrors.bankAccount = 'Bank account details are required';
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       // Here you would send payment details to your backend
//       // For example: await axios.post('http://localhost:8089/payment', { ...form, items });
//       alert('Payment successful!');
//       navigate('/confirmation'); // Redirect to a confirmation page after successful payment
//     } catch (error) {
//       console.error('Error processing payment:', error);
//       alert('Payment failed. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <main className="p-6">
//         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Order Summary */}
//             <div className="bg-gray-50 p-4 rounded-lg shadow-md">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
//               <ul className="space-y-4">
//                 {items.map(item => (
//                   <li key={item.id} className="flex justify-between items-center border-b py-4">
//                     <div className="flex items-center space-x-4">
//                       <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
//                       <div>
//                         <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
//                         <p className="text-gray-600">{item.description}</p>
//                         {/* <p className="text-gray-900">${item.price.toFixed(2)}</p> */}
//                       </div>
//                     </div>
//                     <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-6 flex justify-between items-center border-t pt-4">
//                 <h2 className="text-2xl font-semibold text-gray-800">Total: ${cartTotal.toFixed(2)}</h2>
//               </div>
//             </div>

//             {/* Payment Form */}
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h2>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-gray-700">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.email ? 'border-red-500' : ''}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-gray-700">Address</label>
//                   <textarea
//                     name="address"
//                     value={form.address}
//                     onChange={handleChange}
//                     className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.address ? 'border-red-500' : ''}`}
//                   />
//                   {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                 </div>

//                 <div>
//                   <label className="block text-gray-700">Payment Method</label>
//                   <select
//                     name="paymentMethod"
//                     value={form.paymentMethod}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                   >
//                     <option value="credit_card">Credit Card</option>
//                     <option value="paypal">PayPal</option>
//                     <option value="bank_transfer">Bank Transfer</option>
//                   </select>
//                 </div>

//                 {form.paymentMethod === 'credit_card' && (
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-gray-700">Card Number</label>
//                       <input
//                         type="text"
//                         name="cardNumber"
//                         value={form.cardNumber}
//                         onChange={handleChange}
//                         className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.cardNumber ? 'border-red-500' : ''}`}
//                       />
//                       {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
//                     </div>

//                     <div className="flex space-x-4">
//                       <div className="flex-1">
//                         <label className="block text-gray-700">Expiry Date</label>
//                         <input
//                           type="text"
//                           name="expiryDate"
//                           value={form.expiryDate}
//                           onChange={handleChange}
//                           className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.expiryDate ? 'border-red-500' : ''}`}
//                         />
//                         {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
//                       </div>

//                       <div className="flex-1">
//                         <label className="block text-gray-700">CVV</label>
//                         <input
//                           type="text"
//                           name="cvv"
//                           value={form.cvv}
//                           onChange={handleChange}
//                           className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.cvv ? 'border-red-500' : ''}`}
//                         />
//                         {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {form.paymentMethod === 'paypal' && (
//                   <div>
//                     <div>
//                       <label className="block text-gray-700">PayPal Email</label>
//                       <input
//                         type="email"
//                         name="paypalEmail"
//                         value={form.paypalEmail}
//                         onChange={handleChange}
//                         className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.paypalEmail ? 'border-red-500' : ''}`}
//                       />
//                       {errors.paypalEmail && <p className="text-red-500 text-sm mt-1">{errors.paypalEmail}</p>}
//                     </div>
//                   </div>
//                 )}

//                 {form.paymentMethod === 'bank_transfer' && (
//                   <div>
//                     <div>
//                       <label className="block text-gray-700">Bank Account Details</label>
//                       <textarea
//                         name="bankAccount"
//                         value={form.bankAccount}
//                         onChange={handleChange}
//                         className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.bankAccount ? 'border-red-500' : ''}`}
//                       />
//                       {errors.bankAccount && <p className="text-red-500 text-sm mt-1">{errors.bankAccount}</p>}
//                     </div>
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
//                 >
//                   Complete Payment
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PaymentPage;
//--------------------------------------------version 3 working code--------------------------------------------------------
//--------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const PaymentPage = () => {
  const { items, cartTotal } = useCart();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'credit_card', // Default payment method
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    paypalEmail: '',
    bankAccount: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  // const {id} = useParams();

  useEffect(() => {
    // Fetch user details from backend
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8089/customers/'+sessionStorage.getItem("userid")); // Adjust the URL as necessary
        setUser(response.data);
        setForm({
          ...form,
          name: response.data.username,
          email: response.data.email,
          address: response.data.address,
        });
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const preloader = () =>{
      navigate('/preloader')
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    const currentYear = new Date().getFullYear();

    if (!form.address) newErrors.address = 'Address is required';

    // Payment method specific validations
    if (form.paymentMethod === 'credit_card') {
      // Validate Card Number
      if (!/^\d{16}$/.test(form.cardNumber)) newErrors.cardNumber = 'Card number must be exactly 16 digits';

      // Validate Expiry Date
      if (!/^(0[1-9]|1[0-2])$/.test(form.expiryMonth) || parseInt(form.expiryMonth) < 1 || parseInt(form.expiryMonth) > 12) {
        newErrors.expiryMonth = 'Expiry month must be between 01 and 12';
      }
      if (!/^\d{4}$/.test(form.expiryYear) || parseInt(form.expiryYear) <= currentYear) {
        newErrors.expiryYear = 'Expiry year must be greater than the current year';
      }

      // Validate CVV
      if (!/^\d{3}$/.test(form.cvv)) newErrors.cvv = 'CVV must be exactly 3 digits';
    } else if (form.paymentMethod === 'paypal') {
      if (!form.paypalEmail || !/\S+@\S+\.\S+/.test(form.paypalEmail)) newErrors.paypalEmail = 'Valid PayPal email is required';
    } else if (form.paymentMethod === 'bank_transfer') {
      if (!form.bankAccount) newErrors.bankAccount = 'Bank account details are required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Here you would send payment details to your backend
      // For example: await axios.post('http://localhost:8089/payment', { ...form, items });
      alert('Payment successful!');
      navigate('/ThankyouPage'); // Redirect to a confirmation page after successful payment
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
              <ul className="space-y-4">
                {items.map(item => (
                  <li key={item.id} className="flex justify-between items-center border-b py-4">
                    <div className="flex items-center space-x-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                        <p className="text-gray-600">{item.description}</p>
                        {/* <p className="text-gray-900">${item.price.toFixed(2)}</p> */}
                      </div>
                    </div>
                    <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-between items-center border-t pt-4">
                <h2 className="text-2xl font-semibold text-gray-800">Total: ${cartTotal.toFixed(2)}</h2>
              </div>
            </div>

            {/* Payment Form */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    readOnly
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    readOnly
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-gray-700">Address</label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.address ? 'border-red-500' : ''}`}
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>

                <div>
                  <label className="block text-gray-700">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={form.paymentMethod}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="">Select a payment method</option>
                    <option value="credit_card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank_transfer">Bank Transfer</option>
                  </select>
                </div>

                {form.paymentMethod === 'credit_card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={form.cardNumber}
                        onChange={handleChange}
                        maxLength="16"
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.cardNumber ? 'border-red-500' : ''}`}
                      />
                      {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                    </div>

                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label className="block text-gray-700">Expiry Month</label>
                        <input
                          type="text"
                          name="expiryMonth"
                          value={form.expiryMonth}
                          onChange={handleChange}
                          maxLength="2"
                          className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.expiryMonth ? 'border-red-500' : ''}`}
                        />
                        {errors.expiryMonth && <p className="text-red-500 text-sm mt-1">{errors.expiryMonth}</p>}
                      </div>

                      <div className="flex-1">
                        <label className="block text-gray-700">Expiry Year</label>
                        <input
                          type="text"
                          name="expiryYear"
                          value={form.expiryYear}
                          onChange={handleChange}
                          maxLength="4"
                          className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.expiryYear ? 'border-red-500' : ''}`}
                        />
                        {errors.expiryYear && <p className="text-red-500 text-sm mt-1">{errors.expiryYear}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700">CVV</label>
                      <input
                        type="password"
                        name="cvv"
                        value={form.cvv}
                        onChange={handleChange}
                        maxLength="3"
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.cvv ? 'border-red-500' : ''}`}
                      />
                      {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                    </div>
                  </div>
                )}

                {form.paymentMethod === 'paypal' && (
                  <div>
                    <label className="block text-gray-700">PayPal Email</label>
                    <input
                      type="email"
                      name="paypalEmail"
                      value={form.paypalEmail}
                      onChange={handleChange}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.paypalEmail ? 'border-red-500' : ''}`}
                    />
                    {errors.paypalEmail && <p className="text-red-500 text-sm mt-1">{errors.paypalEmail}</p>}
                  </div>
                )}

                {form.paymentMethod === 'bank_transfer' && (
                  <div>
                    <label className="block text-gray-700">Bank Account Details</label>
                    <textarea
                      name="bankAccount"
                      value={form.bankAccount}
                      onChange={handleChange}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.bankAccount ? 'border-red-500' : ''}`}
                    />
                    {errors.bankAccount && <p className="text-red-500 text-sm mt-1">{errors.bankAccount}</p>}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
                  onChange={preloader}
                >
                  Complete Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
//-------------------------------------my orders trail code(working code)------------------------------------------------------------------
// // import React, { useState, useEffect } from 'react';
// // import { useCart } from 'react-use-cart';
// // import axios from 'axios';
// // import { useNavigate, useParams } from 'react-router-dom';

// // const PaymentPage = () => {
// //   const { items, cartTotal } = useCart();
// //   const [user, setUser] = useState(null);
// //   const [form, setForm] = useState({
// //     name: '',
// //     email: '',
// //     address: '',
// //     paymentMethod: 'credit_card', // Default payment method
// //     cardNumber: '',
// //     expiryMonth: '',
// //     expiryYear: '',
// //     cvv: '',
// //     paypalEmail: '',
// //     bankAccount: '',
// //   });
// //   const [errors, setErrors] = useState({});
// //   const navigate = useNavigate();
// //   const userId = sessionStorage.getItem("userid");

// //   useEffect(() => {
// //     // Fetch user details from backend
// //     const fetchUserDetails = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8089/customers/${userId}`);
// //         setUser(response.data);
// //         setForm({
// //           ...form,
// //           name: response.data.username,
// //           email: response.data.email,
// //           address: response.data.address,
// //         });
// //       } catch (error) {
// //         console.error('Error fetching user details:', error);
// //       }
// //     };

// //     fetchUserDetails();
// //   }, []);

// //   useEffect(() => {
// //     // Store product details in session storage
// //     const products = items.map((item) => ({
// //       id: item.id,
// //       name: item.name,
// //       description: item.description,
// //       price: item.price,
// //       quantity: item.quantity,
// //     }));
// //     sessionStorage.setItem(`products_${userId}`, JSON.stringify(products));
// //   }, [items, userId]);

// //   const preloader = () => {
// //     navigate('/preloader');
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setForm({ ...form, [name]: value });
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};
// //     const currentYear = new Date().getFullYear();

// //     if (!form.address) newErrors.address = 'Address is required';

// //     // Payment method specific validations
// //     if (form.paymentMethod === 'credit_card') {
// //       // Validate Card Number
// //       if (!/^\d{16}$/.test(form.cardNumber)) newErrors.cardNumber = 'Card number must be exactly 16 digits';

// //       // Validate Expiry Date
// //       if (!/^(0[1-9]|1[0-2])$/.test(form.expiryMonth) || parseInt(form.expiryMonth) < 1 || parseInt(form.expiryMonth) > 12) {
// //         newErrors.expiryMonth = 'Expiry month must be between 01 and 12';
// //       }
// //       if (!/^\d{4}$/.test(form.expiryYear) || parseInt(form.expiryYear) <= currentYear) {
// //         newErrors.expiryYear = 'Expiry year must be greater than the current year';
// //       }

// //       // Validate CVV
// //       if (!/^\d{3}$/.test(form.cvv)) newErrors.cvv = 'CVV must be exactly 3 digits';
// //     } else if (form.paymentMethod === 'paypal') {
// //       if (!form.paypalEmail || !/\S+@\S+\.\S+/.test(form.paypalEmail)) newErrors.paypalEmail = 'Valid PayPal email is required';
// //     } else if (form.paymentMethod === 'bank_transfer') {
// //       if (!form.bankAccount) newErrors.bankAccount = 'Bank account details are required';
// //     }

// //     return newErrors;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const validationErrors = validateForm();
// //     if (Object.keys(validationErrors).length > 0) {
// //       setErrors(validationErrors);
// //       return;
// //     }

// //     try {
// //       // Here you would send payment details to your backend
// //       // For example: await axios.post('http://localhost:8089/payment', { ...form, items });
// //       alert('Payment successful!');
// //       navigate('/ThankyouPage'); // Redirect to a confirmation page after successful payment
// //     } catch (error) {
// //       console.error('Error processing payment:', error);
// //       alert('Payment failed. Please try again.');
// //     }
// //   };
// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <main className="p-6">
// //         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
// //           <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment</h1>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {/* Order Summary */}
// //             <div className="bg-gray-50 p-4 rounded-lg shadow-md">
// //               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
// //               <ul className="space-y-4">
// //                 {items.map(item => (
// //                   <li key={item.id} className="flex justify-between items-center border-b py-4">
// //                     <div className="flex items-center space-x-4">
// //                       <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
// //                       <div>
// //                         <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
// //                         <p className="text-gray-600">{item.description}</p>
// //                         {/* <p className="text-gray-900">${item.price.toFixed(2)}</p> */}
// //                       </div>
// //                     </div>
// //                     <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
// //                   </li>
// //                 ))}
// //               </ul>
// //               <div className="mt-6 flex justify-between items-center border-t pt-4">
// //                 <h2 className="text-2xl font-semibold text-gray-800">Total: ${cartTotal.toFixed(2)}</h2>
// //               </div>
// //             </div>

// //             {/* Payment Form */}
// //             <div>
// //               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h2>
// //               <form onSubmit={handleSubmit} className="space-y-4">
// //                 <div>
// //                   <label className="block text-gray-700">Name</label>
// //                   <input
// //                     type="text"
// //                     name="name"
// //                     value={form.name}
// //                     readOnly
// //                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 cursor-not-allowed"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700">Email</label>
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     value={form.email}
// //                     readOnly
// //                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200 cursor-not-allowed"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700">Address</label>
// //                   <textarea
// //                     name="address"
// //                     value={form.address}
// //                     onChange={handleChange}
// //                     className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.address ? 'border-red-500' : ''}`}
// //                   />
// //                   {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
// //                 </div>

// //                 <div>
// //                   <label className="block text-gray-700">Payment Method</label>
// //                   <select
// //                     name="paymentMethod"
// //                     value={form.paymentMethod}
// //                     onChange={handleChange}
// //                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
// //                   >
// //                     <option value="">Select a payment method</option>
// //                     <option value="credit_card">Credit Card</option>
// //                     <option value="paypal">PayPal</option>
// //                     <option value="bank_transfer">Bank Transfer</option>
// //                   </select>
// //                 </div>

// //                 {form.paymentMethod === 'credit_card' && (
// //                   <div className="space-y-4">
// //                     <div>
// //                       <label className="block text-gray-700">Card Number</label>
// //                       <input
// //                         type="text"
// //                         name="cardNumber"
// //                         value={form.cardNumber}
// //                         onChange={handleChange}
// //                         maxLength="16"
// //                         className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.cardNumber ? 'border-red-500' : ''}`}
// //                       />
// //                       {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
// //                     </div>

// //                     <div className="flex space-x-4">
// //                       <div className="flex-1">
// //                         <label className="block text-gray-700">Expiry Month</label>
// //                         <input
// //                           type="text"
// //                           name="expiryMonth"
// //                           value={form.expiryMonth}
// //                           onChange={handleChange}
// //                           maxLength="2"
// //                           className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.expiryMonth ? 'border-red-500' : ''}`}
// //                         />
// //                         {errors.expiryMonth && <p className="text-red-500 text-sm mt-1">{errors.expiryMonth}</p>}
// //                       </div>

// //                       <div className="flex-1">
// //                         <label className="block text-gray-700">Expiry Year</label>
// //                         <input
// //                           type="text"
// //                           name="expiryYear"
// //                           value={form.expiryYear}
// //                           onChange={handleChange}
// //                           maxLength="4"
// //                           className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.expiryYear ? 'border-red-500' : ''}`}
// //                         />
// //                         {errors.expiryYear && <p className="text-red-500 text-sm mt-1">{errors.expiryYear}</p>}
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <label className="block text-gray-700">CVV</label>
// //                       <input
// //                         type="password"
// //                         name="cvv"
// //                         value={form.cvv}
// //                         onChange={handleChange}
// //                         maxLength="3"
// //                         className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.cvv ? 'border-red-500' : ''}`}
// //                       />
// //                       {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
// //                     </div>
// //                   </div>
// //                 )}

// //                 {form.paymentMethod === 'paypal' && (
// //                   <div>
// //                     <label className="block text-gray-700">PayPal Email</label>
// //                     <input
// //                       type="email"
// //                       name="paypalEmail"
// //                       value={form.paypalEmail}
// //                       onChange={handleChange}
// //                       className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.paypalEmail ? 'border-red-500' : ''}`}
// //                     />
// //                     {errors.paypalEmail && <p className="text-red-500 text-sm mt-1">{errors.paypalEmail}</p>}
// //                   </div>
// //                 )}

// //                 {form.paymentMethod === 'bank_transfer' && (
// //                   <div>
// //                     <label className="block text-gray-700">Bank Account Details</label>
// //                     <textarea
// //                       name="bankAccount"
// //                       value={form.bankAccount}
// //                       onChange={handleChange}
// //                       className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${errors.bankAccount ? 'border-red-500' : ''}`}
// //                     />
// //                     {errors.bankAccount && <p className="text-red-500 text-sm mt-1">{errors.bankAccount}</p>}
// //                   </div>
// //                 )}

// //                 <button
// //                   type="submit"
// //                   className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
// //                   onChange={preloader}
// //                 >
// //                   Complete Payment
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default PaymentPage;
// ///-----------another trail----------------------------------
// import React, { useState, useEffect } from 'react';
// import { useCart } from 'react-use-cart';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const PaymentPage = () => {
//   const { items, cartTotal, emptyCart } = useCart();
//   const [user, setUser] = useState(null);
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     address: '',
//     paymentMethod: 'credit_card',
//     cardNumber: '',
//     expiryMonth: '',
//     expiryYear: '',
//     cvv: '',
//     paypalEmail: '',
//     bankAccount: '',
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const response = await axios.get('http://localhost:8089/customers/' + sessionStorage.getItem("userid"));
//         setUser(response.data);
//         setForm({
//           ...form,
//           name: response.data.username,
//           email: response.data.email,
//           address: response.data.address,
//         });
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const currentYear = new Date().getFullYear();

//     if (!form.address) newErrors.address = 'Address is required';

//     if (form.paymentMethod === 'credit_card') {
//       if (!/^\d{16}$/.test(form.cardNumber)) newErrors.cardNumber = 'Card number must be exactly 16 digits';
//       if (!/^(0[1-9]|1[0-2])$/.test(form.expiryMonth) || parseInt(form.expiryMonth) < 1 || parseInt(form.expiryMonth) > 12) {
//         newErrors.expiryMonth = 'Expiry month must be between 01 and 12';
//       }
//       if (!/^\d{4}$/.test(form.expiryYear) || parseInt(form.expiryYear) <= currentYear) {
//         newErrors.expiryYear = 'Expiry year must be greater than the current year';
//       }
//       if (!/^\d{3}$/.test(form.cvv)) newErrors.cvv = 'CVV must be exactly 3 digits';
//     } else if (form.paymentMethod === 'paypal') {
//       if (!form.paypalEmail || !/\S+@\S+\.\S+/.test(form.paypalEmail)) newErrors.paypalEmail = 'Valid PayPal email is required';
//     } else if (form.paymentMethod === 'bank_transfer') {
//       if (!form.bankAccount) newErrors.bankAccount = 'Bank account details are required';
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       // Simulate payment processing
//       // Save order details in session storage
//       sessionStorage.setItem(`products_${sessionStorage.getItem("userid")}`, JSON.stringify(items));

//       // Clear cart items from session storage and local storage
//       sessionStorage.removeItem('cartItems');
//       localStorage.removeItem('cartItems');
//       emptyCart();

//       alert('Payment successful!');
//       navigate('/ThankyouPage'); // Redirect to a confirmation page
//     } catch (error) {
//       console.error('Error processing payment:', error);
//       alert('Payment failed. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <main className="p-6">
//         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-50 p-4 rounded-lg shadow-md">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
//               <ul className="space-y-4">
//                 {items.map(item => (
//                   <li key={item.id} className="flex justify-between items-center border-b py-4">
//                     <div className="flex items-center space-x-4">
//                       <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
//                       <div>
//                         <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
//                         <p className="text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                     <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-6 flex justify-between items-center border-t pt-4">
//                 <h2 className="text-xl font-semibold text-gray-800">Total Price:</h2>
//                 <p className="text-xl font-bold text-gray-900">${cartTotal.toFixed(2)}</p>
//               </div>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-lg shadow-md">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address:</label>
//                   <input
//                     type="text"
//                     id="address"
//                     name="address"
//                     value={form.address}
//                     onChange={handleChange}
//                     className="w-full p-2 border border-gray-300 rounded-lg"
//                   />
//                   {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
//                 </div>

//                 <div className="mb-4">
//                   <label className="block text-gray-700 font-semibold mb-2">Payment Method:</label>
//                   <select
//                     name="paymentMethod"
//                     value={form.paymentMethod}
//                     onChange={handleChange}
//                     className="w-full p-2 border border-gray-300 rounded-lg"
//                   >
//                     <option value="credit_card">Credit Card</option>
//                     <option value="paypal">PayPal</option>
//                     <option value="bank_transfer">Bank Transfer</option>
//                   </select>
//                 </div>

//                 {form.paymentMethod === 'credit_card' && (
//                   <>
//                     <div className="mb-4">
//                       <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-2">Card Number:</label>
//                       <input
//                         type="text"
//                         id="cardNumber"
//                         name="cardNumber"
//                         value={form.cardNumber}
//                         onChange={handleChange}
//                         className="w-full p-2 border border-gray-300 rounded-lg"
//                       />
//                       {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
//                     </div>

//                     <div className="mb-4 flex space-x-4">
//                       <div className="w-1/2">
//                         <label htmlFor="expiryMonth" className="block text-gray-700 font-semibold mb-2">Expiry Month:</label>
//                         <input
//                           type="text"
//                           id="expiryMonth"
//                           name="expiryMonth"
//                           value={form.expiryMonth}
//                           onChange={handleChange}
//                           className="w-full p-2 border border-gray-300 rounded-lg"
//                         />
//                         {errors.expiryMonth && <p className="text-red-500 text-sm">{errors.expiryMonth}</p>}
//                       </div>
//                       <div className="w-1/2">
//                         <label htmlFor="expiryYear" className="block text-gray-700 font-semibold mb-2">Expiry Year:</label>
//                         <input
//                           type="text"
//                           id="expiryYear"
//                           name="expiryYear"
//                           value={form.expiryYear}
//                           onChange={handleChange}
//                           className="w-full p-2 border border-gray-300 rounded-lg"
//                         />
//                         {errors.expiryYear && <p className="text-red-500 text-sm">{errors.expiryYear}</p>}
//                       </div>
//                     </div>

//                     <div className="mb-4">
//                       <label htmlFor="cvv" className="block text-gray-700 font-semibold mb-2">CVV:</label>
//                       <input
//                         type="text"
//                         id="cvv"
//                         name="cvv"
//                         value={form.cvv}
//                         onChange={handleChange}
//                         className="w-full p-2 border border-gray-300 rounded-lg"
//                       />
//                       {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
//                     </div>
//                   </>
//                 )}

//                 {form.paymentMethod === 'paypal' && (
//                   <div className="mb-4">
//                     <label htmlFor="paypalEmail" className="block text-gray-700 font-semibold mb-2">PayPal Email:</label>
//                     <input
//                       type="email"
//                       id="paypalEmail"
//                       name="paypalEmail"
//                       value={form.paypalEmail}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-lg"
//                     />
//                     {errors.paypalEmail && <p className="text-red-500 text-sm">{errors.paypalEmail}</p>}
//                   </div>
//                 )}

//                 {form.paymentMethod === 'bank_transfer' && (
//                   <div className="mb-4">
//                     <label htmlFor="bankAccount" className="block text-gray-700 font-semibold mb-2">Bank Account Details:</label>
//                     <input
//                       type="text"
//                       id="bankAccount"
//                       name="bankAccount"
//                       value={form.bankAccount}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-lg"
//                     />
//                     {errors.bankAccount && <p className="text-red-500 text-sm">{errors.bankAccount}</p>}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
//                 >
//                   Pay Now
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PaymentPage;
