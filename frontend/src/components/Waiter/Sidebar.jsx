import { Link, Outlet, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import AlertPopup from "./AlertPopup";
import Header from "./Header";
import axios from "axios";

const Sidebar = () => {
  const location = useLocation(); // Get current route
  const [alerts, setAlerts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // Ensure only logged-in staff can access this page
  const user = localStorage.getItem("STAFF");
  if (!user) {
    window.location.href = "/";
  }

  // Fetch alerts from backend
  const fetchAlerts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/alerts/fetch"
      );
      if (response.data.length > 0) {
        setAlerts(response.data);
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    } catch (error) {
      console.error("Error fetching alerts:", error);
    }
  };

  // Fetch alerts every 7 seconds
  useEffect(() => {
    fetchAlerts();
    const interval = setInterval(fetchAlerts, 7000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <Header />
      {showPopup && (
        <AlertPopup alerts={alerts} onClose={() => setShowPopup(false)} />
      )}

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 p-6 text-white bg-red-600">
          <div className="mb-8 text-2xl font-bold text-center">
            Waiter Dashboard
          </div>
          <ul>
            {[
              { name: "Dashboard", path: "dashboard" },
              { name: "Table Overview", path: "table_overview" },
              { name: "Reserved Tables", path: "reservation" },
              { name: "History", path: "history" },
              { name: "Alerts", path: "alerts" },
            ].map((item) => (
              <li
                key={item.path}
                className="p-2 mb-4 rounded-lg hover:bg-red-500"
              >
                <Link
                  to={item.path}
                  className={`block p-2 rounded-lg text-lg ${
                    location.pathname.includes(item.path)
                      ? "bg-red-700 text-white"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
