import AddEmployee from "./components/Manager/EmployeeManagement";
import AddExtraItem from "./components/AddExtraItem";
import AddInventory from "./components/Manager/AddInventory";
import AddMenu from "./components/Manager/MenuManagement";
import App from "./App";
import Attendance from "./components/Manager/Attendance";
import Cart from "./pages/cart";
import ChefDashboard from './components/Chef/Dashboard';
import ChefRequest from './components/Chef/Request';
import ChefSidebar from './components/Chef/Sidebar';
import ChefView from './components/Chef/View';
import CleaningAlert from "./components/Waiter/CleaningAlert";
import ClientDashboard from "./components/Client/Dashboard";
import ClientHistory from "./components/Client/History";
import ClientMenu from "./components/Client/Menu";
import ClientPayment from "./components/Client/Payment";
import ClientSidebar from "./components/Client/Sidebar";
import EmployeeManagement from "./components/Manager/EmployeeManagement";
import Fetch from "./components/Fetch";
import Home from "./pages/home";
import ItemsAlert from "./components/Waiter/ItemsAlert";
import Login from "./pages/login";
import ManagerDashboard from "./components/Manager/Dashboard";
import ManagerHistory from "./components/Manager/History";
import ManagerSidebar from "./components/Manager/Sidebar";
import Menu from "./pages/menu";
import MenuManagement from "./components/Manager/MenuManagement";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Reservation from "./pages/reservation";
import Reviews from "./components/Waiter/Reviews";
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
        element: <ChefSidebar />,
        children: [
          {
            index: true,
            element: <ChefDashboard />,
          },
          {
            path: "dashboard",
            element: <ChefDashboard />,
          },
          {
            path: "view_orders",
            element: <ChefView />,
          },
          {
            path: "request",
            element: <ChefRequest />,
          },
        ],
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
        path: "manager",
        element: <ManagerSidebar />,
        children: [
          {
            index: true,
            element: <ManagerDashboard />,
          },
          {
            path: "dashboard",
            element: <ManagerDashboard />,
          },
          {
            path: "menu_management",
            element: <MenuManagement />,
          },
          {
            path: "history",
            element: <ManagerHistory />,
          },
          {
            path: "employee_management",
            element: <EmployeeManagement />,
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
