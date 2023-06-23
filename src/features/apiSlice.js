import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1"
  }),
  endpoints: builder => ({
    getAll: builder.query({
      query: () => "/all"
    })
  })
});

export const { useGetAllQuery } = apiSlice;
