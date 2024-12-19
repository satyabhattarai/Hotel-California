import AddExtraItem from "./components/AddExtraItem";
import App from "./App";
import Cart from "./pages/cart";
import Chef from "./pages/chef";
import ChefPortal from "./components/Chef/ChefPortal";
import ExtraItemsDashboard from "./components/Waiter/ExtraItemDashboard";
import Fetch from "./components/Fetch";
import Home from "./pages/home";
import Login from "./pages/login";
import ManagerDashboard from "./components/Manager/ManagerDashboard";
import Menu from "./pages/menu";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Reservation from "./pages/reservation";
import ReservationDashboard from "./components/Waiter/ReservationDashboard";
import WaiterDashboard from "./components/Waiter/WaiterDashboard";
import Wishlist from "./pages/whishlist";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "fetch",
        element: <Fetch />,
      },
      {
        path: "chef",
        element: <Chef />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "reservationdashboard",
        element: <ReservationDashboard />,
      },
      {
        path: "waiterdashboard",
        element: <WaiterDashboard />,
      },
      {
        path: "addextraitem",
        element: <AddExtraItem />,
      },
      {
        path: "extraitemsdashboard",
        element: <ExtraItemsDashboard />,
      },
      {
        path: "chefportal",
        element: <ChefPortal />,
      },
      {
        path: "managerdashboard",
        element: <ManagerDashboard />,
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
