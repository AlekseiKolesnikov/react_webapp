import axios from "axios";

const url = 'https://random-word-api.herokuapp.com/word';

const getWord = async () => {
    return axios.get(url);
};

export default getWord;