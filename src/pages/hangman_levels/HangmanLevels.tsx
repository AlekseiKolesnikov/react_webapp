import React, {useEffect, useRef, useState} from 'react';
import ButtonComponent from "../../components/UI/ButtonComponent/ButtonComponent";
import {useLocation, useNavigate} from "react-router-dom";
import './HangmanLevels.scss'

const HangmanLevels = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const renderTransition = useRef('fadeIn')
    const [maxWordLength, setMaxWordLength] = useState(12);
    const [minWordLength, setMinWordLength] = useState(0);

    useEffect(() => {
        renderTransition.current = 'fadeOut'
    }, [location])

    const createWord = (minLength: number, maxLength: number): void => {

    }

    return (
        <div style={{height: '30vh'}}
             className={`choose_level _buttons_flex_container ${renderTransition.current}`}>
            <ButtonComponent
                onClick={() => {
                    // getWordLength()
                    createWord(maxWordLength, minWordLength)
                    setMinWordLength(9)
                    setMaxWordLength(11)
                    navigation('/hangman_game')
                }}
            >Сложный Уровень</ButtonComponent>

            <ButtonComponent
                onClick={() => {
                    setMinWordLength(6)
                    setMaxWordLength(8)
                    navigation('/hangman_game')
                }}
            >Средний Уровень</ButtonComponent>

            <ButtonComponent
                onClick={() => {
                    setMinWordLength(0)
                    setMaxWordLength(5)
                    navigation('/hangman_game')
                }}
            >Лёгкий Уровень</ButtonComponent>
        </div>
    )
}

export default HangmanLevels;