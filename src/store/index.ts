import {configureStore} from "@reduxjs/toolkit";
import {randomWordApi} from "./random_word/random_word_api";

export const store = configureStore({
    reducer: {
        [randomWordApi.reducerPath]: randomWordApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(randomWordApi.middleware)
})