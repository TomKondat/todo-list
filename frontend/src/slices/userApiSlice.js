import { apiSlice } from "./apiSlice";
import { USER_URL } from "./urlConstrains";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (buider) => ({
    getUsers: buider.query({
      query: () => ({
        url: USER_URL,
      }),
      keepUnusedDataFor: 5,
    }),

    getUserById: buider.query({
      query: (userId) => ({
        url: `${USER_URL}/${userId}`,
      }),
      keepUnusedDataFor: 5,
      provideTags: ["User"],
    }),

    register: buider.mutation({
      query: (data) => ({
        url: `${USER_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),

    login: buider.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useRegisterMutation,
  useLoginMutation,
} = userApiSlice;
