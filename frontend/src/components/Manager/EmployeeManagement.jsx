import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

const EmployeeManagement = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const rankRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const imageRef = useRef();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/manager/employee/fetch"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("username", usernameRef.current.value);
    formDataToSend.append("password", passwordRef.current.value);
    formDataToSend.append("rank", rankRef.current.value);
    formDataToSend.append("address", addressRef.current.value);
    formDataToSend.append("phone", phoneRef.current.value);
    formDataToSend.append("image", imageRef.current.files[0]);

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/manager/employee/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Data submitted successfully!");
      fetchUsers(); // Refresh users without reloading
    } catch (error) {
      console.error("Error submitting form", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(
          `http://127.0.0.1:8000/api/manager/employee/delete/${id}`
        );
        setUsers(users.filter((user) => user.id !== id)); // Remove user from state
        alert("User deleted successfully!");
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("An error occurred while deleting the user.");
      }
    }
  };

  return (
    <div className="container p-8 mx-auto">
      <div className="flex flex-col gap-8 p-6 bg-gray-100 rounded-lg shadow-lg md:flex-row">
        {/* Form Section */}
        <form
          className="w-full p-6 bg-white rounded-lg shadow-md md:w-1/2"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-4 text-2xl font-semibold text-red-500">Add User</h2>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700">
              Username
            </label>
            <input
              type="text"
              ref={usernameRef}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              ref={passwordRef}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700">Rank</label>
            <select
              ref={rankRef}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            >
              <option value="STAFF">STAFF</option>
              <option value="CHEF">CHEF</option>
              <option value="MANAGER">MANAGER</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700">Address</label>
            <input
              type="text"
              ref={addressRef}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700">Phone</label>
            <input
              type="number"
              ref={phoneRef}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700">Image</label>
            <input
              type="file"
              ref={imageRef}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white transition duration-200 bg-red-500 rounded hover:bg-red-600"
          >
            Submit
          </button>
        </form>

        {/* Users List */}
        <div className="w-full p-6 bg-white rounded-lg shadow-md md:w-1/2">
          <h2 className="mb-4 text-2xl font-semibold text-red-500">
            Users List
          </h2>

          <div className="">
            <table className="w-full border border-collapse border-gray-300">
              <thead>
                <tr className="text-white bg-red-500">
                  <th className="p-2 border border-gray-300">Username</th>
                  <th className="p-2 border border-gray-300">Rank</th>
                  <th className="p-2 border border-gray-300">Address</th>
                  <th className="p-2 border border-gray-300">Phone</th>
                  <th className="p-2 border border-gray-300">Image</th>
                  <th className="p-2 border border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id} className="transition hover:bg-gray-100">
                      <td className="p-2 border border-gray-300">
                        {user.username}
                      </td>
                      <td className="p-2 border border-gray-300">
                        {user.rank}
                      </td>
                      <td className="p-2 border border-gray-300">
                        {user.address}
                      </td>
                      <td className="p-2 border border-gray-300">
                        {user.phone}
                      </td>
                      <td className="p-2 border border-gray-300">
                        {user.image ? (
                          <a
                            href={user.image}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={user.image}
                              alt="User"
                              className="object-cover w-12 h-12 rounded"
                            />
                          </a>
                        ) : (
                          "No Image"
                        )}
                      </td>
                      <td className="p-2 border border-gray-300">
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="px-4 py-1 text-white transition bg-red-500 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="p-4 text-center text-gray-500">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
