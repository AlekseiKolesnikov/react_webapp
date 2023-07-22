import React from 'react';

export function GameChoiceButtons() {
    return (
        <div className={"buttons _button_container"}>
            <div className={"buttons__button_container memory_game"}>
                <button className={"buttons__button memory_game_button"}>Игра Мемори</button>
            </div>
            <div className={"buttons__button_container hangman_game"}>
                <button className={"buttons__button hangman_game_button"}>Игра Виселица</button>
            </div>
        </div>
    )
}

