import React, { useState } from "react";

const ManagerDashboard = () => {
  const [employees, setEmployees] = useState([
    { name: "Ram Sharma", designation: "Chef", phone: "9876543210" },
    { name: "Sita Thapa", designation: "Waiter", phone: "9876543211" },
  ]);
  const [sales, setSales] = useState([
    {
      date: "2024-12-18",
      customer: "Ram Sharma",
      orders: "Pizza, Coke",
      bill: 800,
    },
    {
      date: "2024-12-19",
      customer: "Sita Thapa",
      orders: "Burger, Fries",
      bill: 500,
    },
  ]);

  return (
    <div className="flex min-h-screen ">
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
      {/* Attendance */}
      <div className="flex-1 p-6">
        <div className="mb-6 ">
          <h2 className="mb-4 text-xl font-bold text-red-600">Attendance</h2>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-red-100">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Designation</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Ram Sharma</td>
                <td className="px-4 py-2 border">Chef</td>
                <td className="px-4 py-2 text-green-600 border">Present</td>
                <td className="px-4 py-2 border">2024-12-19</td>
                <td className="px-4 py-2 border">On Time</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Inventory Management */}
        <div className="mb-6">
          <h2 className="mb-4 text-xl font-bold text-red-600">
            Inventory Management
          </h2>
          <form className="space-y-4">
            <input
              className="w-full px-3 py-2 border rounded"
              placeholder="Item Name"
            />
            <input
              className="w-full px-3 py-2 border rounded"
              placeholder="Price"
              type="number"
            />
            <input
              className="w-full px-3 py-2 border rounded"
              placeholder="Expected Time"
              type="number"
            />
            <button className="px-6 py-2 text-white bg-red-500 rounded">
              Add Item
            </button>
          </form>
        </div>

        {/* Admin Control */}
        <div className="mb-6">
          <h2 className="mb-4 text-xl font-bold text-red-600">
            Employee Management
          </h2>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-red-100">
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Designation</th>
                <th className="px-4 py-2 border">Phone</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-2 border">{emp.name}</td>
                  <td className="px-4 py-2 border">{emp.designation}</td>
                  <td className="px-4 py-2 border">{emp.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sales Numbers */}
        <div>
          <h2 className="mb-4 text-xl font-bold text-red-600">Sales Numbers</h2>
          <input
            className="w-full px-4 py-2 mb-4 border rounded"
            placeholder="Search by customer name or date..."
          />
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-red-100">
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Customer Name</th>
                <th className="px-4 py-2 border">Orders</th>
                <th className="px-4 py-2 border">Bill</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-2 border">{sale.date}</td>
                  <td className="px-4 py-2 border">{sale.customer}</td>
                  <td className="px-4 py-2 border">{sale.orders}</td>
                  <td className="px-4 py-2 border">{sale.bill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
