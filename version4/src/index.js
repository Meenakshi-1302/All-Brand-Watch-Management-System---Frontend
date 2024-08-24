// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import AppRouter from './Approuter';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';
// import { store } from './store';
// //import { CartProvider } from 'react-use-cart';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      <Provider store={store}>
//     <AppRouter />
//     </Provider>
//     </React.StrictMode>
    
    
   
    
   
 


// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './Approuter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from 'react-use-cart'; // Import CartProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <AppRouter />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();