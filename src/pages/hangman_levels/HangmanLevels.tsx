import React from 'react';
import ButtonComponent from "../../components/UI/ButtonComponent/ButtonComponent";
import {useNavigate} from "react-router-dom";
import './HangmanLevels.scss'

const HangmanLevels = () => {
    const navigation = useNavigate();

    return (
        <div style={{height: '30vh'}} className={"choose_level _buttons_flex_container"}>
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
        </div>
    )
}

export default HangmanLevels;