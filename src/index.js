import React , {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CountDown from "./CountDown";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(<CountDown hours="1" minutes="45" />, document.getElementById('root'));
