import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

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
    <div>
      <div className="flex min-h-screen ">
        <div className="h-screen">
          <Sidebar />
        </div>
        {/* Attendance */}
        <div className="flex-1 p-6 ">
          <Outlet />

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
            <h2 className="mb-4 text-xl font-bold text-red-600">
              Sales Numbers
            </h2>
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
    </div>
  );
};

export default ManagerDashboard;
