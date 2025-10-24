import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Products from "./Products.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Employees from "./Employees.jsx";
import Login from "./Login.jsx";
import MyTodos from "./MyTodos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/employees",
        element: <Employees></Employees>,
      },
      {
        path: "/todos",
        element: <MyTodos></MyTodos>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
