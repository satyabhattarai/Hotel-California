import React, { useEffect, useState } from "react";

import axios from "axios";

const View = () => {
  const [orders, set_Orders] = useState([]);

  useEffect(() => {
    get_Orders();
  }, []);

  const get_Orders = async () => {
    const status = null;
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/chef/fetch_order",
        {
          params: { status },
        }
      );
      console.log(response.data);
      set_Orders(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Group orders by table_number
  const groupedOrders = orders.reduce((acc, order) => {
    acc[order.table_number] = acc[order.table_number] || [];
    acc[order.table_number].push(order);
    return acc;
  }, {});

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold text-center text-red-600">
        Restaurant Orders
      </h1>
      <div className="space-y-12">
        {Object.entries(groupedOrders).map(([tableNumber, orders]) => (
          <div
            key={tableNumber}
            className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Table {tableNumber}
            </h2>
            <table className="w-full border-collapse table-auto">
              <thead>
                <tr className="text-white bg-red-500">
                  <th className="p-4 text-left border">Food Name</th>
                  <th className="p-4 text-left border">Quantity</th>
                  <th className="p-4 text-left border">Description</th>

                  <th className="p-4 text-left border">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={order.id}
                    className={`${
                      index % 2 === 0 ? "bg-red-50" : "bg-gray-100"
                    } hover:bg-red-100`}
                  >
                    <td className="p-4 border">{order.name}</td>
                    <td className="p-4 border">{order.quantity}</td>
                    <td className="p-4 border">{order.desc}</td>
                    <td className="p-4 border">
                      <span
                        className={`px-2 py-1 rounded text-white ${
                          order.status === "DELIVERED"
                            ? "bg-green-500"
                            : order.status === "PROGRESSING"
                            ? "bg-yellow-500"
                            : order.status === "PENDING"
                            ? "bg-red-500"
                            : order.status === "PREPARED"
                            ? "bg-blue-500"
                            : ""
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;
