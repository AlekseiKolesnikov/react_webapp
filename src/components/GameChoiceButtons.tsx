import React, {useState} from 'react';
import {KeyButton} from "./button/KeyButton";

export function GameChoiceButtons() {
    const [condition, setCondition] = useState(false);

    return (
        <div className={"buttons_container _container"}>
            <KeyButton
                onCLick={() => {
                    setCondition(true)
                }}
                text={"Игра Мемори"}/>
            <KeyButton
                onCLick={() => {
                    setCondition(true)
                }}
                text={"Игра Виселица"}/>
        </div>
    )
}

