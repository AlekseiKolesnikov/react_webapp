import React from 'react';
import AlphabetLetter from "./AlphabetLetter";
import {IHangmanData} from "../../../types/IHangmanData";

interface HangmanDataProps {
    hangmanData: IHangmanData
}

const style: object = {
    width: "90%",
    height: "35%",
    border: "solid black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    flexWrap: "wrap"
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