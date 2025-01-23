import { Link, Outlet, useLocation } from "react-router-dom";

import React from "react";

const Sidebar = () => {
  const location = useLocation();
  const user = localStorage.getItem('CLIENT');
  if (!user){
    window.location.href = '/';
  }

  return (
    <div className="flex h-screen ">
      <div className="w-64 h-full p-6 text-white bg-red-600">
        <div className="mb-8 text-2xl font-bold text-center">Client Portal</div>
        <ul>
          {[
            { path: "/client/dashboard", label: "Dashboard" },
            { path: "/client/menu", label: "Add Orders" },
            { path: "/client/payment", label: "Payment" },
            { path: "/client/history", label: "History and Rewards" },
            { path: "/client/request", label: "Request" },
          ].map((item) => (
            <li
              key={item.path}
              className={`p-2 mb-4 rounded-lg
              ${
                location.pathname.startsWith(item.path)
                  ? "bg-red-800"
                  : "hover:bg-red-500"
              }`}
            >
              <Link to={item.path} className="block text-lg">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
