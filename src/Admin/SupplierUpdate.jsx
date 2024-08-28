import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

    

function SupplierUpdate() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
      axios
        .get("http://localhost:8085/supplier/" + id)
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
    }, [id]);
  
    let handleSubmit = (e) => {
      e.preventDefault();
      axios.put("http://localhost:8085/supplier", data).then((res) => {
        alert("Supplier Updated Successfully");
        navigate("/");
      });
    };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold mb-6 text-center">Update Supplier Data</h1>

          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 font-medium mb-2">ID:</label>
            <input
              type="text"
              disabled
              name="supplierId"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.supplierId || ''}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.name || ''}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-medium mb-2">ContatctInfo :</label>
            <input
              type="text"
              name="contactInfo"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.contactInfo || ''}
              onChange={(e) => setData({ ...data, contactInfo: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="modelName" className="block text-gray-700 font-medium mb-2">Address :</label>
            <input
              type="text"
              name="modelName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.address || ''}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </div>
          
          {/* <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description:</label>
            <input
              type="text"
              name="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.description || ''}
              onChange={(e) => setData({ ...data, description: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">Quantity:</label>
            <input
              type="text"
              name="quantity"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.quantity || ''}
              onChange={(e) => setData({ ...data, quantity: e.target.value })}
            />
          </div> */}

          <div className="flex justify-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SupplierUpdate;
