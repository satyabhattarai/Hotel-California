import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useStateContext } from "../ContextProvider";
const ExtraItemsPopup = () => {
  const [selectedCategory, setSelectedCategory] = useState("Drinks"); // Default selected category
  const { extraitemalert, setextraitemalert } = useStateContext();
  const { showItems, setShowItems } = useStateContext();
  // Items for each category
  const items = {
    Drinks: [
      { name: "Water", imgSrc: "https://via.placeholder.com/100" },
      { name: "Orange Juice", imgSrc: "https://via.placeholder.com/100" },
      { name: "Coffee", imgSrc: "https://via.placeholder.com/100" },
    ],
    Dairy: [
      { name: "Cheese", imgSrc: "https://via.placeholder.com/100" },
      { name: "Milk", imgSrc: "https://via.placeholder.com/100" },
      { name: "Yogurt", imgSrc: "https://via.placeholder.com/100" },
    ],
    Pickles: [
      { name: "Gherkins", imgSrc: "https://via.placeholder.com/100" },
      { name: "Mixed Pickles", imgSrc: "https://via.placeholder.com/100" },
      { name: "Chili Pickles", imgSrc: "https://via.placeholder.com/100" },
    ],
    Extras: [
      { name: "Fries", imgSrc: "https://via.placeholder.com/100" },
      { name: "Onion Rings", imgSrc: "https://via.placeholder.com/100" },
      { name: "Garlic Bread", imgSrc: "https://via.placeholder.com/100" },
    ],
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-red-600 ">
            Extra Toppings and Items
          </h2>
          <button
            className="text-2xl text-red-400"
            onClick={() => setShowItems(false)}
          >
            &times;
          </button>
        </div>

        {/* Categories in a Row with Underline Effect */}

        <div className="flex justify-between mb-6">
          {["Drinks", "Dairy", "Pickles", "Extras"].map((category) => (
            <div
              key={category}
              className={`text-lg font-semibold cursor-pointer text-center ${
                selectedCategory === category
                  ? "border-b-2 border-red-600 text-red-600"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Display Items for the Selected Category */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {items[selectedCategory].map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <img
                src={item.imgSrc}
                alt={item.name}
                className="object-cover w-24 h-24 mb-2 rounded-md"
              />
              <p className="text-sm">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Add Order Button */}
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
            onClick={() => {
              setextraitemalert(true);
              alert("Order Sent Successfully");
            }}
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExtraItemsPopup;
