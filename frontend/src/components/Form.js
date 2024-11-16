import React, { useRef, useState } from "react";

import axios from "axios";

const Form = () => {
  const first = useRef();
  const second = useRef();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      first_name: first.current.value,
      last_name: second.current.value,
    };
    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/forms",
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
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-sm mx-auto mt-10"
    >
      <div>
        <label htmlFor="first_name" className="block font-medium">
          First Name
        </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          ref={first}
          className="border rounded px-3 py-2 w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="last_name" className="block font-medium">
          Last Name
        </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          ref={second}
          className="border rounded px-3 py-2 w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
