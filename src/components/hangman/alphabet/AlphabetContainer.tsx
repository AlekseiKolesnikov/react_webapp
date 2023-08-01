import React from 'react';
import AlphabetLetter from "./AlphabetLetter";
import {IHangmanData} from "../../../types/IHangmanData";
import hangmanData from "../../../data/hangmanData";

interface HangmanDataProps {
    hangmanData: IHangmanData
}

const style = {
    width: "90%",
    height: "33%",
    display: "grid",
    gridTemplate: "repeat(4, 1fr) / repeat(7, 1fr)",
    columnGap: "2%",
    rowGap: "3%"
}

const AlphabetContainer = (props: HangmanDataProps) => {
    return (
        <div style={style}>
            {props.hangmanData.alphabet.map(letter => {
                return <AlphabetLetter letter={letter} key={letter}/>
            })}
        </div>
    );
};

export default AlphabetContainer;