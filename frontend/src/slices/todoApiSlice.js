// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const todoApiSlice = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
    }),
    getTodosById: builder.query({
      query: (todoId) => ({
        url: `/todos/${todoId}`,
      }),
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: `/todos`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useGetTodosQuery, useGetTodosByIdQuery, useAddTodoMutation } =
  todoApiSlice;
