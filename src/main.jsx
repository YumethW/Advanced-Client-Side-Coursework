import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import PropertyDetails1 from "./PropertyDetail/PropertyDetails1.jsx";
import PropertyDetails2 from "./PropertyDetail/PropertyDetails2.jsx";
import PropertyDetails3 from "./PropertyDetail/PropertyDetails3.jsx";
import PropertyDetails4 from "./PropertyDetail/PropertyDetails4.jsx";
import PropertyDetails5 from "./PropertyDetail/PropertyDetails5.jsx";
import PropertyDetails6 from "./PropertyDetail/PropertyDetails6.jsx";
import PropertyDetails7 from "./PropertyDetail/PropertyDetails7.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "properties/prop1",
    element: <PropertyDetails1 />,
  },

  {
    path: "properties/prop2",
    element: <PropertyDetails2 />,
  },

  {
    path: "properties/prop3",
    element: <PropertyDetails3 />,
  },

  {
    path: "properties/prop4",
    element: <PropertyDetails4 />,
  },

  {
    path: "properties/prop5",
    element: <PropertyDetails5 />,
  },

  {
    path: "properties/prop6",
    element: <PropertyDetails6 />,
  },

  {
    path: "properties/prop7",
    element: <PropertyDetails7 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
