import React from "react";

export default function Menuoverview({ overview, setoverview, menu }) {
  const handleAddToCart = () => {
    alert("Item added to cart!"); // Replace this with actual cart logic
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Popup container */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-[90%] max-w-[600px]">
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            className="text-xl font-bold text-red-500 hover:text-red-700"
            onClick={() => setoverview(false)}
          >
            &times;
          </button>
        </div>
        {/* Content */}
        <div className="flex flex-col items-center gap-4 p-6 text-center">
          {/* Static Menu image */}
          <img
            src="https://picsum.photos/500"
            alt="Grilled Salmon"
            className="object-cover w-full h-auto rounded-lg"
          />
          {/* Static Menu details */}
          <h2 className="text-2xl font-bold">{menu.name}</h2>
          <p className="text-gray-600">{menu.desc}</p>
          <p className="text-xl font-semibold text-red-500">{menu.price}</p>
          <p className="text-sm text-gray-500">Category:{menu.category}</p>
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
