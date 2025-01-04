import { Link, Outlet } from "react-router-dom";

import React from "react";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-64 h-full p-6 text-white bg-red-600">
        <div className="mb-8 text-2xl font-bold text-center">
          Manager Dashboard
        </div>
        <ul>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <Link to="/manager/dashboard" className="block text-lg">
              Dashboard
            </Link>
          </li>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <Link to="/manager/menu_management" className="block text-lg">
              Menu Management
            </Link>
          </li>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <Link to="/manager/attendance" className="block text-lg">
              Attendance
            </Link>
          </li>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <Link to="/manager/history" className="block text-lg">
             History of Clients
            </Link>
          </li>
        
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <Link to="/manager/employee_management" className="block text-lg">
              Employee Management
            </Link>
          </li>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <Link to="/manager/reservation" className="block text-lg">
              Reservation
            </Link>
          </li>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <Link to="/manager/alerts" className="block text-lg">
              Alerts
            </Link>
          </li>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <Link to="/manager/database" className="block text-lg">
              Access to the database
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
