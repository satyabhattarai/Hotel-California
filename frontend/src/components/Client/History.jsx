import React, { useEffect, useState } from "react";

import axios from "axios";

const History = () => {
  const username = localStorage.getItem("CLIENT");
  const user_number = localStorage.getItem("PHONE");
  const [visits, set_visits] = useState();
  const [results, setResults] = useState([]);
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  useEffect(() => {
    fetchVisits();
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/client/fetch_history",
        {
          params: { number: user_number }, // Pass user_number if needed
        }
      );
      setResults(response.data.historyDetails); // Adjust the key based on your API response
    } catch (error) {
      console.error("Error fetching history data:", error);
    }
  };

  const fetchVisits = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/client/fetch_visits",
        {
          params: { number: user_number },
        }
      );
      set_visits(response.data[0].visits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const downloadHistory = async (orderId) => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/client/history/download/${orderId}`,
        { responseType: "blob" } // Ensures the response is treated as a file (binary)
      );


      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "payment_summary.pdf"); // You can change the filename as needed
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading the file:", error);
      alert("Failed to download the PDF.");
    }
  };
  return (
    <div className="mt-12">
      <h1 className="mb-4 text-6xl text-center">
        Hi. <span className="text-red-500">{username}</span>.
      </h1>
      <h2 className="mb-12 text-3xl text-center ">
        You have visited Hotel California

        {visits && <span className="mx-2 text-4xl text-red-500">{visits}</span>} times.
      </h2>
      <div className="p-12 mx-auto bg-white rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Order History
        </h2>

        {results?.length > 0 ? (
          <div className="mt-6">
            <table className="w-full text-center table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-xl text-red-500">User Name</th>
                  <th className="px-4 py-2 text-xl text-red-500">
                    User Number
                  </th>
                  <th className="px-4 py-2 text-xl text-red-500">
                    Payment Date
                  </th>
                  <th className="px-4 py-2 text-xl text-red-500">
                    Table Number
                  </th>
                  <th className="px-4 py-2 text-xl text-red-500">
                    Total Amount
                  </th>
                  <th className="px-4 py-2 text-xl text-red-500">
                    Download PDF
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((order) => (
                  <tr key={order.id} className="text-lg font-semibold border-t ">
                    <td className="px-4 py-2 text-gray-600">
                      {order.user_name}
                    </td>
                    <td className="px-4 py-2 text-gray-600">
                      {order.user_number}
                    </td>
                    <td className="px-4 py-2 text-gray-600">
                      {order.payment_date}
                    </td>
                    <td className="px-4 py-2 text-gray-600">
                      {order.table_number}
                    </td>
                    <td className="px-4 py-2 text-gray-600">
                      ${order.total_amount}
                    </td>
                    <td className="px-4 py-2 text-gray-600">
                      <button
                        className="px-4 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600"
                        onClick={() => downloadHistory(order.id)}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="mt-6 text-gray-500">No history records found.</p>
        )}
      </div>
    </div>
  );
};

export default History;
