import React from "react";
import { useParams } from "react-router-dom";

const TableOverview = () => {
  const tableInfo = {
    userName: "John Doe",
    numberOfUsers: 4,
    orders: [
      { item: "Margherita Pizza", quantity: 2, status: "Served" },
      { item: "Pasta Alfredo", quantity: 1, status: "Preparing" },
      { item: "Coke", quantity: 4, status: "Served" },
    ],
  };

  const { tableId } = useParams();
  return (
    <div className="max-w-2xl p-8 mx-auto text-gray-800 bg-white rounded-md shadow-lg">
      <h1 className="mb-6 text-3xl font-bold text-center text-red-600">
        Table Overview
      </h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-red-500">Table Number:</h2>
        <p className="text-lg">{tableId}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-red-500">User Name:</h2>
        <p className="text-lg">{tableInfo.userName}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-red-500">Number of Users:</h2>
        <p className="text-lg">{tableInfo.numberOfUsers}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-red-500">Orders:</h2>
        <table className="w-full border border-collapse border-red-500">
          <thead>
            <tr className="text-red-600 bg-red-100">
              <th className="p-2 border border-red-500">Item</th>
              <th className="p-2 border border-red-500">Quantity</th>
              <th className="p-2 border border-red-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableInfo.orders.map((order, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border border-red-500">{order.item}</td>
                <td className="p-2 border border-red-500">{order.quantity}</td>
                <td
                  className={`border border-red-500 p-2 ${
                    order.status === "Served"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOverview;
