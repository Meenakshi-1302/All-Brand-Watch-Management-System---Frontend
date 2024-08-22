import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateInventoryForm = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
      axios
        .get("http://localhost:8089/inventory/" + id)
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
    }, []);
  
    let handleSubmit = (e) => {
      e.preventDefault();
      axios.put("http://localhost:8089/inventory", data).then((res) => {
        alert("inventory data Updated Successfully");
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
              <h1>UPDATE Inventory DATA'S</h1>
              <div>
                <lable htmlFor="inventoryId">ID :</lable>
                <input
                  type="text"
                  disabled
                  name="inventoryId"
                  className="form-control"
                  value={data.inventoryId}
                />
              </div>
  
              <div>
                <lable htmlFor="quantityReceived">Quantity Received :</lable>
                <input
                  type="text"
                  name="quantityReceived"
                  className="form-control"
                  value={data.quantityReceived}
                  onChange={(e) => setData({ ...data, quantityReceived: e.target.value })}
                />
              </div>
  
              <div>
                <lable htmlFor="receivedAt">Received At:</lable>
                <input
                  type="text"
                  name="receivedAt"
                  className="form-control"
                  value={data.receivedAt}
                  onChange={(e) => setData({ ...data, receivedAt: e.target.value })}
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

export default UpdateInventoryForm;
