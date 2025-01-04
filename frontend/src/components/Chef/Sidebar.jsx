import { Link, Outlet } from "react-router-dom";

import React from "react";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-64 h-full p-6 text-white bg-red-600">
        <div className="mb-8 text-2xl font-bold text-center">Chef Portal</div>
        <ul>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <Link to="dashboard" className="block text-lg">
              Dashboard
            </Link>
          </li>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <Link to="view_orders" className="block text-lg">
              View Orders
            </Link>
          </li>
          <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
            <Link to="request" className="block text-lg">
              Request
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
