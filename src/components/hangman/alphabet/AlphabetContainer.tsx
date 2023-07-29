import React from 'react';
import AlphabetLetter from "./AlphabetLetter";
import {IHangmanData} from "../../../types/IHangmanData";

interface HangmanDataProps {
    hangmanData: IHangmanData
}

const AlphabetContainer = (props: HangmanDataProps) => {
    return (
        <div>
            {props.hangmanData.alphabet.map(letter => {
                return <AlphabetLetter letter={letter} key={letter}/>
            })}
        </div>
    );
};

export default AlphabetContainer;