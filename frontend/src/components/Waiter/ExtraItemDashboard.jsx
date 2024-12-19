import React, { useState } from "react";

const ExtraItemsDashboard = () => {
  // Initial static data
  const orders = [
    {
      tableNumber: 1,
      items: [
        {
          id: 1,
          name: "Cheese Topping",
          category: "Dairy",
          quantity: 2,
          status: "Pending",
        },
        {
          id: 2,
          name: "Pickles",
          category: "Pickles",
          quantity: 1,
          status: "Delivered",
        },
      ],
    },
    {
      tableNumber: 5,
      items: [
        {
          id: 3,
          name: "Mineral Water",
          category: "Drinks",
          quantity: 3,
          status: "Pending",
        },
        {
          id: 4,
          name: "Extra Sauce",
          category: "Condiments",
          quantity: 1,
          status: "Delivered",
        },
      ],
    },
    {
      tableNumber: 8,
      items: [
        {
          id: 5,
          name: "Lemonade",
          category: "Drinks",
          quantity: 2,
          status: "Pending",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 bg-white">
      <h1 className="mb-8 text-3xl font-bold text-red-600">
        Extra Items Ordered Dashboard
      </h1>

      {orders.map((order, index) => (
        <div
          key={index}
          className="w-3/4 p-6 mb-6 border border-red-300 rounded-lg shadow-md"
        >
          <h2 className="mb-4 text-xl font-bold text-red-600">
            Table {order.tableNumber}
          </h2>

          <div className="flex flex-col space-y-4">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 rounded-lg shadow-sm bg-gray-50"
              >
                <div>
                  <p className="font-semibold text-gray-700">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Category: {item.category}
                  </p>
                </div>
                <div className="text-gray-700">Qty: {item.quantity}</div>
                <div
                  className={`text-sm font-bold px-3 py-1 rounded-full border ${
                    item.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600 border-yellow-400"
                      : "bg-green-100 text-green-600 border-green-400"
                  }`}
                >
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtraItemsDashboard;
