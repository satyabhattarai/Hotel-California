import React, { useEffect, useState } from "react";

const Reservation = () => {
  const [reservations, setReservations] = useState([]);

  // Fetch all reservations
  const fetchReservations = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/manager/reservations/fetch");
      const data = await response.json();
      setReservations(data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };



  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="container p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">Reservations</h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-collapse border-gray-300 shadow-lg table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Number</th>
              <th className="p-2 border">Address</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Start Time</th>
              <th className="p-2 border">End Time</th>
              <th className="p-2 border">Size</th>
              <th className="p-2 border">Message</th>
              <th className="p-2 border">Table</th>
             
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr
                key={reservation.id}
                className="text-center hover:bg-gray-100"
              >
                <td className="p-2 border">{reservation.id}</td>
                <td className="p-2 border">{reservation.name}</td>
                <td className="p-2 border">{reservation.number}</td>
                <td className="p-2 border">{reservation.address}</td>
                <td className="p-2 border">{reservation.date}</td>
                <td className="p-2 border">{reservation.start_time}</td>
                <td className="p-2 border">{reservation.end_time}</td>
                <td className="p-2 border">{reservation.size}</td>
                <td className="p-2 border">{reservation.message || "N/A"}</td>
                <td className="p-2 border">{reservation.table_number}</td>
                <td className="p-2 border">

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservation;
