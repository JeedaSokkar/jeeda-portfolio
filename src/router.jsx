import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../src/layout/MainLayout"
import Home from "../src/page/home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ]
     
      
  }

]);
export default router;