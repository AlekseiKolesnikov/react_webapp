import axios from "axios";

const url = 'https://a16c-2a00-f940-2-4-2-00-324.ngrok-free.app/random_word';

const getWord = async () => {
    try {
        const response: object = await axios(url);
        return  response
    } catch (error) {
        return error = `Couldn't get the word`;
    }
};

export default getWord;