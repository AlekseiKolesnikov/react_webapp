


let maxLength: number = 10;
let minLength: number = 0;

const getWordLength = (level: string): [number, number] => {
    if (level === 'hard') {
        maxLength = 11;
        minLength = 9;
    }
    if (level === 'medium') {
        maxLength = 8;
        minLength = 6;
    }
    if (level === 'easy') {
        maxLength = 5;
        minLength = 3;
    }

    return [maxLength, minLength];
}

export default getWordLength;