import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Layouts/MainLayout";
import ListedBooks from "./Pages/ListedBooks";
import PagesToRead from "./Pages/PagesToRead";
import BookDetails from "./Components/BookDetails";
import ReadBooks from "./Components/ReadBooks";
import Wishlist from "./Components/Wishlist";
import { Toaster } from "react-hot-toast";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error></Error>,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/Data.json"),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch("/Data.json"),
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/pagestoread",
        element: <PagesToRead />,
        loader: () => fetch("/Data.json"),
      },

      {
        path: "/details/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/Data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
