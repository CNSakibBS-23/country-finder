import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import CountryProvider from "./context/CountryProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CountryProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </CountryProvider>
);
