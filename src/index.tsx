import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Example from "./components/hook/hook.component";
import reportWebVitals from "./reportWebVitals";
import {createRoot} from "react-dom/client";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// constructor
// App.tsx:46 render
// App.tsx:26 componentDidMount
// App.tsx:26 componentDidMount
// App.tsx:46 render
// react_devtools_backend.js:4029 render
// App.tsx:46 render

// ReactDOM.render(
//   <React.StrictMode>
//     <App2 />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // constructor
// // VM8414:249 render
// // App.tsx:26 componentDidMount
// // App.tsx:46 render

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
