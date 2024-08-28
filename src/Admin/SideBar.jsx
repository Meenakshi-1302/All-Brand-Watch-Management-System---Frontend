import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-800 text-white min-h-screen">
      <div className="p-4 text-2xl font-bold">Admin Dashboard</div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin-dashboard">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/customers-view">Users</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/inventory-view">Inventory</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/product-view">Watches</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/supplier-view">Suppliers</Link>
          </li>
          {/* <li className="p-4 hover:bg-gray-700">
            <Link to="/payment-view">Payments</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
