import AddEmployee from "./components/Manager/AddEmployee";
import AddExtraItem from "./components/AddExtraItem";
import AddInventory from "./components/Manager/AddInventory";
import AddMenu from "./components/Manager/AddMenu";
import App from "./App";
import Attendance from "./components/Manager/Attendance";
import Cart from "./pages/cart";
import Chef from "./pages/chef";
import ChefPortal from "./components/Chef/ChefPortal";
import CleaningAlert from "./components/Waiter/CleaningAlert";
import ClientDashboard from "./components/Client/Dashboard";
import ClientHistory from "./components/Client/History";
import ClientMenu from "./components/Client/Menu";
import ClientPayment from "./components/Client/Payment";
import ClientSidebar from "./components/Client/Sidebar";
import Dashboard from "./components/Manager/Dashboard";
import Fetch from "./components/Fetch";
import Home from "./pages/home";
import ItemsAlert from "./components/Waiter/ItemsAlert";
import Login from "./pages/login";
import Menu from "./pages/menu";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Reservation from "./pages/reservation";
import Reviews from "./components/Waiter/Reviews";
import Rewards from "./components/Manager/Rewards";
import TableOverview from "./components/Waiter/TableOverview";
import TableReserved from "./components/Waiter/TableReserved";
import TableStatus from "./components/Waiter/TableStatus";
import WaiterDashboard from "./components/Waiter/WaiterDashboard";
import Wishlist from "./pages/whishlist";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/:id?",
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
        path: "addextraitem",
        element: <AddExtraItem />,
      },

      {
        path: "chefportal",
        element: <ChefPortal />,
      },

      {
        path: "manager",
        element: <Dashboard />,

        children: [
          // { called sidebar in dashboard instead
          //   index: true,
          //   element: <Sidebar />,
          // },
          {
            path: "addinventory",
            element: <AddInventory />,
          },
          {
            path: "attendance",
            element: <Attendance />,
          },
          {
            path: "addemployee",
            element: <AddEmployee />,
          },
          {
            path: "addmenu",
            element: <AddMenu />,
          },
          {
            path: "rewards",
            element: <Rewards />,
          },
        ],
      },
      {
        path: "client",
        element: <ClientSidebar />,
        children: [
          {
            index: true,
            element: <ClientDashboard />,
          },
          {
            path: "dashboard",
            element: <ClientDashboard />,
          },
          {
            path: "menu",
            element: <ClientMenu />,
          },
          {
            path: "payment",
            element: <ClientPayment />,
          },
          {
            path: "history",
            element: <ClientHistory />,
          },
        ],
      },

      {
        path: "waiter",
        element: <WaiterDashboard />,
        children: [
          {
            path: "reviews",
            element: <Reviews />,
          },
          {
            path: "cleaningalert",
            element: <CleaningAlert />,
          },
          {
            path: "itemsalert",
            element: <ItemsAlert />,
          },
          {
            path: "tablereserved",
            element: <TableReserved />,
          },
          {
            path: "tablestatus",
            element: <TableStatus />,
          },
          {
            path: "tableoverview/:tableId",
            element: <TableOverview />,
          },
        ],
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
