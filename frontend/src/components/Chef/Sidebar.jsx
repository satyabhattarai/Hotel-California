import { Link, Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import React from "react";

const Sidebar = () => {
  const location = useLocation(); // Get the current route
 const user = localStorage.getItem("CHEF");
 if (!user) {
   window.location.href = "/";
 }
  return (
    <div>
      <Header/>
      <div className="flex">
        <div className="w-64 h-full p-6 text-white bg-red-600">
          <div className="mb-8 text-2xl font-bold text-center">Chef Portal</div>
          <ul>
            {[
              { path: "/chef/dashboard", label: "Dashboard" },
              { path: "/chef/view_orders", label: "View Orders" },
              { path: "/chef/request", label: "Request" },
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
    </div>
  );
};

export default Sidebar;
