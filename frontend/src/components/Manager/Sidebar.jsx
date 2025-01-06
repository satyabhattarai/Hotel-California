import { Link, Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import React from "react";

const Sidebar = () => {
  const location = useLocation();
  const user = localStorage.getItem("MANAGER");
  if (!user) {
    window.location.href = "/";
  }

  return (
    <div className="">
      <Header/>
      <div className="flex w-full h-[100vh]">
        <div className="w-64 h-full p-6 text-white bg-red-600">
          <div className="mb-8 text-2xl font-bold text-center">
            Manager Dashboard
          </div>
          <ul>
            {[
              { path: "/manager/dashboard", label: "Dashboard" },
              { path: "/manager/menu_management", label: "Menu Management" },
              { path: "/manager/attendance", label: "Attendance" },
              { path: "/manager/history", label: "History of Clients" },
              {
                path: "/manager/employee_management",
                label: "Employee Management",
              },
              { path: "/manager/reservation", label: "Reservation" },
              { path: "/manager/alerts", label: "Alerts" },
            ].map((item) => (
              <li
                key={item.path}
                className={`p-2 mb-4 rounded-lg
              ${
                location.pathname === item.path
                  ? "bg-red-800"
                  : "hover:bg-red-500"
              }`}
              >
                <Link to={item.path} className="block text-lg">
                  {item.label}
                </Link>
              </li>
            ))}

            {/* External link (no highlighting needed) */}
            <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
              <Link
                to="http://localhost/phpmyadmin/index.php?route=/database/structure&db=backend"
                target="_blank"
                className="block text-lg"
              >
                Access to the database
              </Link>
            </li>
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
