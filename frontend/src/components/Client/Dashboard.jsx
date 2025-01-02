import React, { useEffect, useState } from "react";

import axios from "axios";

const Dashboard = () => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;

  const [foodOrders, set_foodItems] = useState([]);
  const handle_deleteOrder = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/client/order/delete/${id}`);
      alert("Record deleted successfully.");
      window.location.href = "client";
    } catch (error) {
      alert("Error deleting record:");
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  const fetchOrders = async () => {
    const number = localStorage.getItem("PHONE");

    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/client/fetch_order",
        {
          params: { number },
        }
      );
      console.log(response.data);
      set_foodItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const totalAmount = foodOrders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );

  return (
    <div className="p-6 bg-white ">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-red-600">Client Dashboard</h1>
        <p className="text-gray-600">Order Details</p>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="text-red-600 bg-red-100">
              <th className="px-4 py-2 text-left border">Item ID</th>
              <th className="px-4 py-2 text-left border">Food Item</th>
              <th className="px-4 py-2 text-left border">Description</th>
              <th className="px-4 py-2 text-left border">Price</th>
              <th className="px-4 py-2 text-left border">Quantity</th>
              <th className="px-4 py-2 text-left border">Subtotal</th>
              <th className="px-4 py-2 text-left border">Status</th>
              <th className="px-4 py-2 text-left border">Waiting Time</th>
              <th className="px-4 py-2 text-center border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {foodOrders.map((order) => (
              <tr key={order.id} className="hover:bg-red-50">
                <td className="px-4 py-2 border">{order.id}</td>
                <td className="px-4 py-2 border">{order.name}</td>
                <td className="px-4 py-2 border">{order.desc}</td>
                <td className="px-4 py-2 border">{order.price}</td>
                <td className="px-4 py-2 border">{order.quantity}</td>
                <td className="px-4 py-2 border">
                  ${order.price * order.quantity}
                </td>
                <td className="px-4 py-2 border">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      order.status === "DELIVERED"
                        ? "bg-green-500"
                        : order.status === "PROGRESSING"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2 border">{order.waiting_time}</td>
                <td className="px-4 py-2 text-center border">
                  <button
                    onClick={() => {
                      handle_deleteOrder(order.id);
                    }}
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Cancel Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-right">
          <p className="text-xl font-bold text-red-600">
            Total Amount: ${totalAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
