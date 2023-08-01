import React, {useEffect, useRef} from 'react';
import Button from "../../components/ui/Button";
import {useLocation, useNavigate} from "react-router-dom";
import getWord from "../../lib/getWord";
import {Telegram} from "telegram-web-app-for-bot";

const HangmanLevels = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const renderTransition = useRef('fadeIn')

    const level = {
        hard: 'hard',
        medium: 'medium',
        easy: 'easy'
    }

    useEffect(() => {
        renderTransition.current = 'fadeOut'
    }, [location])

    return (
        <div style={{height: '30vh'}}
             className={`_buttons_flex_container ${renderTransition.current}`}>
            <Button
                onClick={() => {
                    console.log(getWord());
                    navigation(`/hangman_game/${level.hard}`)
                }}
            >Сложный Уровень</Button>

            <Button
                onClick={() => {
                    navigation(`/hangman_game/${level.medium}`)
                }}
            >Средний Уровень</Button>

            <Button
                onClick={() => {
                    navigation(`/hangman_game/${level.easy}`)
                }}
            >Лёгкий Уровень</Button>
        </div>
    )
}

export default HangmanLevels;