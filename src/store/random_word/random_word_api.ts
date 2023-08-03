import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const randomWordApi = createApi({
    reducerPath: 'random_word/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://random-word-api.herokuapp.com/'
    }),
    endpoints: build => ({
        getWord: build.query<string, string[]>({
            query: (word: string[]) => ({
                url: 'word',
                params: word
            }),
            transformResponse: (response: string[]) => response[0]
        })
    })
})

export const {useGetWordQuery} = randomWordApi