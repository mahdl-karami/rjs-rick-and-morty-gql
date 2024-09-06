import { createBrowserRouter } from "react-router-dom";

//? import pages
import App from "../App";
import Layout from "../pages/Layout";
import Bookmarks from "../pages/Bookmarks";
import Locations from "../pages/Locations";

export const router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/locations/:locId",
          element: <Locations />,
        },
        {
          path: "/locations",
          element: <h1> locations </h1>,
        },
        {
          path: "/episodes",
          element: <h1> episodes </h1>,
        },
        {
          path: "/bookmarks",
          element: <Bookmarks />,
        },
      ],
    },
  ]);
};
