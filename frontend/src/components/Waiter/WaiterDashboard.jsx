import { Link, useNavigate } from "react-router-dom";

import { IoIosWarning } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useStateContext } from "../../ContextProvider";

const WaiterDashboard = () => {
  const { cleaningalert, setcleaningalert } = useStateContext();
  const { extraitemalert, setextraitemalert } = useStateContext();
  useEffect(() => {
    console.log("Cleaning alert state:", cleaningalert);
    if (cleaningalert) {
      alert("Cleaning Alert received!");
      setcleaningalert(false);
      // Reset the alert state after showing the popup
    }
  }, [cleaningalert]);

  // const navigate = useNavigate();
  return (
    <>
      <div className="flex min-h-screen bg-red-50">
        {/* Sidebar */}
        <div className="w-64 p-6 text-white bg-red-600">
          <div className="mb-8 text-2xl font-bold text-center">
            Waiter Dashboard
          </div>
          <ul>
            <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
              <Link to="/waiter/cleaningalert" className="block text-lg">
                Cleaning Alerts
              </Link>
            </li>
            <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
              <Link to="/waiter/itemsalert" className="block text-lg">
                Items Alert
              </Link>
            </li>
            <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
              <Link to="tablereserved" className="block text-lg">
                Reserved Tables
              </Link>
            </li>
            <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
              <Link to="tablestatus" className="block text-lg">
                Table Status
              </Link>
            </li>
            <li className="p-2 mb-4 rounded-lg hover:bg-red-500">
              <Link to="/waiter/reviews" className="block text-lg">
                Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}

        <div className="flex-1 p-8">
          <Outlet />
          <h1 className="mb-6 text-4xl font-bold text-red-600">
            Waiter Dashboard
          </h1>

          {/* Table Reservation Section */}
          <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-red-600">
              Orders & Reservations
            </h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-red-600">
                    Full Name
                  </th>
                  <th className="px-4 py-2 text-left text-red-600">
                    Ordered Item
                  </th>
                  <th className="px-4 py-2 text-left text-red-600">
                    Waiter Assigned
                  </th>
                  <th className="px-4 py-2 text-left text-red-600">
                    Order Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">Spaghetti Bolognese</td>
                  <td className="px-4 py-2">Waiter 1</td>
                  <td className="px-4 py-2">Pending</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="px-4 py-2">Jane Smith</td>
                  <td className="px-4 py-2">Caesar Salad</td>
                  <td className="px-4 py-2">Waiter 2</td>
                  <td className="px-4 py-2">Preparing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">Emily Davis</td>
                  <td className="px-4 py-2">Grilled Salmon</td>
                  <td className="px-4 py-2">Waiter 1</td>
                  <td className="px-4 py-2">Delivered</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Available Waiters Section */}
          <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-red-600">
              Available Waiters
            </h2>
            <ul>
              <li className="mb-4">
                <p className="text-lg font-semibold">Waiter 1</p>
                <p className="text-gray-600">Contact: 123-456-7890</p>
              </li>
              <li className="mb-4">
                <p className="text-lg font-semibold">Waiter 2</p>
                <p className="text-gray-600">Contact: 987-654-3210</p>
              </li>
            </ul>
          </div>

          {/* Chef Availability Section */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-red-600">
              Chef Availability
            </h2>
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-lg font-semibold">Chef 1</p>
                <p className="text-gray-600">Available</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Chef 2</p>
                <p className="text-gray-600">Not Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {cleaningalert && (
        <div className="fixed inset-0 flex items-center justify-center h-screen">
          <div className="  w-[600px] h-[150px] bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <IoMdClose
              id="closebutton"
              className="absolute top-0 right-0 m-3 text-4xl text-white "
            />

            <p className="flex text-4xl font-bold text-center text-white p-9">
              <IoIosWarning className="text-yellow-300" />
              Table 1 is requesting table cleanup
            </p>
          </div>
        </div>
      )}
      {extraitemalert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-screen">
          <div className="  w-[600px] bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <IoMdClose
              id="closebutton"
              className="absolute top-0 right-0 m-3 text-4xl text-white "
            />
            <p className="flex text-4xl font-bold text-center text-white p-9">
              <IoIosWarning className="text-yellow-300 " />
              <span className="">Table ! Is Requesting Extra Item.</span>
            </p>
            <div className="flex justify-center mb-8 ">
              <button
                className="px-4 py-2 text-center text-black bg-gray-300 rounded "
                // onClick={() => {
                //   navigate("/");
                //   console.log("clicked");
                // }}
              >
                View Item
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WaiterDashboard;
