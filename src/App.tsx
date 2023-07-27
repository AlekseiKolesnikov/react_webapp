import React, {useEffect} from 'react';
import './App.scss';
import GameChoiceButtonsComponent from "./components/GameChoiceButtonsComponent/GameChoiceButtonsComponent";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import HangmanLevels from "./pages/hangman_levels/HangmanLevels";
import MemoryLevels from "./pages/memory_levels/MemoryLevels";

const App = () => {
    const location = useLocation();
    const navigation = useNavigate();

    useEffect(() => {
        if (location.pathname === '/games') {
            Telegram.WebApp.BackButton.hide()
        } else {
            Telegram.WebApp.BackButton.show()
        }
    }, [location])

    useEffect(() => {
        Telegram.WebApp.BackButton.onClick(() => {
            navigation(-1)
        })
    })

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
