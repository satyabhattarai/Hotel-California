import { useEffect, useState } from "react";

import Menuoverview from "../Menuoverview";
import OrdersDashboard from "../OrdersDashboard";
import React from "react";
import axios from "axios";
import { useStateContext } from "../../ContextProvider";
const Menu = () => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  const [MenuItems, set_MenuItems] = useState([]);
  const [overview, setoverview] = useState();
  const [orderItems, setOrderItems] = useState([]);
  const { orders, setshoworders } = useStateContext();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get(baseUrl + "/api/menu");
      console.log(response.data);
      set_MenuItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
    <div className="m-8">
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
      <div className="grid items-center justify-between grid-cols-1 gap-8 mb-12 lg:grid-cols-2 md:grid-cols-1">
        {MenuItems?.filter((menu) => {
          if (selectedCategory === categories[0].name) {
            return true;
          } else {
            return menu.category === selectedCategory;
          }
        })?.map((menu, index) => (
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
              <p className="price">Rs. {menu.price}</p>
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
            setOrders={setOrderItems}
          />
        )}
      </div>
      <div className="flex justify-center w-full">
        <button
          className="px-8 py-4 text-white bg-red-500"
          onClick={() => {
            setshoworders(true);
          }}
        >
          SEE YOUR ORDERS
        </button>
      </div>
      {orders && (
        <OrdersDashboard setshoworders={setshoworders} orders={orderItems} />
      )}
    </div>
  );
};

export default Menu;
