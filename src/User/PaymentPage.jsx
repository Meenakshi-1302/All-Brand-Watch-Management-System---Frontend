// // import React, { useEffect, useState } from 'react';
// // import { useSelector } from 'react-redux';
// // import axios from 'axios';
// // import { FaCreditCard, FaGooglePay, FaPaypal } from 'react-icons/fa';
// // import { useForm } from 'react-hook-form';
// // import Swal from 'sweetalert2';

// // const PaymentPage = () => {
// //   const [userDetails, setUserDetails] = useState(null);
// //   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
// //   const { items, cartTotal } = useSelector((state) => state.cart);
// //   const { register, handleSubmit, formState: { errors }, setValue } = useForm();

// //   useEffect(() => {
// //     // Fetch user details from the backend
// //     axios.get('http://localhost:8085/customers/' + sessionStorage.getItem("userid"))
// //       .then(response => {
// //         setUserDetails(response.data);
// //         // Set default values for form fields
// //         setValue('username', response.data.username);
// //         setValue('email', response.data.email);
// //         setValue('address', response.data.address);
// //       })
// //       .catch(error => console.error('Error fetching user details:', error));
// //   }, [setValue]);

// //   const handlePaymentMethodChange = (method) => {
// //     setSelectedPaymentMethod(method);
// //   };

// //   const onSubmit = (data) => {
// //     if (!data.address) {
// //       Swal.fire('Error', 'Address field should not be empty', 'error');
// //       return;
// //     }

// //     // Validate payment details based on selected method
// //     if (selectedPaymentMethod === 'CreditCard') {
// //       if (!data.cardNumber || data.cardNumber.length !== 16 || isNaN(data.cardNumber)) {
// //         Swal.fire('Error', 'Card number must be 16 digits long and numeric', 'error');
// //         return;
// //       }
// //       if (!data.expiryMonth || data.expiryMonth < 1 || data.expiryMonth > 12) {
// //         Swal.fire('Error', 'Expiry month must be between 1 and 12', 'error');
// //         return;
// //       }
// //       if (!data.expiryYear || data.expiryYear <= new Date().getFullYear()) {
// //         Swal.fire('Error', 'Expiry year must be greater than the current year', 'error');
// //         return;
// //       }
// //       if (!data.cvv || data.cvv.length !== 3 || isNaN(data.cvv)) {
// //         Swal.fire('Error', 'CVV must be 3 digits long and numeric', 'error');
// //         return;
// //       }
// //     } else if (selectedPaymentMethod === 'GooglePay' || selectedPaymentMethod === 'PayPal') {
// //       if (!data.upiId || !data.upiId.includes('@')) {
// //         Swal.fire('Error', 'UPI ID must contain "@" symbol', 'error');
// //         return;
// //       }
// //       if (!data.password || data.password.length !== 6 || isNaN(data.password)) {
// //         Swal.fire('Error', 'Password must be exactly 6 digits long and numeric', 'error');
// //         return;
// //       }
// //     }

// //     Swal.fire('Success', 'Payment completed successfully', 'success');
// //     // Handle form submission logic here
// //   };

// //   if (!userDetails) {
// //     return <p>Loading...</p>;
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <main className="p-6">
// //         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
// //           <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment</h1>

// //           {/* User Details Section */}
// //           <section className="mb-6">
// //             <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Details</h2>
// //             <div className="bg-gray-200 p-4 rounded-lg">
// //               <div className="flex justify-between mb-2">
// //                 <label className="font-medium text-gray-700">Username:</label>
// //                 <input
// //                   type="text"
// //                   value={userDetails.username}
// //                   readOnly
// //                   className="bg-gray-100 text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
// //                 />
// //               </div>
// //               <div className="flex justify-between mb-2">
// //                 <label className="font-medium text-gray-700">Email:</label>
// //                 <input
// //                   type="email"
// //                   value={userDetails.email}
// //                   readOnly
// //                   className="bg-gray-100 text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
// //                 />
// //               </div>
// //               <div className="flex justify-between mb-2">
// //                 <label className="font-medium text-gray-700">Address:</label>
// //                 <input
// //                   type="text"
// //                   {...register('address', { required: true })}
// //                   placeholder="Enter your address"
// //                   className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
// //                 />
// //                 {errors.address && <p className="text-red-500 text-sm">Address field should not be empty</p>}
// //               </div>
// //             </div>
// //           </section>

// //           {/* Cart Items Section */}
// //           <section className="mb-6">
// //             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cart Summary</h2>
// //             {items.length === 0 ? (
// //               <p className="text-center text-gray-500">Your cart is empty.</p>
// //             ) : (
// //               <ul className="space-y-4">
// //                 {items.map(item => (
// //                   <li key={item.id} className="flex justify-between items-center border-b py-4">
// //                     <div className="flex items-center space-x-4">
// //                       <img
// //                         src={item.image}
// //                         alt={item.name}
// //                         className="w-20 h-20 object-cover rounded-lg"
// //                       />
// //                       <div>
// //                         <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
// //                         <p className="text-gray-600">{item.description}</p>
// //                         <p className="text-gray-900">${item.price.toFixed(2)}</p>
// //                         <p className="text-gray-700">Quantity: {item.quantity}</p>
// //                       </div>
// //                     </div>
// //                     <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}
// //             <div className="mt-4 text-right">
// //               <h2 className="text-2xl font-semibold text-gray-800">Total: ${cartTotal.toFixed(2)}</h2>
// //             </div>
// //           </section>

// //           {/* Payment Methods Section */}
// //           <section>
// //             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Methods</h2>
// //             <form onSubmit={handleSubmit(onSubmit)}>
// //               <div className="space-y-4">
// //                 <div className="flex items-center space-x-4">
// //                   <input
// //                     type="radio"
// //                     id="creditCard"
// //                     name="paymentMethod"
// //                     value="CreditCard"
// //                     checked={selectedPaymentMethod === 'CreditCard'}
// //                     onChange={() => handlePaymentMethodChange('CreditCard')}
// //                     className="form-radio"
// //                   />
// //                   <label htmlFor="creditCard" className="flex items-center cursor-pointer">
// //                     <FaCreditCard className="text-xl mr-2" />
// //                     Credit/Debit Card
// //                   </label>
// //                 </div>
// //                 <div className="flex items-center space-x-4">
// //                   <input
// //                     type="radio"
// //                     id="googlePay"
// //                     name="paymentMethod"
// //                     value="GooglePay"
// //                     checked={selectedPaymentMethod === 'GooglePay'}
// //                     onChange={() => handlePaymentMethodChange('GooglePay')}
// //                     className="form-radio"
// //                   />
// //                   <label htmlFor="googlePay" className="flex items-center cursor-pointer">
// //                     <FaGooglePay className="text-xl mr-2" />
// //                     Google Pay
// //                   </label>
// //                 </div>
// //                 <div className="flex items-center space-x-4">
// //                   <input
// //                     type="radio"
// //                     id="paypal"
// //                     name="paymentMethod"
// //                     value="PayPal"
// //                     checked={selectedPaymentMethod === 'PayPal'}
// //                     onChange={() => handlePaymentMethodChange('PayPal')}
// //                     className="form-radio"
// //                   />
// //                   <label htmlFor="paypal" className="flex items-center cursor-pointer">
// //                     <FaPaypal className="text-xl mr-2" />
// //                     PayPal
// //                   </label>
// //                 </div>
// //               </div>

// //               {/* Payment Method Fields */}
// //               {selectedPaymentMethod === 'CreditCard' && (
// //                 <div className="space-y-4 mt-4">
// //                   <div>
// //                     <label className="block font-medium text-gray-700">Card Number:</label>
// //                     <input
// //                       type="text"
// //                       {...register('cardNumber', { required: true, minLength: 16, maxLength: 16, pattern: /^[0-9]*$/ })}
// //                       placeholder="Enter your card number"
// //                       className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
// //                     />
// //                     {errors.cardNumber && <p className="text-red-500 text-sm">Card number must be 16 digits long</p>}
// //                   </div>
// //                   <div className="flex space-x-4">
// //                     <div className="flex-1">
// //                       <label className="block font-medium text-gray-700">Expiry Month:</label>
// //                       <input
// //                         type="number"
// //                         {...register('expiryMonth', { required: true, min: 1, max: 12 })}
// //                         placeholder="MM"
// //                         className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
// //                       />
// //                       {errors.expiryMonth && <p className="text-red-500 text-sm">Expiry month must be between 1 and 12</p>}
// //                     </div>
// //                     <div className="flex-1">
// //                       <label className="block font-medium text-gray-700">Expiry Year:</label>
// //                       <input
// //                         type="number"
// //                         {...register('expiryYear', { required: true, min: new Date().getFullYear() + 1 })}
// //                         placeholder="YYYY"
// //                         className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
// //                       />
// //                       {errors.expiryYear && <p className="text-red-500 text-sm">Expiry year must be greater than the current year</p>}
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block font-medium text-gray-700">CVV:</label>
// //                     <input
// //                       type="password"
// //                       {...register('cvv', { required: true, minLength: 3, maxLength: 3, pattern: /^[0-9]*$/ })}
// //                       placeholder="CVV"
// //                       className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
// //                     />
// //                     {errors.cvv && <p className="text-red-500 text-sm">CVV must be 3 digits long</p>}
// //                   </div>
// //                 </div>
// //               )}

// //               {(selectedPaymentMethod === 'GooglePay' || selectedPaymentMethod === 'PayPal') && (
// //                 <div className="space-y-4 mt-4">
// //                   <div>
// //                     <label className="block font-medium text-gray-700">UPI ID:</label>
// //                     <input
// //                       type="text"
// //                       {...register('upiId', { required: true, pattern: /@/ })}
// //                       placeholder="Enter your UPI ID"
// //                       className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
// //                     />
// //                     {errors.upiId && <p className="text-red-500 text-sm">UPI ID must contain "@" symbol</p>}
// //                   </div>
// //                   <div>
// //                     <label className="block font-medium text-gray-700">Password:</label>
// //                     <input
// //                       type="password"
// //                       {...register('password', { required: true, minLength: 6, maxLength: 6, pattern: /^[0-9]*$/ })}
// //                       placeholder="Enter your password"
// //                       className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
// //                     />
// //                     {errors.password && <p className="text-red-500 text-sm">Password must be exactly 6 digits long</p>}
// //                   </div>
// //                 </div>
// //               )}

// //               <button
// //                 type="submit"
// //                 className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
// //               >
// //                 Complete Payment
// //               </button>
// //             </form>
// //           </section>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default PaymentPage;

// //================================================================================================================================
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// import { FaCreditCard, FaGooglePay, FaPaypal } from 'react-icons/fa';
// import { useForm } from 'react-hook-form';
// import Swal from 'sweetalert2';
// import { savePaymentDetails } from '../paymentSlice'; // Import your action

// const PaymentPage = () => {
//   const dispatch = useDispatch();
//   const [userDetails, setUserDetails] = useState(null);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
//   const { items, cartTotal } = useSelector((state) => state.cart);
//   const { register, handleSubmit, formState: { errors }, setValue } = useForm();

//   useEffect(() => {
//     // Fetch user details from the backend
//     axios.get('http://localhost:8085/customers/' + sessionStorage.getItem("userid"))
//       .then(response => {
//         setUserDetails(response.data);
//         // Set default values for form fields
//         setValue('username', response.data.username);
//         setValue('email', response.data.email);
//         setValue('address', response.data.address);
//       })
//       .catch(error => console.error('Error fetching user details:', error));
//   }, [setValue]);

//   const handlePaymentMethodChange = (method) => {
//     setSelectedPaymentMethod(method);
//   };

//   const onSubmit = (data) => {
//     if (!data.address) {
//       Swal.fire('Error', 'Address field should not be empty', 'error');
//       return;
//     }

//     // Validate payment details based on selected method
//     if (selectedPaymentMethod === 'CreditCard') {
//       if (!data.cardNumber || data.cardNumber.length !== 16 || isNaN(data.cardNumber)) {
//         Swal.fire('Error', 'Card number must be 16 digits long and numeric', 'error');
//         return;
//       }
//       if (!data.expiryMonth || data.expiryMonth < 1 || data.expiryMonth > 12) {
//         Swal.fire('Error', 'Expiry month must be between 1 and 12', 'error');
//         return;
//       }
//       if (!data.expiryYear || data.expiryYear <= new Date().getFullYear()) {
//         Swal.fire('Error', 'Expiry year must be greater than the current year', 'error');
//         return;
//       }
//       if (!data.cvv || data.cvv.length !== 3 || isNaN(data.cvv)) {
//         Swal.fire('Error', 'CVV must be 3 digits long and numeric', 'error');
//         return;
//       }
//     } else if (selectedPaymentMethod === 'GooglePay' || selectedPaymentMethod === 'PayPal') {
//       if (!data.upiId || !data.upiId.includes('@')) {
//         Swal.fire('Error', 'UPI ID must contain "@" symbol', 'error');
//         return;
//       }
//       if (!data.password || data.password.length !== 6 || isNaN(data.password)) {
//         Swal.fire('Error', 'Password must be exactly 6 digits long and numeric', 'error');
//         return;
//       }
//     }

//     Swal.fire('Success', 'Payment completed successfully', 'success').then(() => {
//       // Dispatch action to save payment details
//       dispatch(savePaymentDetails({
//         method: selectedPaymentMethod,
//         ...data,
//         amount: cartTotal,
//       }));
//     });
//   };

//   if (!userDetails) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <main className="p-6">
//         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment</h1>

//           {/* User Details Section */}
//           <section className="mb-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Details</h2>
//             <div className="bg-gray-200 p-4 rounded-lg">
//               <div className="flex justify-between mb-2">
//                 <label className="font-medium text-gray-700">Username:</label>
//                 <input
//                   type="text"
//                   value={userDetails.username}
//                   readOnly
//                   className="bg-gray-100 text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                 />
//               </div>
//               <div className="flex justify-between mb-2">
//                 <label className="font-medium text-gray-700">Email:</label>
//                 <input
//                   type="email"
//                   value={userDetails.email}
//                   readOnly
//                   className="bg-gray-100 text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                 />
//               </div>
//               <div className="flex justify-between mb-2">
//                 <label className="font-medium text-gray-700">Address:</label>
//                 <input
//                   type="text"
//                   {...register('address', { required: true })}
//                   placeholder="Enter your address"
//                   className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                 />
//                 {errors.address && <p className="text-red-500 text-sm">Address field should not be empty</p>}
//               </div>
//             </div>
//           </section>

//           {/* Cart Items Section */}
//           <section className="mb-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cart Summary</h2>
//             {items.length === 0 ? (
//               <p className="text-center text-gray-500">Your cart is empty.</p>
//             ) : (
//               <ul className="space-y-4">
//                 {items.map(item => (
//                   <li key={item.id} className="flex justify-between items-center border-b py-4">
//                     <div className="flex items-center space-x-4">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-20 h-20 object-cover rounded-lg"
//                       />
//                       <div>
//                         <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
//                         <p className="text-gray-600">{item.description}</p>
//                         <p className="text-gray-900">${item.price.toFixed(2)}</p>
//                         <p className="text-gray-700">Quantity: {item.quantity}</p>
//                       </div>
//                     </div>
//                     <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
//                   </li>
//                 ))}
//               </ul>
//             )}
//             <div className="mt-4 text-right">
//               <h2 className="text-2xl font-semibold text-gray-800">Total: ${cartTotal.toFixed(2)}</h2>
//             </div>
//           </section>

//           {/* Payment Methods Section */}
//           <section>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Methods</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-4">
//                   <input
//                     type="radio"
//                     id="creditCard"
//                     name="paymentMethod"
//                     value="CreditCard"
//                     checked={selectedPaymentMethod === 'CreditCard'}
//                     onChange={() => handlePaymentMethodChange('CreditCard')}
//                     className="form-radio"
//                   />
//                   <label htmlFor="creditCard" className="flex items-center cursor-pointer">
//                     <FaCreditCard className="text-xl mr-2" />
//                     Credit/Debit Card
//                   </label>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <input
//                     type="radio"
//                     id="googlePay"
//                     name="paymentMethod"
//                     value="GooglePay"
//                     checked={selectedPaymentMethod === 'GooglePay'}
//                     onChange={() => handlePaymentMethodChange('GooglePay')}
//                     className="form-radio"
//                   />
//                   <label htmlFor="googlePay" className="flex items-center cursor-pointer">
//                     <FaGooglePay className="text-xl mr-2" />
//                     Google Pay
//                   </label>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <input
//                     type="radio"
//                     id="paypal"
//                     name="paymentMethod"
//                     value="PayPal"
//                     checked={selectedPaymentMethod === 'PayPal'}
//                     onChange={() => handlePaymentMethodChange('PayPal')}
//                     className="form-radio"
//                   />
//                   <label htmlFor="paypal" className="flex items-center cursor-pointer">
//                     <FaPaypal className="text-xl mr-2" />
//                     PayPal
//                   </label>
//                 </div>
//               </div>

//               {/* Payment Method Fields */}
//               {selectedPaymentMethod === 'CreditCard' && (
//                 <div className="space-y-4 mt-4">
//                   <div>
//                     <label className="block font-medium text-gray-700">Card Number:</label>
//                     <input
//                       type="text"
//                       {...register('cardNumber', { required: true, minLength: 16, maxLength: 16, pattern: /^[0-9]*$/ })}
//                       placeholder="Enter your card number"
//                       className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                     />
//                     {errors.cardNumber && <p className="text-red-500 text-sm">Card number must be 16 digits long</p>}
//                   </div>
//                   <div className="flex space-x-4">
//                     <div className="flex-1">
//                       <label className="block font-medium text-gray-700">Expiry Month:</label>
//                       <input
//                         type="number"
//                         {...register('expiryMonth', { required: true, min: 1, max: 12 })}
//                         placeholder="MM"
//                         className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                       />
//                       {errors.expiryMonth && <p className="text-red-500 text-sm">Expiry month must be between 1 and 12</p>}
//                     </div>
//                     <div className="flex-1">
//                       <label className="block font-medium text-gray-700">Expiry Year:</label>
//                       <input
//                         type="number"
//                         {...register('expiryYear', { required: true, min: new Date().getFullYear() + 1 })}
//                         placeholder="YYYY"
//                         className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                       />
//                       {errors.expiryYear && <p className="text-red-500 text-sm">Expiry year must be greater than the current year</p>}
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block font-medium text-gray-700">CVV:</label>
//                     <input
//                       type="password"
//                       {...register('cvv', { required: true, minLength: 3, maxLength: 3, pattern: /^[0-9]*$/ })}
//                       placeholder="CVV"
//                       className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                     />
//                     {errors.cvv && <p className="text-red-500 text-sm">CVV must be 3 digits long</p>}
//                   </div>
//                 </div>
//               )}

//               {(selectedPaymentMethod === 'GooglePay' || selectedPaymentMethod === 'PayPal') && (
//                 <div className="space-y-4 mt-4">
//                   <div>
//                     <label className="block font-medium text-gray-700">UPI ID:</label>
//                     <input
//                       type="text"
//                       {...register('upiId', { required: true, pattern: /@/ })}
//                       placeholder="Enter your UPI ID"
//                       className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                     />
//                     {errors.upiId && <p className="text-red-500 text-sm">UPI ID must contain "@" symbol</p>}
//                   </div>
//                   <div>
//                     <label className="block font-medium text-gray-700">Password:</label>
//                     <input
//                       type="password"
//                       {...register('password', { required: true, minLength: 6, maxLength: 6, pattern: /^[0-9]*$/ })}
//                       placeholder="Enter your password"
//                       className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                     />
//                     {errors.password && <p className="text-red-500 text-sm">Password must be exactly 6 digits long</p>}
//                   </div>
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
//               >
//                 Complete Payment
//               </button>
//             </form>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PaymentPage;
//=====================================================================================================

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// import { FaCreditCard, FaGooglePay, FaPaypal } from 'react-icons/fa';
// import { useForm } from 'react-hook-form';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { savePaymentDetails } from '../paymentSlice'; // Import your action
// import { addPurchaseDetails } from '../purchaseSlice';
// const PaymentPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [userDetails, setUserDetails] = useState(null);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
//   const { items, cartTotal } = useSelector((state) => state.cart);
//   const { register, handleSubmit, formState: { errors }, setValue } = useForm();

//   useEffect(() => {
//     axios.get('http://localhost:8085/customers/' + sessionStorage.getItem("userid"))
//       .then(response => {
//         setUserDetails(response.data);
//         setValue('username', response.data.username);
//         setValue('email', response.data.email);
//         setValue('address', response.data.address);
//       })
//       .catch(error => console.error('Error fetching user details:', error));
//   }, [setValue]);

//   const handlePaymentMethodChange = (method) => {
//     setSelectedPaymentMethod(method);
//   };

//   const onSubmit = (data) => {
//     if (!data.address) {
//       Swal.fire('Error', 'Address field should not be empty', 'error');
//       return;
//     }

//     if (selectedPaymentMethod === 'CreditCard') {
//       if (!data.cardNumber || data.cardNumber.length !== 16 || isNaN(data.cardNumber)) {
//         Swal.fire('Error', 'Card number must be 16 digits long and numeric', 'error');
//         return;
//       }
//       if (!data.expiryMonth || data.expiryMonth < 1 || data.expiryMonth > 12) {
//         Swal.fire('Error', 'Expiry month must be between 1 and 12', 'error');
//         return;
//       }
//       if (!data.expiryYear || data.expiryYear <= new Date().getFullYear()) {
//         Swal.fire('Error', 'Expiry year must be greater than the current year', 'error');
//         return;
//       }
//       if (!data.cvv || data.cvv.length !== 3 || isNaN(data.cvv)) {
//         Swal.fire('Error', 'CVV must be 3 digits long and numeric', 'error');
//         return;
//       }
//     } else if (selectedPaymentMethod === 'GooglePay' || selectedPaymentMethod === 'PayPal') {
//       if (!data.upiId || !data.upiId.includes('@')) {
//         Swal.fire('Error', 'UPI ID must contain "@" symbol', 'error');
//         return;
//       }
//       if (!data.password || data.password.length !== 6 || isNaN(data.password)) {
//         Swal.fire('Error', 'Password must be exactly 6 digits long and numeric', 'error');
//         return;
//       }
//     }

//     // Save payment details and redirect
//     Swal.fire('Success', 'Payment completed successfully', 'success').then(() => {
//       const paymentDetails = {
//         items,
//         totalAmount: cartTotal,
//         timeOfPurchase: new Date().toISOString(),
//       };
//       dispatch(addPurchaseDetails({
//         method: selectedPaymentMethod,
//         ...data,
//         items, // Include cart items
//         totalAmount: cartTotal, // Total amount of the purchase
//         timeOfPurchase: new Date().toISOString(), // Timestamp of purchase

        
//       }));
//       navigate('/purchase-summary', { state: { paymentDetails } });
//       // sessionStorage.removeItem("cartItems");

//     });
//   };

//   if (!userDetails) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <main className="p-6">
//         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment</h1>

//           {/* User Details Section */}
//           <section className="mb-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Details</h2>
//             <div className="bg-gray-200 p-4 rounded-lg">
//               <div className="flex justify-between mb-2">
//                 <label className="font-medium text-gray-700">Username:</label>
//                 <input
//                   type="text"
//                   value={userDetails.username}
//                   readOnly
//                   className="bg-gray-100 text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                 />
//               </div>
//               <div className="flex justify-between mb-2">
//                 <label className="font-medium text-gray-700">Email:</label>
//                 <input
//                   type="email"
//                   value={userDetails.email}
//                   readOnly
//                   className="bg-gray-100 text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                 />
//               </div>
//               <div className="flex justify-between mb-2">
//                 <label className="font-medium text-gray-700">Address:</label>
//                 <input
//                   type="text"
//                   {...register('address', { required: true })}
//                   placeholder="Enter your address"
//                   className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                 />
//                 {errors.address && <p className="text-red-500 text-sm">Address field should not be empty</p>}
//               </div>
//             </div>
//           </section>

//           {/* Cart Items Section */}
//           <section className="mb-6">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cart Summary</h2>
//             {items.length === 0 ? (
//               <p className="text-center text-gray-500">Your cart is empty.</p>
//             ) : (
//               <ul className="space-y-4">
//                 {items.map(item => (
//                   <li key={item.id} className="flex justify-between items-center border-b py-4">
//                     <div className="flex items-center space-x-4">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-20 h-20 object-cover rounded-lg"
//                       />
//                       <div>
//                         <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
//                         <p className="text-gray-600">{item.description}</p>
//                         <p className="text-gray-900">${item.price.toFixed(2)}</p>
//                         <p className="text-gray-700">Quantity: {item.quantity}</p>
//                       </div>
//                     </div>
//                     <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
//                   </li>
//                 ))}
//               </ul>
//             )}
//             <div className="mt-4 text-right">
//               <h2 className="text-2xl font-semibold text-gray-800">Total: ${cartTotal.toFixed(2)}</h2>
//             </div>
//           </section>

//           {/* Payment Methods Section */}
//           <section>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Methods</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-4">
//                   <input
//                     type="radio"
//                     id="creditCard"
//                     name="paymentMethod"
//                     value="CreditCard"
//                     checked={selectedPaymentMethod === 'CreditCard'}
//                     onChange={() => handlePaymentMethodChange('CreditCard')}
//                     className="form-radio"
//                   />
//                   <label htmlFor="creditCard" className="flex items-center cursor-pointer">
//                     <FaCreditCard className="text-xl mr-2" />
//                     Credit/Debit Card
//                   </label>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <input
//                     type="radio"
//                     id="googlePay"
//                     name="paymentMethod"
//                     value="GooglePay"
//                     checked={selectedPaymentMethod === 'GooglePay'}
//                     onChange={() => handlePaymentMethodChange('GooglePay')}
//                     className="form-radio"
//                   />
//                   <label htmlFor="googlePay" className="flex items-center cursor-pointer">
//                     <FaGooglePay className="text-xl mr-2" />
//                     Google Pay
//                   </label>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <input
//                     type="radio"
//                     id="paypal"
//                     name="paymentMethod"
//                     value="PayPal"
//                     checked={selectedPaymentMethod === 'PayPal'}
//                     onChange={() => handlePaymentMethodChange('PayPal')}
//                     className="form-radio"
//                   />
//                   <label htmlFor="paypal" className="flex items-center cursor-pointer">
//                     <FaPaypal className="text-xl mr-2" />
//                     PayPal
//                   </label>
//                 </div>
//               </div>

//               {selectedPaymentMethod === 'CreditCard' && (
//                 <div className="space-y-4 mt-4">
//                   <div>
//                     <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
//                     <input
//                       type="text"
//                       {...register('cardNumber', { required: true })}
//                       placeholder="Enter card number"
//                       className="w-full bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                     />
//                     {errors.cardNumber && <p className="text-red-500 text-sm">Card number is required and must be 16 digits long</p>}
//                   </div>
//                   <div>
//                     <label htmlFor="expiryMonth" className="block text-gray-700">Expiry Month</label>
//                     <input
//                       type="number"
//                       {...register('expiryMonth', { required: true })}
//                       placeholder="MM"
//                       className="w-full bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                     />
//                     {errors.expiryMonth && <p className="text-red-500 text-sm">Expiry month is required and must be between 1 and 12</p>}
//                   </div>
//                   <div>
//                     <label htmlFor="expiryYear" className="block text-gray-700">Expiry Year</label>
//                     <input
//                       type="number"
//                       {...register('expiryYear', { required: true })}
//                       placeholder="YYYY"
//                       className="w-full bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                     />
//                     {errors.expiryYear && <p className="text-red-500 text-sm">Expiry year is required and must be greater than current year</p>}
//                   </div>
//                   <div>
//                     <label htmlFor="cvv" className="block text-gray-700">CVV</label>
//                     <input
//                       type="text"
//                       {...register('cvv', { required: true })}
//                       placeholder="Enter CVV"
//                       className="w-full bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                     />
//                     {errors.cvv && <p className="text-red-500 text-sm">CVV is required and must be 3 digits long</p>}
//                   </div>
//                 </div>
//               )}

//               {selectedPaymentMethod === 'GooglePay' || selectedPaymentMethod === 'PayPal' && (
//                 <div className="space-y-4 mt-4">
//                   <div>
//                     <label htmlFor="upiId" className="block text-gray-700">UPI ID</label>
//                     <input
//                       type="text"
//                       {...register('upiId', { required: true })}
//                       placeholder="Enter UPI ID"
//                       className="w-full bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                     />
//                     {errors.upiId && <p className="text-red-500 text-sm">UPI ID is required and must contain "@" symbol</p>}
//                   </div>
//                   <div>
//                     <label htmlFor="password" className="block text-gray-700">Password</label>
//                     <input
//                       type="password"
//                       {...register('password', { required: true })}
//                       placeholder="Enter password"
//                       className="w-full bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
//                     />
//                     {errors.password && <p className="text-red-500 text-sm">Password is required and must be exactly 6 digits long</p>}
//                   </div>
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//               >
//                 Submit Payment
//               </button>
//             </form>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PaymentPage;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { FaCreditCard, FaGooglePay, FaPaypal } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { savePaymentDetails } from '../paymentSlice'; // Adjust the import path as needed
import { addPurchaseDetails } from '../purchaseSlice';
import { clearCart } from '../cartSlice'; // Import clearCart action

const PaymentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const { items, cartTotal } = useSelector((state) => state.cart);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  useEffect(() => {
    axios.get('http://localhost:8085/customers/' + sessionStorage.getItem("userid"))
      .then(response => {
        setUserDetails(response.data);
        setValue('username', response.data.username);
        setValue('email', response.data.email);
        setValue('address', response.data.address);
      })
      .catch(error => console.error('Error fetching user details:', error));
  }, [setValue]);

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const onSubmit = async (data) => {
    if (!data.address) {
      Swal.fire('Error', 'Address field should not be empty', 'error');
      return;
    }

    if (selectedPaymentMethod === 'CreditCard') {
      if (!data.cardNumber || data.cardNumber.length !== 16 || isNaN(data.cardNumber)) {
        Swal.fire('Error', 'Card number must be 16 digits long and numeric', 'error');
        return;
      }
      if (!data.expiryMonth || data.expiryMonth < 1 || data.expiryMonth > 12) {
        Swal.fire('Error', 'Expiry month must be between 1 and 12', 'error');
        return;
      }
      if (!data.expiryYear || data.expiryYear <= new Date().getFullYear()) {
        Swal.fire('Error', 'Expiry year must be greater than the current year', 'error');
        return;
      }
      if (!data.cvv || data.cvv.length !== 3 || isNaN(data.cvv)) {
        Swal.fire('Error', 'CVV must be 3 digits long and numeric', 'error');
        return;
      }
    } else if (selectedPaymentMethod === 'GooglePay' || selectedPaymentMethod === 'PayPal') {
      if (!data.upiId || !data.upiId.includes('@')) {
        Swal.fire('Error', 'UPI ID must contain "@" symbol', 'error');
        return;
      }
      if (!data.password || data.password.length !== 6 || isNaN(data.password)) {
        Swal.fire('Error', 'Password must be exactly 6 digits long and numeric', 'error');
        return;
      }
    }

    // Save payment details and clear the cart
    Swal.fire('Success', 'Payment completed successfully', 'success').then(() => {
      const paymentDetails = {
        items,
        totalAmount: cartTotal,
        timeOfPurchase: new Date().toISOString(),
      };

      dispatch(addPurchaseDetails({
        method: selectedPaymentMethod,
        ...data,
        items, // Include cart items
        totalAmount: cartTotal, // Total amount of the purchase
        timeOfPurchase: new Date().toISOString(), // Timestamp of purchase
      }));

      // Clear the cart
      dispatch(clearCart());

      // Redirect to purchase summary page
      navigate('/purchase-summary', { state: { paymentDetails } });

      // Optionally, you can also clear sessionStorage if needed
      // sessionStorage.removeItem('cartItems');
    });
  };

  if (!userDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment</h1>

          {/* User Details Section */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Details</h2>
            <div className="bg-gray-200 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <label className="font-medium text-gray-700">Username:</label>
                <input
                  type="text"
                  value={userDetails.username}
                  readOnly
                  className="bg-gray-100 text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div className="flex justify-between mb-2">
                <label className="font-medium text-gray-700">Email:</label>
                <input
                  type="email"
                  value={userDetails.email}
                  readOnly
                  className="bg-gray-100 text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div className="flex justify-between mb-2">
                <label className="font-medium text-gray-700">Address:</label>
                <input
                  type="text"
                  {...register('address', { required: true })}
                  placeholder="Enter your address"
                  className="bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
                />
                {errors.address && <p className="text-red-500 text-sm">Address field should not be empty</p>}
              </div>
            </div>
          </section>

          {/* Cart Items Section */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cart Summary</h2>
            {items.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {items.map(item => (
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
            )}
            <div className="mt-4 text-right">
              <h2 className="text-2xl font-semibold text-gray-800">Total: ${cartTotal.toFixed(2)}</h2>
            </div>
          </section>

          {/* Payment Methods Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Methods</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    value="CreditCard"
                    checked={selectedPaymentMethod === 'CreditCard'}
                    onChange={() => handlePaymentMethodChange('CreditCard')}
                    className="form-radio"
                  />
                  <label htmlFor="creditCard" className="flex items-center cursor-pointer">
                    <FaCreditCard className="text-xl mr-2" />
                    Credit/Debit Card
                  </label>
                </div>
                <div className="flex items-center space-x-4">
                  {/* <input 
                    type="radio"
                    id="googlePay"
                    name="paymentMethod"
                    value="GooglePay"
                    checked={selectedPaymentMethod === 'GooglePay'}
                    onChange={() => handlePaymentMethodChange('GooglePay')}
                    className="form-radio"

                    // checked={selectedPaymentMethod === 'GooglePay'}
                    // onChange={() => handlePaymentMethodChange('GooglePay')}
                    // className="form-radio"
                  /> */}
                  {/* <label htmlFor="googlePay" className="flex items-center cursor-pointer">
                    <FaGooglePay className="text-xl mr-2" />
                    Google Pay
                  </label> */}
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="PayPal"
                    checked={selectedPaymentMethod === 'PayPal'}
                    onChange={() => handlePaymentMethodChange('PayPal')}
                    className="form-radio"
                  />
                  <label htmlFor="paypal" className="flex items-center cursor-pointer">
                    <FaPaypal className="text-xl mr-2" />
                    PayPal
                  </label>
                </div>
              </div>

              {selectedPaymentMethod === 'CreditCard' && (
                <div className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
                    <input
                      type="text"
                      {...register('cardNumber', { required: true })}
                      placeholder="Enter card number"
                      className="w-full bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
                    />
                    {errors.cardNumber && <p className="text-red-500 text-sm">Card number is required and must be 16 digits long</p>}
                  </div>
                  <div>
                    <label htmlFor="expiryMonth" className="block text-gray-700">Expiry Month</label>
                    <input
                      type="number"
                      {...register('expiryMonth', { required: true })}
                      placeholder="MM"
                      className="w-full bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
                    />
                    {errors.expiryMonth && <p className="text-red-500 text-sm">Expiry month is required and must be between 1 and 12</p>}
                  </div>
                  <div>
                    <label htmlFor="expiryYear" className="block text-gray-700">Expiry Year</label>
                    <input
                      type="number"
                      {...register('expiryYear', { required: true })}
                      placeholder="YYYY"
                      className="w-full bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
                    />
                    {errors.expiryYear && <p className="text-red-500 text-sm">Expiry year is required and must be greater than current year</p>}
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-gray-700">CVV</label>
                    <input
                      type="password"
                      {...register('cvv', { required: true })}
                      placeholder="Enter CVV"
                      className="w-full bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
                    />
                    {errors.cvv && <p className="text-red-500 text-sm">CVV is required and must be 3 digits long</p>}
                  </div>
                </div>
              )}

              {selectedPaymentMethod === 'GooglePay' || selectedPaymentMethod === 'PayPal' && (
                <div className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="upiId" className="block text-gray-700">UPI ID</label>
                    <input
                      type="text"
                      {...register('upiId', { required: true })}
                      placeholder="Enter UPI ID"
                      className="w-full bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
                    />
                    {errors.upiId && <p className="text-red-500 text-sm">UPI ID is required and must contain "@" symbol</p>}
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                      type="password"
                      {...register('password', { required: true })}
                      placeholder="Enter password"
                      className="w-full bg-white text-gray-600 border border-gray-300 rounded-lg px-3 py-2"
                    />
                    {errors.password && <p className="text-red-500 text-sm">Password is required and must be exactly 6 digits long</p>}
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Submit Payment
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;



