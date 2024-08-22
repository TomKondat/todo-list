// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TODO_URL } from "./urlConstrains";
import { apiSlice } from "./apiSlice";

export const todoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: TODO_URL,
      }),
      providesTags: ["Todo"],
    }),

    getTodosById: builder.query({
      query: (todoId) => ({
        url: `${TODO_URL}/${todoId}`,
      }),
    }),

    addTodo: builder.mutation({
      query: (data) => ({
        url: TODO_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todo"],
    }),

    editTodo: builder.mutation({
      query: ({ data, todoId }) => ({
        url: `${TODO_URL}/${todoId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todo"],
    }),

    deleteTodo: builder.mutation({
      query: (todoId) => ({
        url: `${TODO_URL}/${todoId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),

    setIsCompleted: builder.mutation({
      query: (todoId) => ({
        url: `${TODO_URL}/${todoId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});
export const {
  useGetTodosQuery,
  useGetTodosByIdQuery,
  useAddTodoMutation,
  useEditTodoMutation,
  useDeleteTodoMutation,
  useSetIsCompletedMutation,
} = todoApiSlice;
