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

    getUserTodos: builder.query({
      query: (userId) => ({
        url: `${TODO_URL}/${userId}`,
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
  useGetUserTodosQuery,
  useGetTodosByIdQuery,
  useAddTodoMutation,
  useEditTodoMutation,
  useDeleteTodoMutation,
  useSetIsCompletedMutation,
} = todoApiSlice;
