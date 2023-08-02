import React from 'react';
import {HangmanDataProps} from "../alphabet/AlphabetContainer";
import BodyParts from "./BodyParts";
import './../../../styles/Hangman.scss';

const ManContainer = (props: HangmanDataProps) => {
    return (
        <div style={{
            position: "relative",
            width: "90%",
            height: "44%"
        }}>
            {props.hangmanData.hangman.map(item => {
                return <BodyParts item={item} key={item}/>
            })}
        </div>
    );
};

export default ManContainer;