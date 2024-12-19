import React, { useState } from "react";

import AddExtraItem from "../components/AddExtraItem";
import { useStateContext } from "../ContextProvider";

export default function OrdersDashboard({ setshoworders }) {
  const { showItems, setShowItems } = useStateContext();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[90%] max-w-4xl rounded-lg shadow-lg overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 text-white bg-red-500">
          <h2 className="text-3xl font-bold">Your Orders</h2>
          <button
            className="text-2xl text-white hover:text-gray-300"
            onClick={() => {
              setshoworders(false);
            }}
          >
            &times;
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <h3 className="mb-4 text-xl font-bold">Order Details</h3>
          {/* Orders Table */}
          <table className="w-full text-left border border-collapse border-gray-300 table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-300">Dish</th>
                <th className="px-4 py-2 border border-gray-300">
                  Time to Cook
                </th>
                <th className="px-4 py-2 border border-gray-300">Chef</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Grilled Salmon
                </td>
                <td className="px-4 py-2 border border-gray-300">30 mins</td>
                <td className="px-4 py-2 border border-gray-300">Hem Raj</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Caesar Salad
                </td>
                <td className="px-4 py-2 border border-gray-300">15 mins</td>
                <td className="px-4 py-2 border border-gray-300">
                  Alice Smith
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Margherita Pizza
                </td>
                <td className="px-4 py-2 border border-gray-300">25 mins</td>
                <td className="px-4 py-2 border border-gray-300">John Doe</td>
              </tr>
            </tbody>
          </table>

          {/* Additional Features */}
          <div className="flex items-center justify-between mt-6">
            <button
              className="px-6 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              onClick={() => setShowItems(true)}
            >
              Add More Items
            </button>
            <p className="text-gray-500">
              Want to add something else? Click the button!
            </p>
            {showItems && <AddExtraItem />}
          </div>
        </div>
      </div>
    </div>
  );
}
