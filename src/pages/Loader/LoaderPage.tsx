import React, {useEffect, useState} from 'react';
import Loader from "../../components/ui/Loader";
import HangmanPlayground from "../Hangman/HangmanPlayground";
import {useParams} from "react-router-dom";
import getWord from "../../lib/getWord";
import getWordLength from "../../util/getWordLength";

const LoaderPage = () => {
    const {level} = useParams();
    console.log(level);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWord().then(result => {
            const word: string = result.data[0];
            const lengthArray: [number, number] = getWordLength(`${level}`);

            if (word.length <= lengthArray[0] && word.length >= lengthArray[1]) {

            } else {

            }
            setTimeout(() => {
                setLoading(false)
                console.log(word);
            }, 10)
        })
    }, []);

    return (
        <div>
            {loading ? <Loader /> : <HangmanPlayground word={`${level}`}/>}
        </div>
    );
};

export default LoaderPage;