import React, {useEffect, useRef, useState} from 'react';
import Button from "../../components/UI/Button";
import {useLocation, useNavigate} from "react-router-dom";
import '../../styles/Hangman/HangmanLevels.scss'
import getWord from "../../lib/getWord";

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
             className={`choose_level _buttons_flex_container ${renderTransition.current}`}>
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