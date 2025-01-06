import App from "./App";
import Attendance from "./components/Manager/Attendance";
import ChefDashboard from "./components/Chef/Dashboard";
import ChefRequest from "./components/Chef/Request";
import ChefSidebar from "./components/Chef/Sidebar";
import ChefView from "./components/Chef/View";
import ClientDashboard from "./components/Client/Dashboard";
import ClientHistory from "./components/Client/History";
import ClientMenu from "./components/Client/Menu";
import ClientPayment from "./components/Client/Payment";
import ClientRequest from "./components/Client/Request";
import ClientSidebar from "./components/Client/Sidebar";
import EmployeeManagement from "./components/Manager/EmployeeManagement";
import Home from "./pages/home";
import Login from "./pages/login";
import ManagerAlerts from "./components/Manager/Alerts";
import ManagerDashboard from "./components/Manager/Dashboard";
import ManagerHistory from "./components/Manager/History";
import ManagerReservation from "./components/Manager/Reservation";
import ManagerSidebar from "./components/Manager/Sidebar";
import Menu from "./pages/menu";
import MenuManagement from "./components/Manager/MenuManagement";
import Reservation from "./pages/reservation";
import WaiterAlerts from "./components/Waiter/Alerts";
import WaiterDashboard from "./components/Waiter/Dashboard";
import WaiterHistory from "./components/Waiter/History";
import WaiterOverview from "./components/Waiter/View";
import WaiterReservation from "./components/Waiter/Reservation";
import WaiterSidebar from "./components/Waiter/Sidebar";
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
        path: "reservation",
        element: <Reservation />,
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
          {
            path: "request",
            element: <ClientRequest />,
          },
        ],
      },
    ],
  },
  {
    path: "waiter",
    element: <WaiterSidebar />,
    children: [
      {
        index: true,
        element: <WaiterDashboard />,
      },
      {
        path: "dashboard",
        element: <WaiterDashboard />,
      },
      {
        path: "table_overview",
        element: <WaiterOverview />,
      },
      {
        path: "reservation",
        element: <WaiterReservation />,
      },
      {
        path: "history",
        element: <WaiterHistory />,
      },
      {
        path: "alerts",
        element: <WaiterAlerts />,
      },
    ],
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
        path: "reservation",
        element: <ManagerReservation />,
      },
      {
        path: "alerts",
        element: <ManagerAlerts />,
      },
    ],
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
    path: "login",
    element: <Login />,
  },

]);

export default router;
