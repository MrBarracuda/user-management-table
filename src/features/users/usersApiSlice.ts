import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type User = {
  id: number
  email: string
  username: string
  name: string
  phone: string
}

type UsersApiResponse = User[]

const userListUrl = import.meta.env.VITE_DATABASE_URL + "/users"

export const usersApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: userListUrl }),
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  endpoints: build => ({
    getUsers: build.query<UsersApiResponse, number>({
      query: (limit = 10) => `?limit=${limit}`,
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),
  }),
})

export const { useGetUsersQuery } = usersApiSlice
