import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export const carriageApi = createApi({
  reducerPath: "carriageApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  tagTypes: ["Carriage"], // Khai báo tag "Carriage"
  endpoints: (builder) => ({
    getSeatsByCarriage: builder.query<Seat[], number>({
      query: (carriageId) => `/carriages/${carriageId}/seats`,
      keepUnusedDataFor: 0,
    }),
    getCarriages: builder.query<
      APIResponse<Carriage>,
      {
        carriageId: number;
        trainId: number;
        departureStationId: number;
        arrivalStationId: number;
        departureDate: string;
        departureStationCode: string;
        arrivalStationCode: string;
      }
    >({
      query: ({
        carriageId,
        trainId,
        departureStationId,
        arrivalStationId,
        departureDate,
        arrivalStationCode,
        departureStationCode,
      }) => ({
        url: `/carriages/${carriageId}/seats`,
        params: {
          trainId,
          departureStationId,
          arrivalStationId,
          departureDate,
          arrivalStationCode,
          departureStationCode,
        },
      }),
      // Cung cấp tag cho mỗi carriages và cả một tag tổng hợp "LIST"
      providesTags: (result, error, arg) => [
        { type: "Carriage", id: arg.carriageId },
        { type: "Carriage", id: "LIST" }, // Đảm bảo invalidates đúng tag "LIST"
      ],
    }),
    createSeatHold: builder.mutation<APIResponse<SeatHold>, SeatHoldRequest>({
      query: (seatHoldData) => ({
        url: "/seatholds",
        method: "POST",
        body: seatHoldData,
      }),
      // Khi tạo seat hold, invalidates tất cả carriages
      invalidatesTags: [{ type: "Carriage", id: "LIST" }],
    }),
    deleteSeatHold: builder.mutation<APIResponse<null>, number>({
      query: (seatHoldId) => ({
        url: `/seatholds/${seatHoldId}`,
        method: "DELETE",
      }),
      // Khi xóa seat hold, invalidates tất cả carriages
      invalidatesTags: [{ type: "Carriage", id: "LIST" }],
    }),
  }),
});

export const {
  useGetSeatsByCarriageQuery,
  useGetCarriagesQuery,
  useCreateSeatHoldMutation,
  useDeleteSeatHoldMutation,
} = carriageApi;
