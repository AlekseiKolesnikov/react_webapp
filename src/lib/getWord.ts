import apiResult from "./apiResult";
import getWordLength from "../util/getWordLength";
import getWordArray from "./getWordArray";

const getWord = (callBack: (word: string[]) => void, level: string | undefined) => {
    apiResult().then(result => {
        const word: string = result.data[0];
        const lengthArray: [number, number] = getWordLength(`${level}`);
        console.log(word);

        if (word.length <= lengthArray[0] && word.length >= lengthArray[1]) {
            callBack(getWordArray(word));
        } else {
            getWord(callBack, word);
        }
    });
}

export default getWord;