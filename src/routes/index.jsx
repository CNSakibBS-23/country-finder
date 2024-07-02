import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import CountryDetails from "../Pages/CountryDetails";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/country/:name",
        element: <CountryDetails />,
      },
    ],
  },
]);
