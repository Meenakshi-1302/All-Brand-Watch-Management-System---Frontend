import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateSupplierForm = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
      axios
        .get("http://localhost:8089/supplier/" + id)
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
    }, []);
  
    let handleSubmit = (e) => {
      e.preventDefault();
      axios.put("http://localhost:8089/supplier", data).then((res) => {
        alert("Supplier data Updated Successfully");
        navigate("/admin-dashboard");
      });
    };
  
    return (
      <div>
        <div
          id="edit2"
          className="d-flex w-100 vh-100 justify-content-center align-items-center "
        >
          <div className="w-50 border bg-light p-5">
            <form onSubmit={handleSubmit}>
              <h1>UPDATE Supplier DATA'S</h1>
              <div>
                <lable htmlFor="id">ID :</lable>
                <input
                  type="text"
                  disabled
                  name="supplierId"
                  className="form-control"
                  value={data.supplier_Id}
                />
              </div>
  
              <div>
                <lable htmlFor="name">Supplier Name :</lable>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
  
              <div>
                <lable htmlFor="contactInfo">Contact Information :</lable>
                <input
                  type="text"
                  name="contactInfo"
                  className="form-control"
                  value={data.contactInfo}
                  onChange={(e) => setData({ ...data, contactInfo: e.target.value })}
                />
              </div>
  
              <div>
                <lable htmlFor="address">Address :</lable>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={data.address}
                  onChange={(e) => setData({ ...data, address: e.target.value })}
                />
              </div>  
              <br />
  
              <button className="btn btn-info ">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateSupplierForm;
