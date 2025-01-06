import React, { useRef } from "react";

import axios from "axios";

const Request = () => {
  const table_number = localStorage.getItem('TABLE_NUMBER');
  const messageRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      table_number: table_number,
      message: messageRef.current.value,
      rank: "CLIENT",
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/chef/request",
        formData
      );
      alert(response.data.message);
      window.location.reload();
    } catch (error) {
      console.error(error.response.data);
      alert("An error occurred.");
    }

    console.log(formData);
  };
  return (
    <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold text-center">Make a Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message Box
          </label>
          <textarea
            ref={messageRef}
            id="message"
            className="w-full h-48 px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Request;
