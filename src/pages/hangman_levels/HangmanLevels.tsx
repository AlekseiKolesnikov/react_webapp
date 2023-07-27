import React from 'react';
import ButtonComponent from "../../components/UI/ButtonComponent/ButtonComponent";
import {Routes, useLocation, useNavigate} from "react-router-dom";
import './HangmanLevels.scss'
import useAnimTransition from "../../hooks/useAnimTransition";

const HangmanLevels = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const animation = useAnimTransition('fadeIn', location);

    return (
        <div style={{height: '30vh'}}
             className={`choose_level _buttons_flex_container ${animation.action = 'fadeIn'}`}>
            <ButtonComponent
                onClick={() => {
                    navigation('/')
                }}
            >Сложный Уровень</ButtonComponent>

            <ButtonComponent
                onClick={() => {
                    navigation('/')
                }}
            >Средний Уровень</ButtonComponent>

            <ButtonComponent
                onClick={() => {
                    navigation('/')
                }}
            >Лёгкий Уровень</ButtonComponent>
            <Routes location={animation.displayLocation}/>
        </div>
    )
}

export default HangmanLevels;