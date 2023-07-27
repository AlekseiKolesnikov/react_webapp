import React from 'react';
import ButtonComponent from "../../components/UI/ButtonComponent/ButtonComponent";
import {useNavigate} from "react-router-dom";
import './HangmanLevels.scss'

const HangmanLevels = () => {
    const navigation = useNavigate();

    return (
        <div style={{height: '30vh'}} className={"_buttons_flex_container"}>
            <ButtonComponent
                style={{height: '40%'}}
                onClick={() => {
                    navigation('/')
                }}
            >Сложный Уровень</ButtonComponent>

            <ButtonComponent
                style={{height: '40%'}}
                onClick={() => {
                navigation('/')
            }}
            >Средний Уровень</ButtonComponent>

            <ButtonComponent
                style={{height: '40%'}}
                onClick={() => {
                navigation('/')
            }}
            >Лёгкий Уровень</ButtonComponent>
        </div>
    )
}

export default HangmanLevels;