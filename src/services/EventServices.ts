import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Event} from "models/Event";
import {MONGO_DB_PATH} from "../constants/paths";

export const eventAPI = createApi({
    reducerPath: 'eventAPI',
    baseQuery: fetchBaseQuery({baseUrl: MONGO_DB_PATH}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<Event[], number>({
            query: (limit: number = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            }),
            // providesTags: result => ['Post']
        }),
        createPost: build.mutation<Event, Event>({
            query: (post) => ({
                url: `/data/beta`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<Event, Event>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<Event, Event>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        }),
    })
})
