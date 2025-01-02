import React from "react";

const TableReserved = () => {
  return (
    <div>
      <div className="p-8 mb-24">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-red-600">
            Reservation Dashboard
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Manage your restaurant reservations
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Booked Tables */}
          <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-red-600">
              Booked Tables
            </h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-red-600">
                    Full Name
                  </th>
                  <th className="px-4 py-2 text-left text-red-600">Table</th>
                  <th className="px-4 py-2 text-left text-red-600">
                    Date & Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">Table 1 - One Seater</td>
                  <td className="px-4 py-2">15/12/2024 19:00</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-4 py-2">Jane Smith</td>
                  <td className="px-4 py-2">Table 2 - Two Seater</td>
                  <td className="px-4 py-2">16/12/2024 18:30</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">Emily Davis</td>
                  <td className="px-4 py-2">Table 5 - Family Seater</td>
                  <td className="px-4 py-2">17/12/2024 20:00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Available Tables */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-red-600">
              Available Tables
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 text-center bg-gray-200 rounded-md">
                <p className="text-xl text-gray-700">Table 3 - One Seater</p>
              </div>
              <div className="p-4 text-center bg-gray-200 rounded-md">
                <p className="text-xl text-gray-700">Table 4 - Two Seater</p>
              </div>
              <div className="p-4 text-center bg-gray-200 rounded-md">
                <p className="text-xl text-gray-700">Table 6 - Four Seater</p>
              </div>
              <div className="p-4 text-center bg-gray-200 rounded-md">
                <p className="text-xl text-gray-700">Table 7 - Family Seater</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableReserved;
