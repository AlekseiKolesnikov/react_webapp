import React, {useEffect, useState} from 'react';
import '../../styles/App.scss';
import {useNavigate, useParams} from "react-router-dom";
import WordContainer from "../../components/hangman/word/WordContainer";
import ManContainer from "../../components/hangman/man/ManContainer";
import AlphabetContainer from "../../components/hangman/alphabet/AlphabetContainer";
import hangmanData from "../../data/hangmanData";
import {Telegram} from "telegram-web-app-for-bot";

const HangmanPlayground = () => {
    const {level} = useParams();
    const navigation = useNavigate();
    console.log(level)
    const [loading, setLoading] = useState(true);

    return (
        <div className={"_game_container"}>
            <ManContainer/>
            <WordContainer/>
            <AlphabetContainer hangmanData={hangmanData}/>
        </div>
    );
};

export default HangmanPlayground;