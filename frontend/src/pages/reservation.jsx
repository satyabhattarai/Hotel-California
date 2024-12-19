import Booktable from "../components/Booktable";
import { useState } from "react";

const Reservation = () => {
  const [showtable, setshowtable] = useState(false);
  const [clicked, setclicked] = useState([]);
  const handleClicked = (n) => {
    if (clicked.includes(n)) {
      setclicked((prev) => prev.filter((item) => item !== n)); // removes existing item from array
    } else {
      setclicked((prev) => [...prev, n]); //adds item that doesn't already exist
    }
  };
  return (
    <div>
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
        <div className="flex flex-col items-center text-center ">
          <p className="mb-4 text-xl font-semibold text-gray-700 ">
            One Seater
          </p>
          <div className="flex gap-8 ">
            <span className="inline-block p-8 mb-8 text-center bg-gray-300 rounded">
              -
            </span>
            <span
              className={`inline-block p-16   ${
                clicked.includes(0) ? "bg-green-600 " : "bg-gray-300"
              }`}
              //: Prevent further interaction visually.
              //disable when clicked
              onClick={() => handleClicked(0)}
            >
              1 EX1
            </span>
          </div>

          <div className="flex gap-8">
            <span className="inline-block p-8 mb-8 bg-gray-300 rounded">-</span>
            <span
              className={`inline-block p-16   ${
                clicked.includes(1) ? "bg-green-600 " : "bg-gray-300"
              }`}
              //: Prevent further interaction visually.
              //disable when clicked
              onClick={() => handleClicked(1)}
            >
              1 EX2
            </span>
          </div>

          <div className="flex gap-8">
            <span className="inline-block p-8 mb-8 bg-gray-300 rounded">-</span>
            <span
              className={`inline-block p-16   ${
                clicked.includes(2) ? "bg-green-600 " : "bg-gray-300"
              }`}
              //: Prevent further interaction visually.
              //disable when clicked
              onClick={() => handleClicked(2)}
            >
              {/*  make (bg-gray-400) when disabled */}1 EX3
            </span>
          </div>
        </div>

        {/* Two-seater */}
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="mb-4 text-xl font-semibold text-gray-700">Two Seater</p>
          <span className="inline-block p-8 mx-4 bg-gray-300 rounded ">-</span>
          <span
            className={`inline-block p-16   ${
              clicked.includes(3) ? "bg-green-600 " : "bg-gray-300"
            }`}
            //: Prevent further interaction visually.
            //disable when clicked
            onClick={() => handleClicked(3)}
          >
            2 EX4
          </span>
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
          <span
            className={`inline-block p-16   ${
              clicked.includes(4) ? "bg-green-600 " : "bg-gray-300"
            }`}
            //: Prevent further interaction visually.
            //disable when clicked
            onClick={() => handleClicked(4)}
          >
            4 EX5
          </span>
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
          <span
            className={`inline-block p-16   ${
              clicked.includes(5) ? "bg-green-600 " : "bg-gray-300"
            }`}
            //: Prevent further interaction visually.
            //disable when clicked
            onClick={() => handleClicked(5)}
          >
            6 EX6
          </span>
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
          <span
            className={`inline-block p-16   ${
              clicked.includes(6) ? "bg-green-600 " : "bg-gray-300"
            }`}
            //: Prevent further interaction visually.
            //disable when clicked
            onClick={() => handleClicked(6)}
          >
            {/*  make (bg-gray-400) when disabled */}8 EX7
          </span>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
        </div>
        {/* familyseaterend */}
        {/* fourseater */}
        <div className="flex flex-col items-center gap-8">
          <p className="mb-4 text-xl font-semibold text-gray-700 ">
            Four Seater
          </p>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
          <span
            className={`inline-block p-16   ${
              clicked.includes(7) ? "bg-green-600 " : "bg-gray-300"
            }`}
            //: Prevent further interaction visually.
            //disable when clicked
            onClick={() => handleClicked(7)}
          >
            4 EX8
          </span>
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
          <span
            className={`inline-block p-16   ${
              clicked.includes(8) ? "bg-green-600 " : "bg-gray-300"
            }`}
            //: Prevent further interaction visually.
            //disable when clicked
            onClick={() => handleClicked(8)}
          >
            4 EX9
          </span>
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
          <span
            className={`inline-block p-16   ${
              clicked.includes(9) ? "bg-green-600 " : "bg-gray-300"
            }`}
            //: Prevent further interaction visually.
            //disable when clicked
            onClick={() => handleClicked(9)}
          >
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
      {/* Book Table Button */}
      <div className="flex justify-center mt-16">
        {/* onClick={()=>navigate('/booktable')} : this is how to navigate onclick for pages */}
        <button
          onClick={() => {
            setshowtable(true);
          }}
          className="animated-button-secondary"
        >
          Book Your Table Now
        </button>
      </div>
      {showtable && <Booktable />}
    </div>
  );
};

export default Reservation;
