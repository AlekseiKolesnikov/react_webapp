import {createSlice} from "@reduxjs/toolkit";
import {fetchRandomWord} from "./random_word_api";
import {WordState} from "../../types/WordState";

const initialState: WordState = {
    word: '',
    status: null,
    error: null
}

const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomWord.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchRandomWord.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.word = action.payload;
            })
            .addCase(fetchRandomWord.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            });
    }
})

export default wordSlice.reducer;