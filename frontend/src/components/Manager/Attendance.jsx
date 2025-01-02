import React from "react";

const Attendance = () => {
  return (
    <div>
      <div className="mb-24 ">
        <h2 className="mb-4 text-xl font-bold text-gray-700">Attendance</h2>
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
    </div>
  );
};

export default Attendance;
