import React, { useEffect, useState } from "react";

import axios from "axios";

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/manager/attendance")
      .then((response) => {
        setAttendance(response.data.attendance);
      })
      .catch((error) => {
        console.error("Error fetching attendance:", error);
      });
  }, []);

  return (
    <div className="container p-6 mx-auto">
      <h2 className="mb-6 text-2xl font-bold text-center text-red-600">
        All Attendance Records (Sorted by Date - Descending)
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full bg-white border-collapse rounded-lg table-auto">
          <thead>
            <tr className="text-sm leading-normal text-white uppercase bg-red-600">
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">User Name</th>
              <th className="px-6 py-3 text-left">User Number</th>
              <th className="px-6 py-3 text-left">Rank</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light text-gray-700">
            {attendance.length > 0 ? (
              attendance.map((record, index) => (
                <tr
                  key={record.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="px-6 py-3">{record.date}</td>
                  <td className="px-6 py-3">{record.user_name}</td>
                  <td className="px-6 py-3">{record.user_number}</td>
                  <td className="px-6 py-3">{record.rank}</td>
                  <td
                    className={`py-3 px-6 font-semibold ${
                      record.status === "PRESENT"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {record.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No attendance records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
