import React, {useState} from 'react';
import {ButtonComponent} from "../UI/ButtonComponent/ButtonComponent";
import './GameChoiceButtonsComponent.scss';

export function GameChoiceButtonsComponent() {
    const [conditionMemory, setConditionMemory] = useState(false);
    const [conditionHagman, setConditionHangman] = useState(false);

    return (
        <div className={"buttons_container _container"}>
            <ButtonComponent onClick={() => {
                setConditionMemory(true)
            }}>
                Мемори
            </ButtonComponent>

            <ButtonComponent onClick={() => {
                setConditionHangman(true)
            }}>
                Виселица
            </ButtonComponent>
        </div>
    )
}

