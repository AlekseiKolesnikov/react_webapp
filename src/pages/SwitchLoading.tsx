import React, {useEffect, useState} from 'react';
import Loader from "../components/ui/Loader";
import HangmanPlayground from "./hangman/HangmanPlayground";
import {useParams} from "react-router-dom";
import useDepend from "../hooks/useDepend";

const SwitchLoading = () => {
    const {level} = useParams();
    const [loading, setLoading] = useState(true);
    const dependence = useDepend(level);

    useEffect(() => {
        setLoading(false)
    }, [dependence]);

    return (
        <div>
            {loading ? <Loader/> : <HangmanPlayground word={`${level}`}/>}
        </div>
    );
};

export default SwitchLoading;