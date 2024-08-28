
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const InventoryForm = () => {
  const [productRecords, setProductRecords] = useState([]);
  const [supplierRecords, setSupplierRecords] = useState([]);
  const [inputData, setInputData] = useState({
    product: {
      productId: "",
      name: "",
      price: "",
      modelName: "",
      description: "",
      quantity: "",
      image: " "  // Ensure to include the image URL
    },
    supplier: {
      supplierId: "",
      name: "",
      contactInfo: "",
      address: ""
    },
    quantityReceived: "",
    receivedAt: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductRecords = async () => {
      try {
        const response = await axios.get("http://localhost:8085/product/all");
        setProductRecords(response.data);
      } catch (err) {
        console.error("Error fetching product records:", err);
      }
    };
    fetchProductRecords();
  }, []);

  useEffect(() => {
    const fetchSupplierRecords = async () => {
      try {
        const response = await axios.get("http://localhost:8085/supplier/all");
        setSupplierRecords(response.data);
      } catch (err) {
        console.error("Error fetching supplier records:", err);
      }
    };
    fetchSupplierRecords();
  }, []);

  const handleSelectChangeProduct = async (e) => {
    const productId = e.target.value;
    console.log(`Selected product ID: ${productId}`);
    try {
      const response = await axios.get(`http://localhost:8085/product/${productId}`);
      console.log('product data fetched:', response.data);
      setInputData(prevState => ({
        ...prevState,
        product: {
          ...prevState.product,
          ...response.data,
          productId: productId
        }
      }));
    } catch (err) {
      console.error("Error fetching product data:", err);
    }
  };

  const handleSelectChangeSupplier = async (e) => {
    const supplierId = e.target.value;
    console.log(`Selected supplier ID: ${supplierId}`);
    try {
      const response = await axios.get(`http://localhost:8085/supplier/${supplierId}`);
      console.log('Supplier data fetched:', response.data);
      setInputData(prevState => ({
        ...prevState,
        supplier: {
          ...prevState.supplier,
          ...response.data,
          supplierId: supplierId
        }
      }));
    } catch (err) {
      console.error("Error fetching supplier data:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateValues(inputData)) {
      try {
        const response = await axios.post("http://localhost:8085/inventory", inputData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        alert("Data added successfully");
        console.log(response.data);
        navigate("/admin-dashboard");
      } catch (err) {
        console.error("Error adding inventory data:", err);
        alert("Failed to add inventory data. Please try again.");
      }
    } else {
      alert("Please enter valid inputs!");
    }
  };

  const validateValues = (inputData) => {
    if (!inputData.quantityReceived.trim()) {
      alert("Please enter quantity received!");
      return false;
    }
    if (!inputData.receivedAt.trim()) {
      alert("Please enter received date and time!");
      return false;
    }
    return true;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">Add Inventory Data</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Watch ID:</label>
            <select
              name="selectedProductId"
              value={inputData.product.productId}
              onChange={handleSelectChangeProduct}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select product</option>
              {productRecords.map((d, i) => (
                <option key={i} value={d.productId}>{d.productId}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Supplier ID:</label>
            <select
              name="selectedSupplierId"
              value={inputData.supplier.supplierId}
              onChange={handleSelectChangeSupplier}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select supplier</option>
              {supplierRecords.map((d, i) => (
                <option key={i} value={d.supplierId}>{d.supplierId}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="quantityReceived" className="block text-gray-700 font-medium mb-1">Quantity Received:</label>
            <input
              type="text"
              name="quantityReceived"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={inputData.quantityReceived}
              onChange={(e) =>
                setInputData({ ...inputData, quantityReceived: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="receivedAt" className="block text-gray-700 font-medium mb-1">Received At:</label>
            <input
              type="text"
              name="receivedAt"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={inputData.receivedAt}
              onChange={(e) =>
                setInputData({ ...inputData, receivedAt: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default InventoryForm;

