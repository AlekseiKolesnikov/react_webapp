import {createAsyncThunk} from "@reduxjs/toolkit";

const url = 'https://random-word-api.herokuapp.com/word';

export const fetchRandomWord: any = createAsyncThunk(
    'word/fetchRandomWord',
    async function (level, {rejectWithValue}) {
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error('Server Error!')
            }

            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)