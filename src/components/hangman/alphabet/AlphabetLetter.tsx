import React from 'react';
import '../../../styles/Button.scss';

const AlphabetLetter = ({letter}: { letter: string }) => {
    return (
        <div className={`letter ${letter}`}>
            <button className={"letter_button"}>
                {letter}
            </button>
        </div>
    );
};

export default AlphabetLetter;