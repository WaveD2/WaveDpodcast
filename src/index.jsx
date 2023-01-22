import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={App} />
);