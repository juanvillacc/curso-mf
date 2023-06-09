import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Colorlist from "./components/colorlist";

const colorList= ["#32a852", "#063613", "#e30291"]

const App = () => (
  
    <Colorlist  colorList={colorList} />
  
);

ReactDOM.render(<App />, document.getElementById("app"));
