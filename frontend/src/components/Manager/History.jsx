import React, { useState } from "react";

const History = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const orders = [
    {
      id: 1,
      clientName: "John Doe",
      time: "14:30",
      dateOfOrder: "2024-12-29",
      totalAmount: 50.99,
    },
    {
      id: 2,
      clientName: "Jane Smith",
      time: "12:15",
      dateOfOrder: "2024-12-28",
      totalAmount: 30.49,
    },
  ];

  const handleSearch = () => {
    const filteredOrders = orders.filter((order) =>
      order.clientName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredOrders);
  };

  return (
    <div className="max-w-lg p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Order History
      </h2>

      <div className="flex items-center justify-center mt-4">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Search by client name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 ml-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {searchResults.length > 0 && (
        <div className="mt-6">
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-gray-700">Client Name</th>
                <th className="px-4 py-2 text-gray-700">Time</th>
                <th className="px-4 py-2 text-gray-700">Total Amount</th>
                <th className="px-4 py-2 text-gray-700">Date</th>
                <th className="px-4 py-2 text-gray-700">Download PDF</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="px-4 py-2 text-gray-600">
                    {order.clientName}
                  </td>
                  <td className="px-4 py-2 text-gray-600">{order.time}</td>
                  <td className="px-4 py-2 text-gray-600">
                    ${order.totalAmount.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    {order.dateOfOrder}
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    <button className="px-4 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default History;
