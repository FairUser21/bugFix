import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./ProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContextProvider>
    <App />
  </ProductContextProvider>
);
