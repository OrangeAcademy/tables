import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IEvent} from "models/Event";
import {MONGO_DB_PATH} from "../constants/paths";

export const eventAPI = createApi({
    reducerPath: 'eventAPI',
    baseQuery: fetchBaseQuery({baseUrl: MONGO_DB_PATH}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IEvent[], number>({
            query: (limit: number = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            }),
            // providesTags: result => ['Post']
        }),
        createPost: build.mutation<IEvent, IEvent>({
            query: (post) => ({
                url: `/data/beta`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IEvent, IEvent>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IEvent, IEvent>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        }),
    })
})
