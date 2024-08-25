import { createRoot } from "react-dom/client";
import "./global.css";

//! redux
import { Provider } from "react-redux";
import { store } from "./app/store.js";

//! apollo client
import { ApolloProvider } from "@apollo/client";
import { client } from "./gql/client.js";

//! react router dom
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <RouterProvider router={router()} />
    </ApolloProvider>
  </Provider>
);
