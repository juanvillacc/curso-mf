import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import NavBar from "./components/NavBar";

const App = () => (
  <div className="container">
    <NavBar/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
