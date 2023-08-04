import {configureStore} from "@reduxjs/toolkit";
import todoReducer from './random_word/wordSlice';

export const store = configureStore({
    reducer: {
        word: todoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;