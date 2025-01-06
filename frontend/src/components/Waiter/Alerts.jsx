import React, { useEffect, useState } from "react";

import axios from "axios";

const Alert = () => {
  const [alerts, setAlerts] = useState([]);
  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/waiter/alerts/fetch"
      );
      setAlerts(response.data);
    } catch (error) {
      console.error("Error fetching alerts:", error);
    }
  };

  const handle_response = async (id, status) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/waiter/alerts/response/${id}`,
        { status }
      );
      if (response.status === 200) {
        alert("Order accepted successfully.");
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
    <div className="container p-4 mx-auto">
      <h2 className="mb-4 text-2xl font-bold text-red-600">Alerts</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="text-white bg-red-600">
            <tr>
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Table Number</th>

              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert) => (
              <tr key={alert.id} className="border-b">
                <td className="px-4 py-2 text-center">{alert.rank}</td>
                <td className="px-4 py-2 text-center">
                  {alert.message || "-"}
                </td>
                <td className="px-4 py-2 text-center">
                  {alert.table_number || "-"}
                </td>

                <td className="px-4 py-2 text-center">{alert.status}</td>
                <td className="px-4 py-2 text-center">
                  {alert.status === "PENDING" ? (
                    <button
                      onClick={() => handle_response(alert.id, "COMPLETED")}
                      className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                    >
                      Attend
                    </button>
                  ) : (
                    <span className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700">
                      No Action
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alert;
