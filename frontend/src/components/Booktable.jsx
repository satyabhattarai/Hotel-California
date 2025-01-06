import React, { useRef, useState } from "react";

import axios from "axios";

const Booktable = (data) => {
  const [showPopup, setShowPopup] = useState(false);
console.log(data);
  const nameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const familySizeRef = useRef();
  const tableRef = useRef();
  const dateRef = useRef();
  const start_timeRef = useRef();
  const end_timeRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedDate = new Date(dateRef.current.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time for accurate date comparison

    if (selectedDate < today) {
      alert("Please select today's date or a future date.");
      return;
    }

    const startTime = start_timeRef.current.value;
    const endTime = end_timeRef.current.value;

    if (startTime >= endTime) {
      alert("Start time must be earlier than end time.");
      return;
    }

    const formData = {
      name: nameRef.current.value,
      number: phoneRef.current.value,
      address: addressRef.current.value,
      familySize: familySizeRef.current.value,
      table_number: tableRef.current.value,
      date: dateRef.current.value,
      start_time: start_timeRef.current.value,
      end_time: end_timeRef.current.value,
      message: messageRef.current.value,
    };

    console.log("Form Data:", formData);
    try {
      await RegisterReservation(formData);
      setShowPopup(true);
    } catch (err) {
      alert(err);
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
      start_time: formdata.start_time,
      end_time: formdata.end_time,
    };

    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/client/reservation",
        formData
      );
      alert(response.data.message);
      window.location.reload();
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
            <input
              ref={tableRef}
              value={data.props[0].table_number}
              disabled
              className="w-full p-2 border border-gray-400 rounded"
            />
          </label>

          <label>
            Date :
            <input
              type="date"
              value={data.props[0].date}
              disabled
              ref={dateRef}
              className="w-full p-2 border border-gray-400 rounded"
            />
          </label>
          <label>
            Start Time :
            <input
              type="time"
              ref={start_timeRef}
              value={data.props[0].start_time}
              disabled
              className="w-full p-2 border border-gray-400 rounded"
            />
          </label>
          <label>
            End Time :
            <input
              type="time"
              ref={end_timeRef}
              value={data.props[0].end_time}
              disabled
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
    </form>
  );
};

export default Booktable;
