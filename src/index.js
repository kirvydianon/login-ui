import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./Auth/ContextProvider";
import axios from "axios";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
