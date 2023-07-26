import React from 'react';
import {useNavigate} from 'react-router-dom';
import {ButtonComponent} from "../UI/ButtonComponent/ButtonComponent";
import './GameChoiceButtonsComponent.scss';

export function GameChoiceButtonsComponent() {
    const navigation = useNavigate()

    return (
        <div className={"buttons_container _container"}>
            <ButtonComponent onClick={() => {
                navigation('../pages/memoryGameField/memoryGameField.tsx');
            }}>
                Мемори
            </ButtonComponent>

            <ButtonComponent onClick={() => {
                navigation('../pages/hangmanLevelsChoice/hangmanLevelsChoice.tsx');
            }}>
                Виселица
            </ButtonComponent>
        </div>
    )
}

