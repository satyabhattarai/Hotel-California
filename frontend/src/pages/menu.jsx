import { useEffect, useState } from "react";

import Menuoverview from "../components/Menuoverview";
import OrdersDashboard from "../components/OrdersDashboard";
import axios from "axios";
import { useStateContext } from "../ContextProvider";

// // import PizzaMenu from '../components/PizzaMenu';

export default function Menu() {
  const [MenuItems, set_MenuItems] = useState([]);
  const [overview, setoverview] = useState();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/menu");
      console.log(response.data);
      set_MenuItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const { orders, setshoworders } = useStateContext();
  const { cleaningalert, setcleaningalert } = useStateContext();
  const handleCleaningAlert = () => {
    // Set the cleaning alert to true
    setcleaningalert(true);

    // Show the alert message
    alert("Alert sent successfully");
  };
  const categories = [
    { name: "All" },
    { name: "Breakfast" },
    { name: "Momo" },
    { name: "Pizza" },
    { name: "Burger" },
    { name: "Drinks" },
    { name: "Desserts" },
    { name: "Salads" },
    { name: "Appetizers/Starters" },
    { name: "Soups" },
    { name: "Pasta" },
    { name: "Sandwiches" },
    { name: "Wraps & Rolls" },
    { name: "Seafood" },
    { name: "Steak & Grills" },
    { name: "Sides" },
    { name: "Vegan/Vegetarian" },
    { name: "Kids Menu" },
    { name: "Combo Meals" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [selectedmenu, setselectedmenu] = useState(null);
  return (
    <div className="">
      <div className="h-[300px] w-screen ">
        <img
          className="object-cover w-full h-full"
          src="Images/Food.jpg"
          alt="menu"
        />
      </div>
      {/* <!-- first part --> */}
      <div className="flex flex-col items-center justify-between gap-8 py-8 lg:py-16 lg:flex-row">
        <div className="flex-shrink-0">
          <img src="https://picsum.photos/500/200" alt="picture" className="" />
        </div>
        <div className="lg:max-w-[50%] text-justify max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </div>
      {/* <!-- second part --> */}
      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="flex gap-8">
          <img src="https://picsum.photos/200/200" alt="" />
          <img src="https://picsum.photos/200/200" alt="" />
        </div>
        <button
          className=" animated-button-secondary"
          onClick={() => handleCleaningAlert()}
        >
          Cleaning Alert
        </button>
      </div>

      <div className="text-[#c74040] text-4xl font-bold text-center py-16">
        Menu
      </div>
      <div className="flex flex-wrap gap-4 pb-8 lg:gap-8 lg:pb-8 lg:p-2">
        {categories.map((cat, index) => (
          <span
            key={index}
            className={`inline-block text-xl cursor-pointer py-2 px-4 ${
              cat.name === selectedCategory ? "bg-red-100" : "bg-gray-200"
            }`}
            onClick={() => {
              setSelectedCategory(cat.name);
            }}
          >
            {cat.name}
          </span>
        ))}
      </div>
      <div className="grid items-center justify-between grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">

        {MenuItems?.filter((menu) => {
          if (selectedCategory === categories[0].name) {
            return true;
          } else {
            return menu.category === selectedCategory;
          }
        }).map((menu, index) => (
          <div
            className="card"
            key={index}
            onClick={() => {
              setoverview(true);
              setselectedmenu(menu);
            }}
          >
            <div className="content">
              <div className="title">{menu.name}</div>
              <p className="description">{menu.desc}</p>
              <p className="price">${menu.price}</p>
              <p className="category">{menu.category}</p>
            </div>
            <div className="image-container">
              <img src={menu.image} alt={menu.alt} className="food-image" />
            </div>
          </div>
        ))}
        {overview && (
          <Menuoverview
            overview={overview}
            setoverview={setoverview}
            menu={selectedmenu}
          />
        )}
      </div>
      <div className="flex justify-center w-full">
        <button
          className="px-8 py-2 text-white bg-red-500"
          onClick={() => {
            setshoworders(true);
          }}
        >
          SEE YOUR ORDERS
        </button>
      </div>
      {orders && <OrdersDashboard setshoworders={setshoworders} />}
    </div>
  );
}
