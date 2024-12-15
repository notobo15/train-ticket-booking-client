import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const provincesApi = createApi({
  reducerPath: "provincesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
  endpoints: (builder) => ({
    getProvincesWithStations: builder.query<Response<Province[]>, void>({
      query: () => "/api/v1/Province/GetProvincesWithStations/with-stations",
      keepUnusedDataFor: 300,
    }),
  }),
});

export const { useGetProvincesWithStationsQuery, useLazyGetProvincesWithStationsQuery } = provincesApi;
