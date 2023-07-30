import React from 'react';

const AlphabetLetter = ({letter}: { letter: string}) => {
    console.log(letter)
    return (
        <div style={{
            width: "3.6em",
            height: "3.6em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <button style={{
                width: "100%",
                height: "100%",
                fontFamily: "Tektur",
                fontSize: "20px"
            }}>
                {letter}
            </button>
        </div>
    );
};

export default AlphabetLetter;