import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const provincesApi = createApi({
  reducerPath: "provincesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    getProvincesWithStations: builder.query<APIResponse<Province[]>, void>({
      query: () => "provinces/with-stations",
      keepUnusedDataFor: 300,
    }),
  }),
});

export const { useGetProvincesWithStationsQuery, useLazyGetProvincesWithStationsQuery } = provincesApi;
