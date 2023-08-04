import {createAsyncThunk} from "@reduxjs/toolkit";

const url = 'https://random-word-api.herokuapp.com/word';

export const fetchRandomWord = createAsyncThunk<string, undefined, { rejectValue: string }>(
    'word/fetchRandomWord',
    async function (_, {rejectWithValue}) {
        const response = await fetch(url)

        if (!response.ok) {
            return rejectWithValue('Server Error!')
        }

        const data: string = await response.json();

        console.log(data)
        return data
    }
)