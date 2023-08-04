import React, {useEffect} from 'react';
import Loader from "../components/ui/Loader";
import HangmanPlayground from "./hangman/HangmanPlayground";
import {useParams} from "react-router-dom";
import setWordLength from "../store/random_word/set_word_length";
import {useAppDispatch, useAppSelector} from "../types/hooks";
import {fetchRandomWord} from "../store/random_word/random_word_api";

const SwitchLoading = () => {
    const {level} = useParams();
    const loading = useAppSelector((state) => state.word.status);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchRandomWord());
    }, [dispatch]);

    return (
        <div>
            {(loading === "loading") ? <Loader/> : <HangmanPlayground word={`${level}`}/>}
        </div>
    );
};

export default SwitchLoading;