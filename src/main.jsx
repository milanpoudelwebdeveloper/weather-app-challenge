import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UnitContextProvider from "./Context/UnitContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UnitContextProvider>
        <App />
        <ToastContainer />
      </UnitContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
