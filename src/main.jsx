import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Layouts/MainLayout";
import ListedBooks from "./Pages/ListedBooks";
import PagesToRead from "./Pages/PagesToRead";
import BookDetails from "./Components/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("Data.json"),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
      },
      {
        path: "/pagestoread",
        element: <PagesToRead />,
      },
      {
        path: "/details/:bookId",
        element: <BookDetails />,
        loader: () => fetch("../Data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
