import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Định nghĩa các interface cho request và response
interface Passenger {
  fullName: string;
  passengerTypeId: number;
  identityCardNumber: string;
}

interface Ticket {
  startStationId: number;
  endStationId: number;
  departureDate: string;
  seatId: number;
  price: number;
  passenger: Passenger;
  departure: boolean;
}

interface BookingRequest {
  bookingTime: string;
  startStationId: number;
  endStationId: number;
  tickets: Ticket[];
}

interface BookingResponse {
  bookingId: number;
  bookingTime: string;
  startStationId: number;
  endStationId: number;
  tickets: Ticket[];
  status: string;
}

// Tạo API cho booking
export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    // Mutation để đặt vé
    createBooking: builder.mutation<BookingResponse, BookingRequest>({
      query: (bookingData) => ({
        url: "/bookings", // Địa chỉ endpoint để tạo booking
        method: "POST",
        body: bookingData,
      }),
    }),
    // Query để lấy thông tin về một booking (nếu cần)
    getBookingById: builder.query<BookingResponse, number>({
      query: (bookingId) => `/bookings/${bookingId}`, // Địa chỉ lấy thông tin booking theo ID
    }),
  }),
});

export const { useCreateBookingMutation, useGetBookingByIdQuery } = bookingApi;
