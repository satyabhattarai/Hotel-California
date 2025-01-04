import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

const History = () => {
  const [results, setResults] = useState([]);
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  const queryRef = useRef();

  const fetchHistory = async (e) => {
    e.preventDefault();
    const Query = queryRef.current.value;
    console.log(Query);
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/manager/fetch_history",
        {
          params: { query: Query },
        }
      );
      setResults(response.data.historyDetails);
    } catch (error) {
      console.error("Error fetching history data:", error);
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
    <div>
      <h1 className="text-6xl">
        Hi. <span className="text-red-500">Utsav</span>.
      </h1>
      <form onSubmit={fetchHistory}>
        <input type="text" ref={queryRef} placeholder="type to search" />
        <input type="submit" />
      </form>
      <div className="max-w-lg p-6 mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Order History
        </h2>

        {results?.length > 0 ? (
          <div className="mt-6">
            <table className="w-full text-left table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-gray-700">User Name</th>
                  <th className="px-4 py-2 text-gray-700">User Number</th>
                  <th className="px-4 py-2 text-gray-700">Payment Date</th>
                  <th className="px-4 py-2 text-gray-700">Table Number</th>
                  <th className="px-4 py-2 text-gray-700">Total Amount</th>
                  <th className="px-4 py-2 text-gray-700">Download PDF</th>
                </tr>
              </thead>
              <tbody>
                {results.map((order) => (
                  <tr key={order.id} className="border-t">
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
