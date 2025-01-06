import { useRef, useState } from "react";

import Booktable from "../components/Booktable";
import axios from "axios";

const Reservation = () => {
  const [showtable, setshowtable] = useState(false);
  const [data, setData] = useState([]);
  const dateRef = useRef();
  const tableNumberRef = useRef();
  const startTimeRef = useRef();
  const endTimeRef = useRef();
  const [isAvailable, setIsAvailable] = useState(null);
  const [existingReservations, setExistingReservations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(showtable){
      setshowtable(false);
    }

    const date = dateRef.current.value;
    const start_time = startTimeRef.current.value;
    const end_time = endTimeRef.current.value;
    const table_number = tableNumberRef.current.value;

    if (!date || !start_time || !end_time || !table_number) {
      alert("Please fill all fields.");
      return;
    }

    if (start_time >= end_time) {
      alert("Start time must be before end time.");
      return;
    }

    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/check-reservation",
        {
          params: { date, start_time, end_time, table_number },
        }
      );

      if (response.data.available) {
        setIsAvailable(true);
        const temp = [
          {
            date: date,
            start_time: start_time,
            end_time: end_time,
            table_number: table_number,
          },
        ];
        setData(temp);
        setExistingReservations([]);
      } else {
        setIsAvailable(false);
        setExistingReservations(response.data.reservations);
      }
    } catch (error) {
      console.error("Error checking reservation:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="">
      <div className="h-[300px] w-screen -mx-32">
        <img
          className="object-cover w-full h-full"
          src="Images/Food.jpg"
          alt="menu"
        />
      </div>
      <p className="mt-16 text-xl font-semibold text-center text-gray-500">
        Directly select available table
      </p>
      <p className="pt-4 text-xl text-center text-red-800">
        If a seat is colored grey or is unclickable, it indicates that the seat
        is available, and you can click to select your desired table type. If
        the seat is colored red, it means that the seat is already reserved.
      </p>
      <p className="text-lg text-center text-gray-500">
        (Layout of hotel california)
      </p>
      {/* Tables */}
      <div className="grid justify-between grid-cols-4 gap-16 mt-16">
        {/* One Seater */}
        <div className="flex flex-col items-center gap-5 text-center ">
          <p className="mb-4 text-xl font-semibold text-gray-700 ">
            One Seater
          </p>
          <div className="flex gap-8 ">
            <span className="inline-block p-8 mb-8 text-center bg-gray-300 rounded">
              -
            </span>
            <span className={`inline-block bg-gray-300 p-16 bg-gray-300`}>
              1 EX1
            </span>
          </div>

          <div className="flex gap-8">
            <span className="inline-block p-8 mb-8 bg-gray-300 rounded">-</span>
            <span className={`inline-block bg-gray-300 p-16   `}>1 EX2</span>
          </div>

          <div className="flex gap-8">
            <span className="inline-block p-8 mb-8 bg-gray-300 rounded">-</span>
            <span className={`inline-block bg-gray-300 p-16   `}>
              {/*  make (bg-gray-400) when disabled */}1 EX3
            </span>
          </div>
        </div>

        {/* Two-seater */}
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="mb-4 text-xl font-semibold text-gray-700">Two Seater</p>
          <span className="inline-block p-8 mx-4 bg-gray-300 rounded ">-</span>
          <span className={`inline-block bg-gray-300 p-16   `}>2 EX4</span>
          {/*  make (bg-gray-400) when disabled */}
          <span className="inline-block p-8 mx-4 bg-gray-300 rounded">-</span>
        </div>
        {/* Four Seater */}
        <div className="flex flex-col items-center gap-8">
          <p className="mb-4 text-xl font-semibold text-gray-700 ">
            Four Seater
          </p>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
          <span className={`inline-block bg-gray-300 p-16   `}>4 EX5</span>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
        </div>
        {/* More Tables - for a Restaurant Layout Feel */}
        <div className="flex flex-col items-center gap-8">
          <p className="mb-4 text-xl font-semibold text-gray-700 ">
            Six Seater
          </p>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
          <span className={`inline-block bg-gray-300 p-16   `}>6 EX6</span>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
        </div>

        {/* Family Seater */}
        <div className="flex flex-col items-center gap-8">
          <p className="mb-4 text-xl font-semibold text-gray-700 ">
            Family Seater
          </p>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
          <span className={`inline-block bg-gray-300 p-16   `}>8 EX7</span>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <p className="mb-4 text-xl font-semibold text-gray-700 ">
            Four Seater
          </p>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
          <span className={`inline-block bg-gray-300 p-16   `}>4 EX8</span>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
        </div>
        {/* fourseaterend */}
        <div className="flex flex-col items-center gap-8">
          <p className="mb-4 text-xl font-semibold text-gray-700 ">
            Four Seater
          </p>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
          <span className={`inline-block bg-gray-300 p-16  `}>4 EX9</span>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
        </div>
        {/* fourseater2end */}

        {/* familyseateragain */}
        <div className="flex flex-col items-center gap-8">
          <p className="mb-4 text-xl font-semibold text-gray-700 ">
            Family Seater
          </p>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
          <span className={`inline-block bg-gray-300 p-16 `}>
            {/*  make (bg-gray-400) when disabled */}8 EX10
          </span>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
        </div>
        {/* familyseater2end */}
      </div>

      {/* Table check: */}
      <div className="flex items-center justify-center py-5 bg-gray-100">
        <div className="w-1/2 p-8 bg-white border-2 border-red-500 rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-red-600">
            Check Reservation
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block font-medium text-gray-700">
              Table Number:
              <input
                type="text"
                ref={tableNumberRef}
                className="w-full p-2 mt-1 border border-gray-400 rounded focus:ring-2 focus:ring-red-500"
              />
            </label>
            <label className="block font-medium text-gray-700">
              Date:
              <input
                type="date"
                ref={dateRef}
                className="w-full p-2 mt-1 border border-gray-400 rounded focus:ring-2 focus:ring-red-500"
                min={new Date().toISOString().split("T")[0]}
              />
            </label>

            <label className="block font-medium text-gray-700">
              Start Time:
              <input
                type="time"
                ref={startTimeRef}
                className="w-full p-2 mt-1 border border-gray-400 rounded focus:ring-2 focus:ring-red-500"
              />
            </label>

            <label className="block font-medium text-gray-700">
              End Time:
              <input
                type="time"
                ref={endTimeRef}
                className="w-full p-2 mt-1 border border-gray-400 rounded focus:ring-2 focus:ring-red-500"
              />
            </label>

            <button
              type="submit"
              className="w-full py-2 text-white transition bg-red-600 rounded hover:bg-red-700"
            >
              Check Availability
            </button>
          </form>

          {isAvailable === true && (
            <div>
              <p className="mt-4 font-semibold text-green-600">
                ✅ Reservation is available!
              </p>
              <div className=""></div>
              <div className="flex justify-center mt-16">
                <button
                  onClick={() => {
                    setshowtable(true);
                  }}
                  className="animated-button-secondary"
                >
                  Book Your Table Now
                </button>
              </div>
            </div>
          )}

          {isAvailable === false && (
            <div className="mt-6">
              <p className="font-semibold text-red-600">
                ❌ This slot is already booked. Existing reservations:
              </p>
              <table className="w-full mt-4 border border-collapse border-gray-300">
                <thead className="text-white bg-red-500">
                  <tr>
                    <th className="p-2 border border-gray-300">Table</th>
                    <th className="p-2 border border-gray-300">Date</th>
                    <th className="p-2 border border-gray-300">Start Time</th>
                    <th className="p-2 border border-gray-300">End Time</th>
                  </tr>
                </thead>
                <tbody>
                  {existingReservations.map((res, index) => (
                    <tr key={index} className="bg-gray-100">
                      <td className="p-2 border border-gray-300">
                        {res.table_number}
                      </td>
                      <td className="p-2 border border-gray-300">{res.date}</td>
                      <td className="p-2 border border-gray-300">
                        {res.start_time}
                      </td>
                      <td className="p-2 border border-gray-300">
                        {res.end_time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {showtable && data && <Booktable props={data} />}
    </div>
  );
};

export default Reservation;
