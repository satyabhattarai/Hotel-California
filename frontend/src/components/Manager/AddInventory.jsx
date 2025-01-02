import React, { useState } from "react";

const AddInventory = () => {
  const [inventoryData, setInventoryData] = useState({
    itemName: "",
    price: "",
    quantity: "",
    expectedTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Item added to inventory!");
    // Add your logic to process the inventory data here
    console.log(inventoryData);
  };

  return (
    <div className="w-full mx-auto mb-24">
      <h2 className="mb-6 text-3xl font-bold text-center text-gray-700">
        Inventory Management
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Item Name */}
        <div>
          <label
            htmlFor="itemName"
            className="block text-sm font-semibold text-gray-700"
          >
            Item Name
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={inventoryData.itemName}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter item name (e.g., Rice, Water)"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-semibold text-gray-700"
          >
            Price (per unit)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={inventoryData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter price"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-semibold text-gray-700"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={inventoryData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter quantity"
            required
          />
        </div>

        {/* Expected Time */}
        <div>
          <label
            htmlFor="expectedTime"
            className="block text-sm font-semibold text-gray-700"
          >
            Expected Time (in days)
          </label>
          <input
            type="number"
            id="expectedTime"
            name="expectedTime"
            value={inventoryData.expectedTime}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter expected time"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInventory;
