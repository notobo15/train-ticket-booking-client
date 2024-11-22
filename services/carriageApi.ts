import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carriageApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    getSeatsByCarriage: builder.query<Seat[], number>({
      query: (carriageId) => `/carriages/${carriageId}/seats`,
    }),
    getCarriageById: builder.query<Carriage, number>({
      query: (carriageId) => `/carriages/${carriageId}`,
    }),
    getCarriagesByTrainId: builder.query<Carriage[], number>({
      query: (carriageId) => `/carriages/by-train/${carriageId}`,
    }),
  }),
});

export const { useGetSeatsByCarriageQuery, useGetCarriageByIdQuery, useGetCarriagesByTrainIdQuery } = carriageApi;
