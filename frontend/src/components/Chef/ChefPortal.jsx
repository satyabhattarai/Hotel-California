import React, { useState } from "react";

function ChefPortal() {
  const AcceptedQueue = [
    { table: 1, dish: "Pasta" },
    { table: 2, dish: "Caesar Salad" },
    { table: 3, dish: "Grilled Chicken" },
    { table: 4, dish: "Margherita Pizza" },
    { table: 5, dish: "Tiramisu" },
    { table: 6, dish: "Tomato Soup" },
    { table: 7, dish: "Beef Steak" },
    { table: 8, dish: "Sushi Platter" },
    { table: 9, dish: "Veggie Burger" },
    { table: 10, dish: "Chocolate Cake" },
    { table: 11, dish: "Chicken Biryani" },
    { table: 12, dish: "Seafood Platter" },
  ];
  const RequestedQueue = [
    { table: 1, dish: "salad" },
    { table: 2, dish: "xeaser" },
    { table: 13, dish: "Cheesecake" },
    { table: 14, dish: "French Fries" },
    { table: 15, dish: "Greek Salad" },
    { table: 16, dish: "Chicken Tacos" },
    { table: 17, dish: "Fish Curry" },
    { table: 18, dish: "Lamb Chops" },
    { table: 19, dish: "Pancakes" },
    { table: 20, dish: "Vegetable Stir-Fry" },
  ];
  return (
    <div className="flex min-h-screen">
      <div className="w-64 p-6 text-white bg-red-600">
        <div className="mb-8 text-2xl font-bold text-center">
          Chef Dashboard
        </div>
        <ul>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <a href="#" className="block text-lg">
              Add Inventories
            </a>
          </li>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <a href="#" className="block text-lg">
              Add Item Alert
            </a>
          </li>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <a href="#" className="block text-lg">
              Attendance
            </a>
          </li>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <a href="#" className="block text-lg">
              Rewards
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-6 mt-16 mb-8">
        <h2 className="mb-8 text-4xl font-bold text-red-600">
          Accepted Orders
        </h2>
        <div className="flex flex-wrap items-center gap-4 mb-8 border-b-8 ">
          {AcceptedQueue.map((item) => (
            <div className="" key={item.id}>
              <div className="w-64 p-8 mb-8 border border-red-400 rounded-md">
                <h3 className="text-lg font-bold text-red-600">{item.dish}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Table: {item.table}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mb-8 text-4xl font-bold text-red-600">
          Requested Orders
        </h2>
        <div className="flex flex-wrap items-center gap-4 overflow-hidden border-b-8 ">
          {RequestedQueue.map((item) => (
            <div className="" key={item.id}>
              <div className="w-64 p-8 mb-8 border border-red-400 rounded-md">
                <h3 className="text-lg font-bold text-red-600">{item.dish}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Table: {item.table}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChefPortal;
