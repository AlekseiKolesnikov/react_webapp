import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchRandomWord} from "./random_word_api";
import {WordAction, WordState} from "../../types/IWordSlice";

const wordSlice = createSlice<WordState, WordAction>({
    name: 'word',
    initialState: {
        word: '',
        status: null,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [fetchRandomWord.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchRandomWord.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.word = action.payload;
        },
        [fetchRandomWord.rejected]: (state, action) => {}
    }
})

export default wordSlice.reducer;