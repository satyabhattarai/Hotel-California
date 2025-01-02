import { Link } from "react-router-dom";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-full p-6 text-white bg-red-600">
      <div className="mb-8 text-2xl font-bold text-center">Chef Dashboard</div>
      <ul>
        <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
          <Link to="/manager/addinventory" className="block text-lg">
            Add Inventories
          </Link>
        </li>
        <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
          <Link to="/manager/addmenu" className="block text-lg">
            Add Menu
          </Link>
        </li>
        <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
          <Link to="/manager/attendance" className="block text-lg">
            Attendance
          </Link>
        </li>
        <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
          <Link to="/manager/rewards" className="block text-lg">
            Rewards
          </Link>
        </li>
        <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
          <Link to="/manager/addemployee" className="block text-lg">
            Add Employee
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
