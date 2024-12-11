import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface SearchParams {
  departureDate: string | null;
  startStationCode: string;
  endStationCode: string;
  passengerCount: number;
  // roundTrip: boolean;,,
}

export const trainsApi = createApi({
  reducerPath: "trainsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    // postSearchTrains: builder.mutation<Train[], SearchParams>({
    //   query: (params) => ({
    //     url: "trains/search",
    //     method: "POST",
    //     body: params,
    //   }),
    // }),
    postSearchTrains: builder.query<Train[], SearchParams>({
      query: (params) => ({
        url: "trains/search",
        method: "POST",
        body: params,
      }),
    }),
  }),
});

export const { usePostSearchTrainsQuery } = trainsApi;
