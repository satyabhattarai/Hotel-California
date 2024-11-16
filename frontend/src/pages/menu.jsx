import  { useState } from "react";

// // import PizzaMenu from '../components/PizzaMenu';

export default function Menu() {

useEffect(() => {
  
});
    const menuItems = [
        {
            src: "https://picsum.photos/200",
            alt: "Grilled Salmon",
            name: "Grilled Salmon",
            price: "$12.99",
            desc: "Grilled to perfection and topped with a lemon butter sauce.",
            category: "Snacks",
        },
        {
            src: "https://picsum.photos/200",
            alt: "Garlic Bread",
            name: "Garlic Bread",
            price: "$3.49",
            desc: "Crispy bread topped with a garlic butter spread.",
            category: "Breakfast",
        },
        {
            src: "https://picsum.photos/200",
            alt: "Margherita Pizza",
            name: "Margherita Pizza",
            price: "$9.99",
            desc: "Classic pizza topped with fresh tomatoes and mozzarella.",
            category: "Pizza",
        },
        {
            src: "https://picsum.photos/200",
            alt: "Caesar Salad",
            name: "Caesar Salad",
            price: "$7.49",
            desc: "Crisp romaine lettuce with parmesan and croutons.",
            category: "Salad",
        },
        {
            src: "https://picsum.photos/200",
            alt: "Spaghetti Bolognese",
            name: "Spaghetti Bolognese",
            price: "$10.99",
            desc: "Rich beef sauce served over al dente spaghetti.",
            category: "Pasta",
        },
        {
            src: "https://picsum.photos/205",
            alt: "Chicken Tacos",
            name: "Chicken Tacos",
            price: "$8.99",
            desc: "Grilled chicken with salsa and guacamole in a soft tortilla.",
            category: "Wraps & Rolls",
        },
        {
            src: "https://picsum.photos/206",
            alt: "Mushroom Risotto",
            name: "Mushroom Risotto",
            price: "$11.99",
            desc: "Creamy risotto with sautéed mushrooms and parmesan.",
            category: "Pasta",
        },
        {
            src: "https://picsum.photos/207",
            alt: "BBQ Ribs",
            name: "BBQ Ribs",
            price: "$15.99",
            desc: "Slow-cooked ribs topped with smoky barbecue sauce.",
            category: "Steak & Grills",
        },
        {
            src: "https://picsum.photos/208",
            alt: "Shrimp Tempura",
            name: "Shrimp Tempura",
            price: "$9.49",
            desc: "Crispy fried shrimp served with soy dipping sauce.",
            category: "Seafood",
        },
        {
            src: "https://picsum.photos/209",
            alt: "Cheeseburger",
            name: "Cheeseburger",
            price: "$7.99",
            desc: "Juicy beef patty with cheddar cheese on a toasted bun.",
            category: "Steak & Grills",
        },
    ];
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


    const [selectedCategory, setSelectedCategory] = useState(
        categories[0].name
    );

    return (
        <div className="">
            <div className="h-[300px] w-screen -mx-32">
                <img
                    className="object-cover w-full h-full"
                    src="Images/Food.jpg"
                    alt="menu"
                />
            </div>
            {/* <!-- first part --> */}
            <div className="flex flex-col items-center justify-between gap-8 py-8 lg:py-16 lg:flex-row">
                <div className="flex-shrink-0">
                    <img
                        src="https://picsum.photos/500/200"
                        alt="picture"
                        className=""
                    />
                </div>
                <div className="lg:max-w-[50%] text-justify max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </div>
            </div>

            {/* <!-- second part --> */}

            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
                <div className="flex gap-8">
                    <img src="https://picsum.photos/200/200" alt="" />
                    <img src="https://picsum.photos/200/200" alt="" />
                </div>
                <button className=" animated-button-secondary">
                    Order Now
                </button>
            </div>

            {/* for waiter page */}
            {/* <div className="grid justify-between grid-cols-5 gap-8 py-16 ">
                {menuItems.map((menuitems, index) => (
                    <div className="flex flex-col items-center p-4 text-center transition-all shadow-lg bg-white/50 hover:shadow-xl">
                        <img
                            className="object-cover"
                            src={menuitems.src}
                            alt={menuitems.alt}
                        />
                        <p className="pt-8 text-2xl border-b ">{menuitems.name}</p>
                        <p className="pt-4 text-xl font-bold">{menuitems.price}</p>
                    </div>
                ))}
            </div> */}

            {/* <!-- menu section --> */}
            <div className="text-[#c74040] text-4xl font-bold text-center py-16">
                Menu
            </div>

            <div className="flex flex-wrap gap-4 pb-8 lg:gap-8 lg:pb-8 lg:p-2">
                {categories.map((cat, index) => (
                    <span
                        key={index}
                        className={`inline-block text-xl cursor-pointer py-2 px-4 ${
                            cat.name === selectedCategory
                                ? "bg-red-100"
                                : "bg-gray-200"
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
                {/*map section*/}

                {menuItems
                    .filter((menu) => {
                        if (selectedCategory === categories[0].name) {
                            return true;
                        } else {
                            return menu.category === selectedCategory;
                        }
                    })
                    .map((menu, index) => (
                        <div className="card" key={index}>
                            <div className="content">
                                <div className="title">{menu.name}</div>
                                <p className="description">{menu.desc}</p>
                                <p className="price">{menu.price}</p>
                                <p className="category">{menu.category}</p>
                            </div>
                            <div className="image-container">
                                <img
                                    src={menu.src}
                                    alt={menu.alt}
                                    className="food-image"
                                />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
