import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { carriageApi } from "./carriageApi"; // Assuming `carriageApi` is properly imported

interface SeatHoldRequest {
  seatId: number;
  trainId: number;
  departureStationId: number;
  arrivalStationId: number;
  departureStationCode: string;
  arrivalStationCode: string;
  departureDate: string;
}

interface SeatHold {
  id: number;
  seat: Seat;
  train: Train;
  departureStation: Station;
  arrivalStation: Station;
  departureDate: string;
  holdStartTime: string;
  expirationTime: string;
  status: string;
  departure: boolean;
}

export const seatApi = createApi({
  reducerPath: "seatApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    createSeatHold: builder.mutation<APIResponse<SeatHold>, SeatHoldRequest>({
      query: (seatHoldData) => ({
        url: "/seatholds",
        method: "POST",
        body: seatHoldData,
      }),
    }),
    deleteSeatHold: builder.mutation<APIResponse<null>, number>({
      query: (seatHoldId) => ({
        url: `/seatholds/${seatHoldId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useCreateSeatHoldMutation, useDeleteSeatHoldMutation } = seatApi;
