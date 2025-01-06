import { useEffect, useState } from "react";

import axios from "axios";

const Dashboard = () => {
  const [preparedOrders, set_preparedOrders] = useState([]);
  const [deliveredOrders, set_deliveredOrders] = useState([]);
  useEffect(() => {
    getPreparedOrders();
    get_DeliveredOrders();
  }, []);

  const getPreparedOrders = async () => {
    const status = "PREPARED";
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/chef/fetch_order",
        {
          params: { status },
        }
      );
      console.log(response.data);
      set_preparedOrders(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const get_DeliveredOrders = async () => {
    const status = "DELIVERED";
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/chef/fetch_order",
        {
          params: { status },
        }
      );
      console.log(response.data);
      set_deliveredOrders(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handle_response = async (id, status) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/chef/order/response/${id}`,
        { status }
      );
      if (response.status === 200) {
        alert("Order Delivered successfully.");
        window.location.reload();
      } else {
        alert("Failed to update the order. Please try again.");
      }
    } catch (error) {
      console.error("Error accepting order:", error);
      alert(error.response?.data?.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="flex min-h-screen p-6">
      {/* Requested Orders Section */}
      <div className="flex-1 mr-4">
        <h2 className="mb-8 text-4xl font-bold text-red-600">
          Prepared Orders
        </h2>
        <div className="flex flex-col gap-4">
          {preparedOrders?.map((item) => (
            <div
              className="flex items-center justify-between w-full p-4 border border-red-400 rounded-md"
              key={item.id}
            >
              <div>
                <h3 className="text-lg font-bold text-red-600">{item.name}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Table: {item.table_number}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Description: {item.desc}
                </p>
              </div>
              <button
                onClick={() => {
                  handle_response(item.id, "DELIVERED");
                }}
                className="px-4 py-2 text-sm font-bold text-white bg-green-600 rounded hover:bg-green-700"
              >
                Accept
              </button>
            </div>
          ))}
          {preparedOrders.length === 0 && (
            <p className="text-gray-500">No requested orders at the moment.</p>
          )}
        </div>
      </div>

      {/* Accepted Orders Section */}
      <div className="flex-1 ml-4">
        <h2 className="mb-8 text-4xl font-bold text-red-600">
          DELEVERED Orders
        </h2>
        <div className="flex flex-col gap-4">
          {deliveredOrders?.map((item) => (
            <div
              className="w-full p-4 border border-red-400 rounded-md"
              key={item.id}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-red-600">{item.name}</h3>
                <h1 className="text-2xl text-blue-600">Timer</h1>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Table: {item.table_number}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Quantity: {item.quantity}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Description: {item.desc}
              </p>
            </div>
          ))}
          {deliveredOrders.length === 0 && (
            <p className="text-gray-500">No accepted orders at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
