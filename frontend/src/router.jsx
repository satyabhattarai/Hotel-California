import App from "./App";
import Cart from "./pages/cart";
import Chef from "./pages/chef";
import Fetch from './components/Fetch';
import Home from "./pages/home";
import Login from "./pages/login";
import Menu from "./pages/menu";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Reservation from './pages/reservation'
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
                element: <Fetch/>,
            },
            {
                path: "chef",
                element: <Chef />,
            },
            {
                path: "reservation",
                element: <Reservation />,
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
