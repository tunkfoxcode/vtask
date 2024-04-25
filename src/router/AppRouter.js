import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import LoginPage from "../pages/UnAuthen/LoginPage";
import HomePage from "../pages/App/HomePage";
import BoardPage from "../pages/App/BoardPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/board",
    element: <BoardPage />
  }
]);

const AppRouter = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default AppRouter
