import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Event} from "models/Event";

export const eventAPI = createApi({
    reducerPath: 'eventAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
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
                url: `/posts`,
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
