import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
