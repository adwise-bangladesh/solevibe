import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend.solevibe.xyz/wp-json/wc/v3/",
    prepareHeaders: (headers) => headers.set(
      'Authorization', `Basic Y2tfZTljOWYyZDhiNDkzZTUzNjM5ODBlNzllZmJiMDFiZjUxOTdjM2E0NTpjc19iYWQ1MWI0NTJjYTI0ZjFiNTM3MDQwMmFhOTFkYjI3NjRjYTFlOGJj`
    )
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, any>({
      query: () => `products`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;