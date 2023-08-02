import React from 'react';
import '../../styles/App.scss';
import WordContainer from "../../components/hangman/word/WordContainer";
import ManContainer from "../../components/hangman/man/ManContainer";
import AlphabetContainer from "../../components/hangman/alphabet/AlphabetContainer";
import hangmanData from "../../data/hangmanData";
import {MainButton} from "@vkruglikov/react-telegram-web-app";

const HangmanPlayground = (word: { word: string }) => {
    console.log(word)
    return (
        <div className={"_game_container"}>
            <ManContainer hangmanData={hangmanData}/>
            <WordContainer/>
            <AlphabetContainer hangmanData={hangmanData}/>
            <MainButton text={"Закончить Игру"}/>
        </div>
    );
};

export default HangmanPlayground;