import getWordLength from "../../util/getWordLength";
import {fetchRandomWord} from "./random_word_api";

const setWordLength = (level: string | undefined): any => {
    let string = ''
    getWordLength(level)

    fetchRandomWord()
};

export default setWordLength;