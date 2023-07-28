import React from 'react';
import '../../styles/App.scss';
import {useParams} from "react-router-dom";

const HangmanPlayground = () => {
    const { level} = useParams();

    console.log(level)

    return (
        <div className={"playground _game_container"}>
            <div className={"playground_hangman_container"}>
                <div className={"playground_hangman"}></div>
            </div>
            <div className={"playground_word_container"}>
                <div className={"playground_word"}></div>
            </div>
            <div className={"playground_letters_container"}>
                <div className={"playground_letters"}></div>
            </div>
        </div>
    );
};

export default HangmanPlayground;