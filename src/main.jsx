import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./global.css";

//! redux
import { Provider } from "react-redux";
import { store } from "./app/store.js";

//! apollo client
import { ApolloProvider } from "@apollo/client";
import { client } from "./gql/client.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);
