import React, {useEffect} from 'react';
import './styles/App.scss';
import GameChoice from "./pages/GameChoice";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import HangmanLevels from "./pages/Hangman/HangmanLevels";
import MemoryLevels from "./pages/Memory/MemoryLevels";
import HangmanPlayground from "./pages/Hangman/HangmanPlayground";
import MemoryPlayground from "./pages/Memory/MemoryPlayground";
import {Telegram} from "telegram-web-app-for-bot";

const App = () => {
    const location = useLocation();
    const navigation = useNavigate();

    useEffect(() => {
        if (location.pathname === '/games') {
            Telegram.BackButton.hide()
        } else {
            Telegram.BackButton.show()
        }
    }, [location])

    useEffect(() => {
        Telegram.BackButton.onClick(() => {
            navigation(-1)
        })
    })

    return (
        <div className={"wrapper"}>
            <Routes>
                <Route path="/games" element={<GameChoice/>} />
                <Route path="/hangman_levels" element={<HangmanLevels/>} />
                <Route path="/memory_levels" element={<MemoryLevels/>} />
                <Route path="/hangman_game/:level" element={<HangmanPlayground />} />
                <Route path="/memory_game/:level" element={<MemoryPlayground/>} />
            </Routes>
        </div>
    );
}

export default App;
