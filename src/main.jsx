import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./components/AuthProvider.jsx";
import "./index.css";
import Root from "./layout/Root.jsx";
import router from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>
      <Root></Root>
    </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
