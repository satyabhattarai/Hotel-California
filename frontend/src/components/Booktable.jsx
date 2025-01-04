import React, { useRef, useState } from "react";

import axios from "axios";

const Booktable = () => {
  const [showPopup, setShowPopup] = useState(false);

  const nameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const familySizeRef = useRef();
  const tableRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      number: phoneRef.current.value,
      address: addressRef.current.value,
      familySize: familySizeRef.current.value,
      table_number: tableRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      message: messageRef.current.value,
    };
    console.log("Form Data:", formData);
    try {
      if (await checkNumber(formData)) {
        alert("found");
      } else {
       await RegisterClient(formData);
      }
      await RegisterReservation(formData);
    } catch (err) {
      alert(err);
    }

    setShowPopup(true);
  };

  const checkNumber = async (formData) => {
    const filters = {
      number: formData.number,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/client/check_number",
        filters
      );

      if (response.data.message === "Client found") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const RegisterClient = async (formdata) => {
 const formData = {
   number: formdata.number,
   name: formdata.name,
   visits: 1,
 };
    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/client/register",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error.response.data);
      alert("An error occurred.");
    }
  };
  const RegisterReservation = async (formdata) => {

  const formData = {
    number: formdata.number,
    name: formdata.name,
    address: formdata.address,
    date: formdata.date,
    size: formdata.familySize,
    message: formdata.message,
    table_number: formdata.table_number,
    time: formdata.time,
  };

    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/client/reservation",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error.response.data);
      alert("An error occurred.");
    }
  };
  return (
    <form
      className="flex bg-[#f9f5f0] w-1/2 mx-auto p-8 shadow-2xl rounded-lg mt-8"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-1/2 gap-8 p-4">
        <div>
          <p className="text-2xl font-bold text-gray-800">Hotel California</p>
          <p className="pt-4 text-justify text-gray-700 text-md">
            Reservations in our restaurant are available up to 30 days in
            advance for parties up to 8 guests. Guests up to 4 or fewer can also
            book online or through phone.
          </p>
        </div>
        <p className="text-xl font-bold text-gray-800">Book Now</p>
        <div className="flex flex-col gap-8">
          <input
            type="text"
            ref={nameRef}
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Full Name"
          />
          <input
            type="text"
            ref={phoneRef}
            className="p-2 border border-gray-400 rounded"
            placeholder="Phone Number"
          />
          <input
            type="text"
            ref={addressRef}
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Address"
          />
          <input
            type="number"
            ref={familySizeRef}
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Family Size"
          />
          <label>
            Table :
            <select
              ref={tableRef}
              className="w-full p-2 border border-gray-400 rounded"
            >
              <option value="1T1">1T1</option>
              <option value="1T2">1T2</option>
              <option value="1T3">1T3</option>
              <option value="2T1">2T1</option>
              <option value="2T2">2T2</option>
              <option value="2T3">2T3</option>
            </select>
          </label>

          <label>
            Date :
            <input
              type="date"
              name="date"
              ref={dateRef}
              className="w-full p-2 border border-gray-400 rounded"
            />
          </label>
          <label>
            Time :
            <input
              type="time"
              ref={timeRef}
              className="w-full p-2 border border-gray-400 rounded"
            />
          </label>
          <label htmlFor="long-text">
            Tell us more (optional) :
            <textarea
              id="long-text"
              ref={messageRef}
              rows="5"
              className="w-full p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
            />
          </label>
        </div>
      </div>
      <div className="mx-4 border-l-4 border-red-500 border-dashed"></div>
      <div className="flex flex-col w-1/2 gap-8 p-4">
        <div className="text-xl font-bold text-gray-800">Hours</div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xl font-semibold text-gray-700">Breakfast</p>
            <p className="text-lg font-medium text-red-600">
              Monday - Friday: 7:30 am - 10:00 am
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-700">Lunch</p>
            <p className="text-lg font-medium text-red-600">
              Monday - Friday: 12:00 pm - 2:00 pm
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-700">Dinner</p>
            <p className="text-lg font-medium text-red-600">
              Sunday - Wednesday: 5:30 pm - 10:00 pm
            </p>
            <p className="text-lg font-medium text-red-600">
              Thursday - Saturday: 5:30 pm - 10:30 pm
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="p-4 font-bold text-white bg-red-500 rounded hover:bg-red-700"
        >
          Reserve Now
        </button>
      </div>
      {showPopup && (
        <div
          className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
          onClick={() => setShowPopup(false)}
        >
          <div className="p-8 text-center text-white bg-green-500 rounded-lg">
            <p className="text-xl font-semibold">Your table is booked!</p>
            <p>Enjoy your meal!</p>
          </div>
        </div>
      )}
    </form>
  );
};

export default Booktable;
