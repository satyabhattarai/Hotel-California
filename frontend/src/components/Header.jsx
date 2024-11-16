import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-screen -mx-32">
            <div className=" flex bg-[#c74040] w-full h-[35px] items-center gap-8 px-8 drop-shadow-md ">
                <span>7:30 AM to 9:30 PM</span> <span>+977 9847039601</span>
            </div>
            <nav className=" sticky z-50 top-0 flex justify-between items-center h-[119px] drop-shadow-xl font-bold bg-[#FFF8EE] px-32">
                <div className="flex items-center gap-2">
                    <img className="px-8" src="Images/logo.svg" alt="picture" />
                    <div className="uppercase">Hotel california</div>
                </div>
                <ul className="flex gap-8 uppercase">
                    <li className="border-b-2 border-transparent hover:border-[#CC3333] transition-all duration-100 ease-in-out p-2">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="border-b-2 border-transparent hover:border-[#CC3333] transition-all duration-100 ease-in-out p-2">
                        <Link to="menu">Menu</Link>
                    </li>

                    <li className="border-b-2 border-transparent hover:border-[#CC3333] transition-all duration-100 ease-in-out p-2">
                        <a href="/">About Us</a>
                    </li>
                    <li className="border-b-2 border-transparent hover:border-[#CC3333] transition-all duration-100 ease-in-out p-2">
                        <a href="/">Contact Us</a>
                    </li>
                </ul>
                <div className="flex gap-8 mr-8">
                    <Link to="/login">
                        <button className="animated-button">Login</button>
                    </Link>
                    <Link to="/cart">
                        <button className="animated-button">Cart</button>
                    </Link>
                    <Link to="/wishlist">
                        <button className="animated-button">wishlist</button>
                    </Link>
                    <Link to="/profile">
                        <button className="animated-button">profile</button>
                    </Link>
                    <Link to="/form">
                        <button className="animated-button">Form</button>
                    </Link>
                    <Link to="/chef">
                        <button className="animated-button">chef</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
