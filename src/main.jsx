import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roor from "./layout/Roor.jsx";
import Home from "./components/Home.jsx";
import login from "./components/login.jsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Roor,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'login',
        Component: login,
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </StrictMode>,
);
