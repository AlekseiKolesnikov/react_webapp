import React from 'react';
import './App.scss';
import {GameChoiceButtonsComponent} from "./components/GameChoiceButtonsComponent/GameChoiceButtonsComponent";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
      
      <div className={"wrapper"}>
          <GameChoiceButtonsComponent/>
      </div>
  );
}

export default App;
