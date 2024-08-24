import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./global.css";

//! redux
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
