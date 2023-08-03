const getWordArray = (wordArray: string) => {
    let array: string[] = [];
        for (let letter of wordArray) {
            array.push(letter);
        }
    return array;
}

export default getWordArray;