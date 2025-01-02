import React, { useState } from "react";

export default function Menuoverview({
  overview,
  setoverview,
  menu,
  setOrders,
}) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity <= 0) {
      alert("Quantity must be at least 1.");
      return;
    }

    setOrders((prev) => [
      ...prev,
      {
        user_number: localStorage.getItem("PHONE"),
        name: menu.name,
        table_number: localStorage.getItem("TABLE_NUMBER"),
        quantity: quantity,
        price: menu.price,
        desc: menu.desc,
        waiting_time: menu.waiting_time,
        status: "PENDING",
      },
    ]);
    alert("Item added to cart!");
    setoverview(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-[90%] max-w-[600px]">
        <div className="flex justify-end p-4">
          <button
            className="text-xl font-bold text-red-500 hover:text-red-700"
            onClick={() => setoverview(false)}
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center gap-4 p-6 text-center">
          <img
            src={menu.image}
            alt="Menu Item"
            className="object-cover w-full h-auto rounded-lg"
          />
          <h2 className="text-2xl font-bold">{menu.name}</h2>
          <p className="text-gray-600">{menu.desc}</p>
          <p className="text-xl font-semibold text-red-500">${menu.price}</p>
          <p className="text-sm text-gray-500">Category: {menu.category}</p>
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="px-4 py-2 text-lg font-semibold text-gray-700 border rounded-lg">
              {quantity}
            </span>
            <button
              className="px-3 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
