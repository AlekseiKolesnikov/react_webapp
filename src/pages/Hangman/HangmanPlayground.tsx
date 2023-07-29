import React, {useState} from 'react';
import '../../styles/App.scss';
import {useParams} from "react-router-dom";
import WordContainer from "../../components/hangman/word/WordContainer";
import ManContainer from "../../components/hangman/man/ManContainer";
import AlphabetContainer from "../../components/hangman/alphabet/AlphabetContainer";
import hangmanData from "../../data/hangmanData";

const HangmanPlayground = () => {
    const {level} = useParams();
    console.log(level)
    const [loading, setLoading] = useState(true);


    return (
        <div className={"playground _game_container"}>
            <ManContainer/>
            <WordContainer/>
            <AlphabetContainer hangmanData={hangmanData}/>
        </div>
    );
};

export default HangmanPlayground;