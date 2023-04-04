import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from "react-router-dom";

import "./styles/index.scss";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
