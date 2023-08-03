import React, {useCallback, useState} from 'react';
import Loader from "../components/ui/Loader";
import HangmanPlayground from "./Hangman/HangmanPlayground";
import {useParams} from "react-router-dom";
import getWord from "../lib/getWord";
import {useSwitch} from "../hooks/useSwitch";

const SwitchLoading = () => {
    const condition = useSwitch();
    const {level} = useParams();
    console.log(level);
    const [loading, setLoading] = useState(true);
    const [letterArray, setLetterArray] = useState([]);

    useCallback(() => {
        getWord((generatedWord) => {
            return setLetterArray(generatedWord);
        }, level);
        setLoading(false)
    }, [condition])

    return (
        <div>
            {loading ? <Loader/> : <HangmanPlayground word={`${letterArray}`}/>}
        </div>
    );
};

export default SwitchLoading;