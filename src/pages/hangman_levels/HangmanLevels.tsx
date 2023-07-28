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

    return (
        <div style={{height: '30vh'}}
             className={`choose_level _buttons_flex_container ${renderTransition.current}`}>
            <ButtonComponent
                onClick={() => {
                    // getWordLength()
                    setMinWordLength(9)
                    setMaxWordLength(11)
                    navigation('/')
                }}
            >Сложный Уровень</ButtonComponent>

            <ButtonComponent
                onClick={() => {
                    setMinWordLength(6)
                    setMaxWordLength(8)
                    navigation('/')
                }}
            >Средний Уровень</ButtonComponent>

            <ButtonComponent
                onClick={() => {
                    setMinWordLength(0)
                    setMaxWordLength(5)
                    navigation('/')
                }}
            >Лёгкий Уровень</ButtonComponent>
        </div>
    )
}

export default HangmanLevels;