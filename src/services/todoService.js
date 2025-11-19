// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/todos" }),
  endpoints: (builder) => ({
    allTodos: builder.query({
      query: () => `/getAllTodos`,
    }),
    getTodosByUserName: builder.query({
      query: (username) => `/getTodosByUsername/${username}`,
    }),
    addNewTodo: builder.mutation({
      query: (newtodo) => {
        return {
          url: "/addTodo",
          method: "POST",
          body: newtodo,
        };
      },
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/deleteTodo/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddNewTodoMutation,
  useAllTodosQuery,
  useGetTodosByUserNameQuery,
  useDeleteTodoMutation,
  useLazyGetTodosByUserNameQuery,
} = todosApi;
