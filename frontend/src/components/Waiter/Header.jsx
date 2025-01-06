import { Link } from "react-router-dom";

const Header = () => {
  const user = localStorage.getItem("STAFF");

  return (
    <div className="w-screen">
      <div className=" flex bg-[#c74040] w-full h-[35px] items-center gap-8 px-8 drop-shadow-md ">
        <span>7:30 AM to 9:30 PM</span> <span>+977 9847039601</span>
      </div>
      <nav className=" sticky z-50 top-0 flex justify-between items-center h-[119px] drop-shadow-xl font-bold bg-[#FFF8EE] px-32">
        <div className="flex items-center gap-2">
          <img className="px-8" src="Images/logo.svg" alt="picture" />
          <div className="uppercase">Hotel california</div>
        </div>

        <div className="flex gap-8 mr-8">
          {user && (
            <div className="flex items-center justify-center gap-5">
              <button
                className="animated-button"
                onClick={() => {
                  window.location.href = "/waiter";
                }}
              >
                {user}
              </button>
              <div
                onClick={() => {
                  localStorage.removeItem("STAFF");
                  window.location.href = "/";
                }}
                className="cursor-pointer hover:text-red-500"
              >
                log out
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
