import React, { useState } from "react";

import AddExtraItem from "../components/AddExtraItem";
import { useStateContext } from "../ContextProvider";
import axios from "axios";

export default function OrdersDashboard({ setshoworders, orders }) {
  const { showItems, setShowItems } = useStateContext();
  const baseUrl = process.env.REACT_APP_BACKEND_URL;

  const handlePlaceOrder = async () => {
    try{
      const result = await axios.post(baseUrl+'/api/order', {orders: orders});
      console.log(result);
    }catch(e){
      console.log(e);
    }
  }

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
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-300">Dish</th>
                <th className="px-4 py-2 border border-gray-300">
                  Time to Cook
                </th>
              </tr>
            </thead>
            <tbody>
              {orders && orders.map(orderItem => (
              <tr key={orderItem.name}>
                <td className="px-4 py-2 border border-gray-300">
                  {orderItem.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">30 mins</td>
              </tr>
              ))}
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
            <button
              className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={handlePlaceOrder}
            >
              Place your order
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
