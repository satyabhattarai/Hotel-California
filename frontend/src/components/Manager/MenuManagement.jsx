import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

const MenuManagement = () => {
  const nameRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const altRef = useRef();
  const waitingTimeRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const ingredientsRef = useRef();

  const categories = [

    "Breakfast",
    "Momo",
    "Pizza",
    "Burger",
    "Drinks",
    "Desserts",
    "Salads",
    "Appetizers/Starters",
    "Soups",
    "Pasta",
    "Sandwiches",
    "Wraps & Rolls",
    "Seafood",
    "Steak & Grills",
    "Sides",
    "Vegan/Vegetarian",
    "Kids Menu",
    "Combo Meals",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", nameRef.current.value);
    data.append("image", imageRef.current.files[0]);
    data.append("category", categoryRef.current.value);
    data.append("alt", altRef.current.value);
    data.append("waiting_time", waitingTimeRef.current.value);
    data.append("desc", descRef.current.value);
    data.append("price", priceRef.current.value);
    data.append("ingredients", ingredientsRef.current.value);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/manager/menu/add",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert(response.data.message);
      window.location.reload();


    } catch (error) {
      console.error("Error uploading menu item:", error);
      alert("Failed to upload menu item.");
    }
  };

  const [menuItems, setMenuItems] = useState([]);
  const deleteRef = useRef();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/menu");
      setMenuItems(response.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  const deleteMenuItem = async () => {
    const menuId = deleteRef.current.value;

    if (!menuId) {
      alert("Please enter a valid menu ID to delete.");
      return;
    }

    try {
      const response = await axios.delete(
        "http://127.0.0.1:8000/api/manager/menu/delete",
        {
          data: { id: menuId },
        }
      );

      alert(response.data.message);
      fetchMenu();
      deleteRef.current.value = "";
    } catch (error) {
      console.error("Error deleting menu item:", error);
      alert("Failed to delete menu item.");
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-6 mx-auto mt-10 bg-white rounded-lg shadow-md ">
        <h2 className="mb-4 text-2xl font-bold text-center">Add Menu Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={nameRef}
            placeholder="Food Name"
            required
            className="w-full p-2 mb-3 border rounded"
          />

          <input
            type="file"
            ref={imageRef}
            accept="image/*"
            required
            className="w-full p-2 mb-3 border rounded"
          />

          <select
            ref={categoryRef}
            required
            className="w-full p-2 mb-3 border rounded"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            type="text"
            ref={altRef}
            placeholder="Image Alt Text (Optional)"
            className="w-full p-2 mb-3 border rounded"
          />

          <input
            type="number"
            ref={waitingTimeRef}
            placeholder="Waiting Time (minutes)"
            className="w-full p-2 mb-3 border rounded"
          />

          <textarea
            ref={descRef}
            placeholder="Description"
            className="w-full p-2 mb-3 border rounded"
          ></textarea>

          <input
            type="number"
            ref={priceRef}
            placeholder="Price ($)"
            required
            className="w-full p-2 mb-3 border rounded"
          />

          <textarea
            ref={ingredientsRef}
            placeholder="Ingredients (comma-separated)"
            className="w-full p-2 mb-3 border rounded"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 font-bold text-white bg-red-500 rounded"
          >
            Add Menu Item
          </button>
        </form>
      </div>

      <div className="w-1/2 mx-auto mt-10">
        <h2 className="mb-6 text-2xl font-bold text-center">Menu List</h2>

        {/* DELETE MENU FORM */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <input
            type="number"
            ref={deleteRef}
            placeholder="Enter Menu ID to Delete"
            className="w-1/2 p-2 border rounded"
          />
          <button
            onClick={deleteMenuItem}
            className="px-4 py-2 font-bold text-white bg-red-500 rounded"
          >
            Delete
          </button>
        </div>

        {/* MENU LIST */}
        <div className="grid grid-cols-2 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.alt || item.name}
                className="object-cover w-full h-40 mb-3 rounded"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.category}</p>
              <p className="font-bold text-red-500">${item.price}</p>
              <p className="text-sm text-gray-500">ID: {item.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuManagement;
