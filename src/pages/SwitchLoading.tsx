import React, {useEffect, useState} from 'react';
import Loader from "../components/ui/Loader";
import HangmanPlayground from "./Hangman/HangmanPlayground";
import {useParams} from "react-router-dom";

const SwitchLoading = () => {
    const {level} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {setLoading(false)}, 100)
    }, []);

    return (
        <div>
            {loading ? <Loader/> : <HangmanPlayground word={`${level}`}/>}
        </div>
    );
};

export default SwitchLoading;