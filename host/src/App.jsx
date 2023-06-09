import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import NavBar from "navBar/NavBar";
import Colorlist from "colorlist/ColorList";
import ColorPicker from "colorPicker/ColorPicker";
import {useColor} from "colorPicker/useColor";
import {store} from 'store/store'
import {StoreProvider} from 'store/store'

import {Provider} from 'react-redux'

const App = () =>  {
  
  const {colorsList,handelSaveColor, handelPickerChanges, color} = useColor();
  
  return (
  <>
      <StoreProvider store={store}>
      <NavBar/>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4" >
          <Colorlist colorsList={colorsList}  />
          </div>
          <div className="col-12 col-md-8" >
          <ColorPicker handelSaveColor={handelSaveColor} handelPickerChanges={handelPickerChanges} 
            color={color} />

          </div>
        </div>
      </div>
      </StoreProvider>
  </>
);
}
ReactDOM.render(<App />, document.getElementById("app"));
