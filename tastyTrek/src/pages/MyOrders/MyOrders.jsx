import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';
import "./MyOrders.css"


const MyOrders = () => {
  const { token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:8080/api/orders", {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    setData(response.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="container">
      <div className="py-5 row justify-content-center">
        <div className="col-11 card">
          <table className="table table-responsive">
            <tbody>
              {
                data.map((order, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={assets.delivery} alt="" height={48} width={48}></img>
                      </td>
                      <td>
                        {
                          // ✅ Update No. 1: Prevent runtime error if orderedItems is undefined or not an array
                          Array.isArray(order.orderedItems) && order.orderedItems.length > 0 ? (
                            order.orderedItems.map((item, index) => {
                              if (index === order.orderedItems.length - 1) {
                                return item.name + " x " + item.quantity;
                              } else {
                                return item.name + " x " + item.quantity + ", ";
                              }
                            })
                          ) : (
                            <span className="text-danger">No items</span>
                          )
                        }
                      </td>
                      <td>&#x20B9;{order.amount.toFixed(2)}</td>
                      <td>Items: {Array.isArray(order.orderedItems) ? order.orderedItems.length : 0}</td>
                      <td className="fw-bold text-capitalize">&#x25cf;{order.orderStatus}</td>
                      <td>
                        <button className="btn btn-sm btn-warning" onClick={fetchOrders}>
                          <i className="bi bi-arrow-clockwise"></i>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
