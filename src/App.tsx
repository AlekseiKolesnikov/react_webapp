import React, {useEffect} from 'react';
import './styles/App.scss';
import GameChoice from "./pages/GameChoice";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import HangmanLevels from "./pages/Hangman/HangmanLevels";
import MemoryLevels from "./pages/Memory/MemoryLevels";
import MemoryPlayground from "./pages/Memory/MemoryPlayground";
import {Telegram} from "telegram-web-app-for-bot";
import SwitchLoading from "./pages/SwitchLoading";
import {GameProvider} from "./hooks/useSwitch";

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
    }, [])

    return (
        <div className={"wrapper"}>
            <Routes>
                <Route path="/games" element={<GameChoice/>}/>
                <Route path="/memory_levels" element={<MemoryLevels/>}/>
                <GameProvider>
                    <Route path="/hangman_levels" element={<HangmanLevels/>}/>
                    <Route path="/loader/:level" element={<SwitchLoading/>}/>
                </GameProvider>
                <Route path="/memory_game" element={<MemoryPlayground/>}/>
            </Routes>
        </div>
    );
}

export default App;
