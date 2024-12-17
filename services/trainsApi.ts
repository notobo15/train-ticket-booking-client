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
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
  endpoints: (builder) => ({
    // postSearchTrains: builder.mutation<Train[], SearchParams>({
    //   query: (params) => ({
    //     url: "trains/search",
    //     method: "POST",
    //     body: params,
    //   }),
    // }),
    postSearchTrains: builder.query<Response<Train[]>, SearchParams>({
      query: (params) => ({
        url: "/api/v1/Train/SearchTrains/search",
        method: "GET",
        params: params,
      }),
      // keepUnusedDataFor: 0.1,
    }),
    getTrainSchedules: builder.query<Response<Train[]>, SearchParams>({
      query: (params) => ({
        url: `/api/v1/Train/SearchTrainSchedules`,
        params: params,
      }),
    }),
  }),
});

export const { usePostSearchTrainsQuery, useLazyGetTrainSchedulesQuery } = trainsApi;
