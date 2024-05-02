import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import LoginPage from "../pages/UnAuthen/LoginPage";
import HomePage from "../pages/App/HomePage";
import BoardPage from "../pages/App/BoardPage";
import RootLayout from "../layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/boards',
        element: <BoardPage />
      }
    ]
  },
]);

const AppRouter = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default AppRouter
