import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateWatchForm = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get("http://localhost:8089/watch/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8089/watch", data).then((res) => {
      alert("watch data Updated Successfully");
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
            <h1>UPDATE Watch DATA'S</h1>
            <div>
              <lable htmlFor="id">ID :</lable>
              <input
                type="text"
                disabled
                name="watch_id"
                className="form-control"
                value={data.watch_id}
              />
            </div>

            <div>
              <lable htmlFor="brandid">Brand ID :</lable>
              <input
                type="text"
                name="brand_id"
                className="form-control"
                value={data.brand_id}
                onChange={(e) => setData({ ...data, brand_id: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="modelnumber">Model Number:</lable>
              <input
                type="text"
                name="model_number"
                className="form-control"
                value={data.model_number}
                onChange={(e) => setData({ ...data, model_number: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="name">Watch Name:</lable>
              <input
                type="text"
                name="name"
                className="form-control"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            
            <div>
              <lable htmlFor="description">Description :</lable>
              <input
                type="text"
                name="description"
                className="form-control"
                value={data.description}
                onChange={(e) => setData({ ...data, description: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="price">Price :</lable>
              <input
                type="text"
                name="price"
                className="form-control"
                value={data.price}
                onChange={(e) => setData({ ...data, price: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="stockquantity">Stock Quantity :</lable>
              <input
                type="number"
                name="stock_quantity"
                className="form-control"
                value={data.stock_quantity}
                onChange={(e) => setData({ ...data, stock_quantity: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="category">Category:</lable>
              <input
                type="text"
                name="category"
                className="form-control"
                value={data.category}
                onChange={(e) => setData({ ...data, category: e.target.value })}
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

export default UpdateWatchForm;
