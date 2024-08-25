import { createBrowserRouter } from "react-router-dom";

//? import pages
import App from "../App";
import Layout from "../pages/Layout";

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
          path: "/locations",
          element: <h1> locations </h1>,
        },
        {
          path: "/episodes",
          element: <h1> episodes </h1>,
        },
      ],
    },
  ]);
};
