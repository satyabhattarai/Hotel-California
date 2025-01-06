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
        "http://127.0.0.1:8000/api/manager/alerts/fetch"
      );
      setAlerts(response.data);
    } catch (error) {
      console.error("Error fetching alerts:", error);
    }
  };

  const handleSeen = async (id) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/manager/alerts/delete/${id}`
      );
      setAlerts(alerts.filter((alert) => alert.id !== id));
    } catch (error) {
      console.error("Error deleting alert:", error);
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
                  <button
                    onClick={() => handleSeen(alert.id)}
                    className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                  >
                    SEEN
                  </button>
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
