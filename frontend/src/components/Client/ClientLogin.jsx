import React, { useRef, useState } from "react";

import axios from "axios";

const ClientLogin = ({ setShowForm }) => {
  const number = useRef();
  const name = useRef();
  const [showCheckNumber, set_showCheckNumber] = useState(true);
  const [showRegisterName, set_showRegisterName] = useState(false);
  const [showWelcome, set_showWelcome] = useState(false);
  const [temp_number, set_temp_number] = useState(false);

  const checkNumber = async (e) => {
    e.preventDefault();

    const filters = {
      number: number.current.value,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/client/check_number",
        filters
      );

      if (response.data.message === "Client found") {
        localStorage.setItem("CLIENT", response.data.name);
        set_showCheckNumber(false);
        set_showRegisterName(false);
        set_showWelcome(true);
      } else {
        set_temp_number(filters.number);
        set_showCheckNumber(false);
        set_showRegisterName(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const RegisterClient = async (e) => {
    e.preventDefault();
    const formData = {
      number: temp_number,
      name: name.current.value,
      visits: 1,
    };
    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/client/register",
        formData
      );
      alert(response.data.message);
      set_showCheckNumber(false);
      set_showRegisterName(false);
      localStorage.setItem('CLIENT',formData.name)
      set_showWelcome(true);
    } catch (error) {
      console.error(error.response.data);
      alert("An error occurred.");
    }
  };
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center min-h-screen bg-gray-100/80 z-[1000]">
      <div className="flex flex-col w-full max-w-sm gap-5 p-6 bg-white rounded shadow-md">
        <h2 className="font-bold text-center ">
          Welcome To The Hotel California
        </h2>
        {showCheckNumber && (
          <form onSubmit={checkNumber}>
            <div className="mb-4">
              <label
                htmlFor="number"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Number
              </label>
              <input
                type="number"
                ref={number}
                id="number"
                required
                placeholder="Enter your number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium bg-[#CC3333] text-white  rounded-md hover:bg-[#ef4444] focus:outline-none focus:ring-2 "
            >
              Submit
            </button>

            <div
              className="mt-5 text-center text-black cursor-pointer hover:text-red-400"
              onClick={() => {
                setShowForm(false);
              }}
            >
              close
            </div>
          </form>
        )}
        {showRegisterName && (
          <form onSubmit={RegisterClient}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                ref={name}
                id="name"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium bg-[#CC3333] text-white  rounded-md hover:bg-[#ef4444] focus:outline-none focus:ring-2 "
            >
              Submit
            </button>

            <div
              className="mt-5 text-center text-black cursor-pointer hover:text-red-400"
              onClick={() => {
                setShowForm(false);
              }}
            >
              close
            </div>
          </form>
        )}
        {showWelcome && (
          <div>
            <h1 className="font-bold text-center ">
              {localStorage.getItem("CLIENT")}
            </h1>
            <div
              className="mt-5 text-center text-black cursor-pointer hover:text-red-400"
              onClick={() => {
                setShowForm(false);
              }}
            >
              close
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientLogin;
