import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Colorpicker from "./components/colorpicker";  

const App = () => (
  <Colorpicker/>
);
ReactDOM.render(<App />, document.getElementById("app"));
