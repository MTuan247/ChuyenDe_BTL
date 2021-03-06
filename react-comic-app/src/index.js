import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Constant } from "./resources";
import { Enumeration } from "./resources";
import Spinner from "./components/base-component/Spinner";
import MessageBox from "./components/base-component/MessageBox";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-widgets/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Spinner />
    <MessageBox />
    <App />
  </Provider>
  // </React.StrictMode>
);

window.Constant = Constant;
window.Enumeration = Enumeration;

reportWebVitals();
