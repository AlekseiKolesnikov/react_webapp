import {IHangmanData} from "../types/IHangmanData";

const hangmanData: IHangmanData = {
    alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    word: [],
    hangman: ['bottom', 'column', 'top', 'rope', 'head', 'body', 'right-hand',
        'left-hand', 'right-leg', 'left-leg']
}

export default hangmanData;