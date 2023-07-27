import React from 'react';
import './App.scss';
import GameChoiceButtonsComponent from "./components/GameChoiceButtonsComponent/GameChoiceButtonsComponent";
import {Route, Routes} from "react-router-dom";
import HangmanLevels from "./pages/hangman_levels/HangmanLevels";
import MemoryLevels from "./pages/memory_levels/MemoryLevels";

const App = () => {
  return (
      <div className={"wrapper"}>
          <Routes>
              <Route path="/games"
                     element={<GameChoiceButtonsComponent />}>
              </Route>
              <Route path="/hangman_levels"
                     element={<HangmanLevels />}>
              </Route>
              <Route path="/memory_levels"
                     element={<MemoryLevels />}>
              </Route>
          </Routes>
      </div>
  );
}

export default App;
